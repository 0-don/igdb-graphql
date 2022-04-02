import {fields, igdb} from 'ts-igdb-client';
import {Query, Resolver, UseMiddleware} from 'type-graphql';
import {PlatformLogo} from '../../entity';
import {CheckToken} from '../../utils/tokenMiddleware';

@Resolver(() => PlatformLogo)
export class PlatformLogoResolver {
  @Query(() => [PlatformLogo], {nullable: true})
  @UseMiddleware(CheckToken)
  // @CacheControl({ maxAge: 1 })
  async platformLogos() {
    const client = igdb(process.env.CLIENT_ID!, process.env.ACCESS_TOKEN!);
    const {data} = await client
      .request('platform_logos')
      .pipe(fields(['*']))
      .execute();

    return data;
  }
}
