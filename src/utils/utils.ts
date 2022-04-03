import {AxiosResponse} from 'axios';
import {fields, limit, where, whereIn, WhereInFlags} from 'ts-igdb-client';
import {RawRoutes} from 'ts-igdb-client/dist/types';
import {MyContext, RLoader} from '../@types/types';
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
  filterWithValue: StringFilter | FloatFilter | IntFilter,
  field: string,
) => {
  switch (Object.keys(filterWithValue)[0]) {
    case 'equals':
      return where(field, '~', filterWithValue.equals);
    default:
      return undefined;
  }
};
