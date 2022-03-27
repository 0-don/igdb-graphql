import {
  igdb,
  fields,
  where,
  WhereFlags,
  whereIn,
  WhereInFlags,
} from 'ts-igdb-client';
import {
  FieldResolver,
  Query,
  Resolver,
  Root,
  UseMiddleware,
} from 'type-graphql';
import { Game } from '../entity/Game/Game';
import { Loader } from 'type-graphql-dataloader';
import { groupBy } from 'lodash';
import { CacheControl } from '../utils/cache-control';
import { CheckToken } from '../utils/tokenMiddleware';
import { AgeRating } from '../entity/AgeRating';
import DataLoader from 'dataloader';
import util from 'util';
import { proto } from 'ts-igdb-client/proto/compiled';

type AgeRatingDataloader = {
  gameId: number;
  ageRatingId: number[] | (proto.IAgeRating | undefined)[];
};
@Resolver(() => Game)
export class GameResolver {
  @FieldResolver()
  @Loader<AgeRatingDataloader, AgeRating[]>(async (ageRatingList) => {
    const client = igdb(process.env.CLIENT_ID!, process.env.ACCESS_TOKEN!);
    const ageRatingIds = ageRatingList
      .map(({ ageRatingId }) => ageRatingId)
      .flat();

    const { data } = await client
      .request('age_ratings')
      .pipe(fields(['*']), whereIn('id', [...ageRatingIds], WhereInFlags.OR))
      .execute();

    const newAgeRatingList = ageRatingList
      .map((r) => {
        r.ageRatingId = r.ageRatingId.map((x) => data.find((d) => d.id === x));
        return r;
      })
      .map((r) => [...r.ageRatingId]);
    return newAgeRatingList as AgeRating[][];
  })
  async age_ratings(@Root() root: Game) {
    return (dataloader: DataLoader<AgeRatingDataloader, AgeRating[]>) =>
      dataloader.load({
        gameId: root.id,
        ageRatingId: root.age_ratings ?? [],
      } as AgeRatingDataloader);
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
