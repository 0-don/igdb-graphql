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
import { Game } from '../entity/Game/Game';
import { CheckToken } from '../utils/tokenMiddleware';
import { loaderResolver } from '../utils/utils';

@Resolver(() => Game)
export class GameResolver {
  @FieldResolver()
  @Loader<number[], RawRoutes[]>(
    async (ageRatingIds) => await loaderResolver(ageRatingIds, 'age_ratings')
  )
  async age_ratings(@Root() root: Game) {
    return (dataloader: DataLoader<number[], AgeRating[]>) =>
      dataloader.load((root.age_ratings as number[]) || []);
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
    return data;
  }
}
