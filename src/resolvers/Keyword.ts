import {fields, igdb} from 'ts-igdb-client';
import {Query, Resolver, UseMiddleware} from 'type-graphql';
import {Keyword} from '../entity';
import {CheckToken} from '../utils/tokenMiddleware';

@Resolver(() => Keyword)
export class KeywordResolver {
  @Query(() => [Keyword], {nullable: true})
  @UseMiddleware(CheckToken)
  // @CacheControl({ maxAge: 1 })
  async ageRatings() {
    const client = igdb(process.env.CLIENT_ID!, process.env.ACCESS_TOKEN!);
    const {data} = await client
      .request('keywords')
      .pipe(fields(['*']))
      .execute();

    return data;
  }
}
