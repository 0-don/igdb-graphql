import DataLoader from 'dataloader';
import { fields, igdb, where, WhereFlags } from 'ts-igdb-client';
import { RawRoutes } from 'ts-igdb-client/dist/types';
import {
  FieldResolver,
  Query,
  Resolver,
  Root,
  UseMiddleware,
} from 'type-graphql';
import { Loader } from 'type-graphql-dataloader';
import { AgeRating } from '../entity/AgeRating';
import { AlternativeName } from '../entity/AlternativeName';
import { Artwork } from '../entity/Artworks';
import { Game } from '../entity/Game/Game';
import { Collection } from '../entity/Collection';
import { CheckToken } from '../utils/tokenMiddleware';
import { loaderResolver } from '../utils/utils';

export type RLoader<T> = {
  id: number;
  ids: T;
};

@Resolver(() => Game)
export class GameResolver {
  @FieldResolver()
  @Loader<RLoader<number[]>, RawRoutes[]>(
    async (ageRatingIds) => await loaderResolver(ageRatingIds, 'age_ratings')
  )
  async age_ratings(@Root() { id, age_ratings }: Game) {
    return (dataloader: DataLoader<RLoader<number[]>, AgeRating[]>) =>
      dataloader.load({ id, ids: age_ratings as number[] });
  }

  @FieldResolver()
  @Loader<RLoader<number[]>, RawRoutes[]>(
    async (alternativeNameIds) =>
      await loaderResolver(alternativeNameIds, 'alternative_names')
  )
  async alternative_names(@Root() { id, alternative_names }: Game) {
    return (dataloader: DataLoader<RLoader<number[]>, AlternativeName[]>) =>
      dataloader.load({ id, ids: alternative_names as number[] });
  }

  @FieldResolver()
  @Loader<RLoader<number[]>, RawRoutes[]>(
    async (artworksIds) => await loaderResolver(artworksIds, 'artworks')
  )
  async artworks(@Root() { id, artworks }: Game) {
    return (dataloader: DataLoader<RLoader<number[]>, Artwork[]>) =>
      dataloader.load({ id, ids: artworks as number[] });
  }

  @FieldResolver()
  @Loader<RLoader<number[]>, RawRoutes[]>(
    async (bundlesIds) => await loaderResolver(bundlesIds, 'games')
  )
  async bundles(@Root() { id, bundles }: Game) {
    return (dataloader: DataLoader<RLoader<number[]>, Game[]>) =>
      dataloader.load({ id, ids: bundles as unknown as number[] });
  }

  @FieldResolver()
  @Loader<RLoader<number>, RawRoutes[]>(
    async (collectionIds) => await loaderResolver(collectionIds, 'collections')
  )
  async collection(@Root() { id, collection }: Game) {
    return (dataloader: DataLoader<RLoader<number>, Collection[]>) =>
      dataloader.load({ id, ids: collection as number });
  }

  @Query(() => [Game], { nullable: true })
  @UseMiddleware(CheckToken)
  // @CacheControl({ maxAge: 1 })
  async games() {
    const client = igdb(process.env.CLIENT_ID!, process.env.ACCESS_TOKEN!);
    const { data } = await client
      .request('games')
      .pipe(fields(['*']), where('name', '=', 'cs', WhereFlags.CONTAINS))
      .execute();

    // console.log(data);
    return data;
  }
}
