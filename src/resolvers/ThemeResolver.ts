import {fields} from 'ts-igdb-client';
import {Ctx, Query, Resolver, UseMiddleware} from 'type-graphql';
import {MyContext} from '../@types/types';
import {Theme} from '../entity';
import {CheckToken} from '../utils/tokenMiddleware';

@Resolver(() => Theme)
export class ThemeResolver {
  @Query(() => [Theme], {nullable: true})
  @UseMiddleware(CheckToken)
  // @CacheControl({ maxAge: 1 })
  async themes(@Ctx() {client}: MyContext) {
    const {data} = await client
      .request('themes')
      .pipe(fields(['*']))
      .execute();

    return data;
  }
}
