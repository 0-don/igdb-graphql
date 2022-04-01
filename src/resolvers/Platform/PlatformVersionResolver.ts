import DataLoader from 'dataloader';
import { fields, igdb } from 'ts-igdb-client';
import { RawRoutes } from 'ts-igdb-client/dist/types';
import { FieldResolver, Query, Resolver, Root, UseMiddleware } from 'type-graphql';
import { Loader } from 'type-graphql-dataloader';

import { Game, PlatformFamily, PlatformLogo, PlatformVersion } from '../../entity';
import { CheckToken } from '../../utils/tokenMiddleware';
import { loaderResolver, RLoader } from '../../utils/utils';

@Resolver(() => PlatformVersion)
export class PlatformVersionResolver {
  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async memory => await loaderResolver(memory, 'platform_logos'),
  )
  async memory(@Root() {id, memory}: PlatformVersion) {
    return (dataloader: DataLoader<RLoader, PlatformLogo[]>) =>
      dataloader.load({id, ids: memory});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async name => await loaderResolver(name, 'platform_families'),
  )
  async name(@Root() {id, name}: PlatformVersion) {
    return (dataloader: DataLoader<RLoader, PlatformFamily[]>) =>
      dataloader.load({id, ids: name});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async resolutions => await loaderResolver(resolutions, 'games'),
  )
  async resolutions(@Root() {id, resolutions}: PlatformVersion) {
    return (dataloader: DataLoader<RLoader, Game[]>) =>
      dataloader.load({id, ids: resolutions});
  }

  @Query(() => [PlatformVersion], {nullable: true})
  @UseMiddleware(CheckToken)
  // @CacheControl({ maxAge: 1 })
  async platformVersions() {
    const client = igdb(process.env.CLIENT_ID!, process.env.ACCESS_TOKEN!);
    const {data} = await client
      .request('platform_versions')
      .pipe(fields(['*']))
      .execute();

    return data;
  }
}
