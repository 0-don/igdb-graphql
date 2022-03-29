import DataLoader from 'dataloader';
import { fields, igdb } from 'ts-igdb-client';
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
import { AgeRatingContentDescription } from '../entity/AgeRatingContentDescription';
import { CheckToken } from '../utils/tokenMiddleware';
import { loaderResolver, RLoader } from '../utils/utils';

@Resolver(() => AgeRating)
export class AgeRatingResolver {
  @FieldResolver()
  @Loader<RLoader<number[]>, RawRoutes[]>(
    async (content_descriptions) =>
      await loaderResolver(
        content_descriptions,
        'age_rating_content_descriptions'
      )
  )
  async content_descriptions(@Root() { id, content_descriptions }: AgeRating) {
    return (
      dataloader: DataLoader<RLoader<number[]>, AgeRatingContentDescription[]>
    ) => dataloader.load({ id, ids: content_descriptions as number[] });
  }

  @Query(() => [AgeRating], { nullable: true })
  @UseMiddleware(CheckToken)
  // @CacheControl({ maxAge: 1 })
  async ageRatings() {
    const client = igdb(process.env.CLIENT_ID!, process.env.ACCESS_TOKEN!);
    const { data } = await client
      .request('age_ratings')
      .pipe(fields(['*']))
      .execute();

    // console.log(data);
    return data;
  }
}
