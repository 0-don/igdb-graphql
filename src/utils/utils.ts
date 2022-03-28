import { igdb, fields, whereIn, WhereInFlags } from 'ts-igdb-client';
import { RawRoutes } from 'ts-igdb-client/dist/types';
import { RLoader } from '../resolvers/GameResolver';

export const loaderResolver = async (
  ids: readonly RLoader<number>[] | readonly RLoader<number[]>[],
  request: keyof RawRoutes
) => {
  const extractedIds = ids
    .map(({ ids }) => ids)
    .flat()
    .filter((id) => id);

  if (extractedIds.flat().length) {
    const client = igdb(process.env.CLIENT_ID!, process.env.ACCESS_TOKEN!);
    const { data } = await client
      .request(request)
      .pipe(fields(['*']), whereIn('id', extractedIds, WhereInFlags.OR))
      .execute();

    const result = ids.map((r) =>
      Array.isArray(r.ids)
        ? r.ids.map((x) => data.find((d) => d.id === x))
        : data.find((d) => d.id === r.ids) ?? null
    ) as RawRoutes[][];

    return result;
  }

  return ids.map((_) => null) as unknown as RawRoutes[][];
};
