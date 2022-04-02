import {AxiosResponse} from 'axios';
import {fields, igdb, limit, whereIn, WhereInFlags} from 'ts-igdb-client';
import {RawRoutes} from 'ts-igdb-client/dist/types';
import * as entities from '../entity';

export const loaderResolver = async (
  ids: readonly RLoader[],
  request: keyof RawRoutes,
) => {
  const extractedIds = new Set(
    ids
      .map(({ids}) => ids)
      .flat()
      .filter(id => id),
  );

  if (extractedIds.size) {
    const client = igdb(process.env.CLIENT_ID!, process.env.ACCESS_TOKEN!);

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

export type EnitityTypes = InstanceType<typeof entities[keyof typeof entities]>;

export type RLoader = {
  id: number | undefined;
  ids: number[] | number | undefined | EnitityTypes | EnitityTypes[];
};
