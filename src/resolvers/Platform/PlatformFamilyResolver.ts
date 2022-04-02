import {fields, igdb} from 'ts-igdb-client';
import {Query, Resolver, UseMiddleware} from 'type-graphql';
import {PlatformFamily} from '../../entity';
import {CheckToken} from '../../utils/tokenMiddleware';

@Resolver(() => PlatformFamily)
export class PlatformFamilyResolver {
  @Query(() => [PlatformFamily], {nullable: true})
  @UseMiddleware(CheckToken)
  // @CacheControl({ maxAge: 1 })
  async platformFamilies() {
    const client = igdb(process.env.CLIENT_ID!, process.env.ACCESS_TOKEN!);
    const {data} = await client
      .request('platform_families')
      .pipe(fields(['*']))
      .execute();

    return data;
  }
}
