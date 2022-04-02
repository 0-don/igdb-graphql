import {fields} from 'ts-igdb-client';
import {Ctx, Query, Resolver, UseMiddleware} from 'type-graphql';
import {Keyword} from '../entity';
import {CheckToken} from '../utils/tokenMiddleware';
import {MyContext} from '../utils/types';

@Resolver(() => Keyword)
export class KeywordResolver {
  @Query(() => [Keyword], {nullable: true})
  @UseMiddleware(CheckToken)
  // @CacheControl({ maxAge: 1 })
  async keywords(@Ctx() {client}: MyContext) {
    const {data} = await client
      .request('keywords')
      .pipe(fields(['*']))
      .execute();

    return data;
  }
}
