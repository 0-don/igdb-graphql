import { fields, igdb } from 'ts-igdb-client';
import { Query, Resolver, UseMiddleware } from 'type-graphql';

import { PlatformWebsite } from '../../entity';
import { CheckToken } from '../../utils/tokenMiddleware';

@Resolver(() => PlatformWebsite)
export class PlatformWebsiteResolver {
  @Query(() => [PlatformWebsite], {nullable: true})
  @UseMiddleware(CheckToken)
  // @CacheControl({ maxAge: 1 })
  async platformWebsites() {
    const client = igdb(process.env.CLIENT_ID!, process.env.ACCESS_TOKEN!);
    const {data} = await client
      .request('platform_websites')
      .pipe(fields(['*']))
      .execute();

    return data;
  }
}
