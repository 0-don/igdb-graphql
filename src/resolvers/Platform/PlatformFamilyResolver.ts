import {fields} from 'ts-igdb-client';
import {Ctx, Query, Resolver, UseMiddleware} from 'type-graphql';
import {MyContext} from '../../@types/types';
import {PlatformFamily} from '../../entity';
import {CheckToken} from '../../utils/tokenMiddleware';

@Resolver(() => PlatformFamily)
export class PlatformFamilyResolver {
  @Query(() => [PlatformFamily], {nullable: true})
  @UseMiddleware(CheckToken)
  // @CacheControl({ maxAge: 1 })
  async platformFamilies(@Ctx() {client}: MyContext) {
    const {data} = await client
      .request('platform_families')
      .pipe(fields(['*']))
      .execute();

    return data;
  }
}
