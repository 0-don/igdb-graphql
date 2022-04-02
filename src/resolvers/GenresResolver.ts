import {fields} from 'ts-igdb-client';
import {Ctx, Query, Resolver, UseMiddleware} from 'type-graphql';
import {Genre} from '../entity';
import {CheckToken} from '../utils/tokenMiddleware';
import {MyContext} from '../@types/types';

@Resolver(() => Genre)
export class GenreResolver {
  @Query(() => [Genre], {nullable: true})
  @UseMiddleware(CheckToken)
  // @CacheControl({ maxAge: 1 })
  async genres(@Ctx() {client}: MyContext) {
    const {data} = await client
      .request('genres')
      .pipe(fields(['*']))
      .execute();

    return data;
  }
}
