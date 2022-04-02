import {fields} from 'ts-igdb-client';
import {Ctx, Query, Resolver, UseMiddleware} from 'type-graphql';
import {AgeRatingContentDescription} from '../entity';
import {CheckToken} from '../utils/tokenMiddleware';
import {MyContext} from '../utils/types';

@Resolver(() => AgeRatingContentDescription)
export class AgeRatingContentDescriptionResolver {
  @Query(() => [AgeRatingContentDescription], {nullable: true})
  @UseMiddleware(CheckToken)
  // @CacheControl({ maxAge: 1 })
  async ageRatingContentDescriptions(@Ctx() {client}: MyContext) {
    const {data} = await client
      .request('age_rating_content_descriptions')
      .pipe(fields(['*']))
      .execute();

    return data;
  }
}
