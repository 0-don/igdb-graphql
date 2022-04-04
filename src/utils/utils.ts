import {AxiosResponse} from 'axios';
import {
  fields,
  limit,
  where,
  WhereFlags,
  whereIn,
  WhereInFlags,
} from 'ts-igdb-client';
import {RawRoutes} from 'ts-igdb-client/dist/types';
import {MyContext, RLoader} from '../@types/types';
import {BoolFilter} from '../resolvers/inputs/filters/BoolFilter';
import {DateTimeFilter} from '../resolvers/inputs/filters/DateTimeFilter';
import {FloatFilter} from '../resolvers/inputs/filters/FloatFilter';
import {IntFilter} from '../resolvers/inputs/filters/IntFilter';
import {StringFilter} from '../resolvers/inputs/filters/StringFilter';

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

export const wherePipe = (
  typeAndValue: StringFilter &
    FloatFilter &
    IntFilter &
    DateTimeFilter &
    BoolFilter,
  field: string,
) => {
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
