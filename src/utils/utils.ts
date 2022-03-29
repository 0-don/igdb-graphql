import { igdb, fields, whereIn, WhereInFlags, limit } from 'ts-igdb-client';
import { RawRoutes } from 'ts-igdb-client/dist/types';

export const loaderResolver = async (
  ids: readonly RLoader<number>[] | readonly RLoader<number[]>[],
  request: keyof RawRoutes
) => {
  const extractedIds = new Set(
    ids
      .map(({ ids }) => ids)
      .flat()
      .filter((id) => id)
  );

  if (extractedIds.size) {
    const client = igdb(process.env.CLIENT_ID!, process.env.ACCESS_TOKEN!);

    const req = client
      .request(request)
      .pipe(
        fields(['*']),
        whereIn('id', Array.from(extractedIds), WhereInFlags.OR),
        limit(500)
      );

    const { data } = await req.execute();

    const result = ids.map((r) =>
      Array.isArray(r.ids)
        ? r.ids.map((x) => data.find((d) => d.id === x)).filter((i) => i)
        : data.find((d) => d.id === r.ids) ?? null
    ) as RawRoutes[][];

    return result;
  }

  return ids.map((_) => null) as unknown as RawRoutes[][];
};

export type RLoader<T> = {
  id: number;
  ids: T;
};
