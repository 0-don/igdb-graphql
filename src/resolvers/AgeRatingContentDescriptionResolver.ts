import { fields, igdb } from 'ts-igdb-client';
import { Query, Resolver, UseMiddleware } from 'type-graphql';

import { AgeRating, AgeRatingContentDescription } from '../entity';
import { CheckToken } from '../utils/tokenMiddleware';

@Resolver(() => AgeRatingContentDescription)
export class AgeRatingContentDescriptionResolver {
  @Query(() => [AgeRating], {nullable: true})
  @UseMiddleware(CheckToken)
  // @CacheControl({ maxAge: 1 })
  async ageRatingContentDescriptions() {
    const client = igdb(process.env.CLIENT_ID!, process.env.ACCESS_TOKEN!);
    const {data} = await client
      .request('age_rating_content_descriptions')
      .pipe(fields(['*']))
      .execute();

    return data;
  }
}
