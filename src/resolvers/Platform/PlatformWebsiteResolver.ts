import {fields} from 'ts-igdb-client';
import {Ctx, Query, Resolver, UseMiddleware} from 'type-graphql';
import {MyContext} from '../../@types/types';
import {PlatformWebsite} from '../../entity';
import {CheckToken} from '../../utils/tokenMiddleware';

@Resolver(() => PlatformWebsite)
export class PlatformWebsiteResolver {
  @Query(() => [PlatformWebsite], {nullable: true})
  @UseMiddleware(CheckToken)
  // @CacheControl({ maxAge: 1 })
  async platformWebsites(@Ctx() {client}: MyContext) {
    const {data} = await client
      .request('platform_websites')
      .pipe(fields(['*']))
      .execute();

    return data;
  }
}
