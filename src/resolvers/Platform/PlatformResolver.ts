import DataLoader from 'dataloader';
import {fields, igdb} from 'ts-igdb-client';
import {RawRoutes} from 'ts-igdb-client/dist/types';
import {
  FieldResolver,
  Query,
  Resolver,
  Root,
  UseMiddleware,
} from 'type-graphql';
import {Loader} from 'type-graphql-dataloader';
import {RLoader} from '../../@types/types';
import {
  Platform,
  PlatformFamily,
  PlatformLogo,
  PlatformVersion,
  PlatformWebsite,
} from '../../entity';
import {CheckToken} from '../../utils/tokenMiddleware';
import {loaderResolver} from '../../utils/utils';

@Resolver(() => Platform)
export class PlatformResolver {
  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async (platform_logo, {context}) =>
      await loaderResolver(platform_logo, 'platform_logos', context),
  )
  async platform_logo(@Root() {id, platform_logo}: Platform) {
    return (dataloader: DataLoader<RLoader, PlatformLogo[]>) =>
      dataloader.load({id, ids: platform_logo});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async (platform_family, {context}) =>
      await loaderResolver(platform_family, 'platform_families', context),
  )
  async platform_family(@Root() {id, platform_family}: Platform) {
    return (dataloader: DataLoader<RLoader, PlatformFamily[]>) =>
      dataloader.load({id, ids: platform_family});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async (versions, {context}) =>
      await loaderResolver(versions, 'platform_versions', context),
  )
  async versions(@Root() {id, versions}: Platform) {
    return (dataloader: DataLoader<RLoader, PlatformVersion[]>) =>
      dataloader.load({id, ids: versions});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async (websites, {context}) =>
      await loaderResolver(websites, 'platform_websites', context),
  )
  async websites(@Root() {id, websites}: Platform) {
    return (dataloader: DataLoader<RLoader, PlatformWebsite[]>) =>
      dataloader.load({id, ids: websites});
  }

  @Query(() => [Platform], {nullable: true})
  @UseMiddleware(CheckToken)
  // @CacheControl({ maxAge: 1 })
  async platforms() {
    const client = igdb(process.env.CLIENT_ID!, process.env.ACCESS_TOKEN!);
    const {data} = await client
      .request('platforms')
      .pipe(fields(['*']))
      .execute();

    return data;
  }
}
