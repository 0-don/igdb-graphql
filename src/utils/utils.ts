import {AxiosResponse} from 'axios';
import {
  and,
  fields,
  limit,
  or,
  sort,
  where,
  WhereFlags,
  whereIn,
  WhereInFlags,
} from 'ts-igdb-client';
import {RawRoutes} from 'ts-igdb-client/dist/types';
import {
  EntityArgs,
  EntityField,
  EntitySortInput,
  EntityWhereInput,
  InputFilter,
  MyContext,
  RLoader,
} from '../@types/types';

export const loaderResolver = async (
  ids: readonly RLoader[],
  request: keyof RawRoutes,
  {client}: MyContext,
) => {
  const extractedIds = new Set(
    ids
      .map(({ids}) => ids)
      .flat()
      .filter(id => id),
  );

  if (extractedIds.size) {
    const req = client
      .request(request)
      .pipe(
        fields(['*']),
        whereIn('id', Array.from(extractedIds), WhereInFlags.OR),
        limit(500),
      );

    let res: AxiosResponse<RawRoutes[keyof RawRoutes][]>;
    let statusCode = 0;
    while (statusCode === 429 || statusCode === 0) {
      try {
        res = await req.execute();
        statusCode = res.status;
      } catch (error) {
        statusCode = error.response.status;
      }
    }

    const {data} = res!;
    // [[], [], [], ...] vs [{}, {}, {}, ...]
    const result = ids.map(r =>
      Array.isArray(r.ids)
        ? r.ids.map(x => data.find(d => d.id === x)).filter(i => i)
        : data.find(d => d.id === r.ids) ?? null,
    ) as RawRoutes[][];

    return result;
  }

  return ids.map(_ => null) as unknown as RawRoutes[][];
};

export const pipeFactory = (
  args: EntityArgs,
  entityFields: readonly EntityField[],
) => {
  let pipe: any[] = [fields('*')];

  if (args.where) {
    pipe = [...pipe, ...whereFactory(args.where, entityFields)];
  }

  if (args.sort) {
    pipe = [...pipe, ...sortFactory(args.sort)];
  }

  return pipe;
};

export const sortFactory = (sortInput: EntitySortInput) =>
  Object.keys(sortInput).map(key => sort(key, sortInput[key as EntityField]));

export const whereFactory = (
  where: EntityWhereInput,
  entityFields: readonly EntityField[],
) => {
  let pipe: any[] = [];

  Object.keys(where).forEach(key => {
    if (entityFields.includes(key as EntityField)) {
      const typeAndValue = where[key as EntityField] as InputFilter;
      pipe.push(wherePipe(typeAndValue, key as EntityField));
    }

    key === 'AND' && pipe.push(and(...whereFactory(where.AND!, entityFields)));

    key === 'OR' && pipe.push(or(...whereFactory(where.OR!, entityFields)));
  });

  return pipe;
};

export const wherePipe = (typeAndValue: InputFilter, field: EntityField) => {
  switch (Object.keys(typeAndValue)[0]) {
    case 'equals':
      return where(field, '=', typeAndValue.equals);
    case 'in':
      return whereIn(field, typeAndValue.in || [], WhereInFlags.OR);
    case 'notIn':
      return whereIn(field, typeAndValue.notIn || [], WhereInFlags.NOR);
    case 'lt':
      return where(field, '<', typeAndValue.lt);
    case 'lte':
      return where(field, '<=', typeAndValue.lte);
    case 'gt':
      return where(field, '>', typeAndValue.gt);
    case 'gte':
      return where(field, '>=', typeAndValue.gte);
    case 'contains':
      return where(field, '=', typeAndValue.contains, WhereFlags.CONTAINS);
    case 'startsWith':
      return where(field, '=', typeAndValue.startsWith, WhereFlags.STARTSWITH);
    case 'endsWith':
      return where(field, '=', typeAndValue.endsWith, WhereFlags.ENDSWITH);
    case 'not':
      return where(field, '!=', typeAndValue.not);
    default:
      return undefined;
  }
};
