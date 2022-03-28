import { igdb, fields, whereIn, WhereInFlags } from 'ts-igdb-client';
import { RawRoutes } from 'ts-igdb-client/dist/types';

export const loaderResolver = async (
  ids: readonly number[][],
  request: keyof RawRoutes
) => {
  const client = igdb(process.env.CLIENT_ID!, process.env.ACCESS_TOKEN!);
  const { data } = await client
    .request(request)
    .pipe(fields(['*']), whereIn('id', ids.flat(), WhereInFlags.OR))
    .execute();

  return ids.map((r) =>
    r.map((x) => data.find((d) => d.id === x))
  ) as RawRoutes[][];
};
