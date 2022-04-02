import DataLoader from 'dataloader';
import {fields} from 'ts-igdb-client';
import {RawRoutes} from 'ts-igdb-client/dist/types';
import {
  Ctx,
  FieldResolver,
  Query,
  Resolver,
  Root,
  UseMiddleware,
} from 'type-graphql';
import {Loader} from 'type-graphql-dataloader';
import {AgeRating, AgeRatingContentDescription} from '../entity';
import {CheckToken} from '../utils/tokenMiddleware';
import {MyContext, RLoader} from '../@types/types';
import {loaderResolver} from '../utils/utils';

@Resolver(() => AgeRating)
export class AgeRatingResolver {
  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async content_descriptions =>
      await loaderResolver(
        content_descriptions,
        'age_rating_content_descriptions',
      ),
  )
  async content_descriptions(@Root() {id, content_descriptions}: AgeRating) {
    return (dataloader: DataLoader<RLoader, AgeRatingContentDescription[]>) =>
      dataloader.load({id, ids: content_descriptions});
  }

  @Query(() => [AgeRating], {nullable: true})
  @UseMiddleware(CheckToken)
  // @CacheControl({ maxAge: 1 })
  async ageRatings(@Ctx() {client}: MyContext) {
    const {data} = await client
      .request('age_ratings')
      .pipe(fields(['*']))
      .execute();

    return data;
  }
}
