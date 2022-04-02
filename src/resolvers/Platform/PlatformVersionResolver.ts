import DataLoader from 'dataloader';
import {fields} from 'ts-igdb-client';
import {RawRoutes} from 'ts-igdb-client/dist/types';
import {
  Ctx,
  FieldResolver,
  Query,
  Resolver,
  Root,
  UseMiddleware,
} from 'type-graphql';
import {Loader} from 'type-graphql-dataloader';
import {MyContext, RLoader} from '../../@types/types';
import {
  PlatformLogo,
  PlatformVersion,
  PlatformVersionCompany,
  PlatformVersionReleaseDate,
} from '../../entity';
import {CheckToken} from '../../utils/tokenMiddleware';
import {loaderResolver} from '../../utils/utils';

@Resolver(() => PlatformVersion)
export class PlatformVersionResolver {
  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async (companies, {context}) =>
      await loaderResolver(companies, 'platform_version_companies', context),
  )
  async companies(@Root() {id, companies}: PlatformVersion) {
    return (dataloader: DataLoader<RLoader, PlatformVersionCompany[]>) =>
      dataloader.load({id, ids: companies});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async (main_manufacturer, {context}) =>
      await loaderResolver(
        main_manufacturer,
        'platform_version_companies',
        context,
      ),
  )
  async main_manufacturer(@Root() {id, main_manufacturer}: PlatformVersion) {
    return (dataloader: DataLoader<RLoader, PlatformVersionCompany[]>) =>
      dataloader.load({id, ids: main_manufacturer});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async (platform_logo, {context}) =>
      await loaderResolver(platform_logo, 'platform_logos', context),
  )
  async platform_logo(@Root() {id, platform_logo}: PlatformVersion) {
    return (dataloader: DataLoader<RLoader, PlatformLogo[]>) =>
      dataloader.load({id, ids: platform_logo});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async (platform_version_release_dates, {context}) =>
      await loaderResolver(
        platform_version_release_dates,
        'platform_version_release_dates',
        context,
      ),
  )
  async platform_version_release_dates(
    @Root() {id, platform_version_release_dates}: PlatformVersion,
  ) {
    return (dataloader: DataLoader<RLoader, PlatformVersionReleaseDate[]>) =>
      dataloader.load({id, ids: platform_version_release_dates});
  }

  @Query(() => [PlatformVersion], {nullable: true})
  @UseMiddleware(CheckToken)
  // @CacheControl({ maxAge: 1 })
  async platformVersions(@Ctx() {client}: MyContext) {
    const {data} = await client
      .request('platform_versions')
      .pipe(fields(['*']))
      .execute();

    return data;
  }
}
