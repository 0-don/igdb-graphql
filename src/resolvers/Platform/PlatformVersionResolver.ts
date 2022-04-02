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
import {
  PlatformLogo,
  PlatformVersion,
  PlatformVersionCompany,
  PlatformVersionReleaseDate,
} from '../../entity';
import {CheckToken} from '../../utils/tokenMiddleware';
import {loaderResolver, RLoader} from '../../utils/utils';

@Resolver(() => PlatformVersion)
export class PlatformVersionResolver {
  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async companies =>
      await loaderResolver(companies, 'platform_version_companies'),
  )
  async companies(@Root() {id, companies}: PlatformVersion) {
    return (dataloader: DataLoader<RLoader, PlatformVersionCompany[]>) =>
      dataloader.load({id, ids: companies});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async main_manufacturer =>
      await loaderResolver(main_manufacturer, 'platform_version_companies'),
  )
  async main_manufacturer(@Root() {id, main_manufacturer}: PlatformVersion) {
    return (dataloader: DataLoader<RLoader, PlatformVersionCompany[]>) =>
      dataloader.load({id, ids: main_manufacturer});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async platform_logo =>
      await loaderResolver(platform_logo, 'platform_logos'),
  )
  async platform_logo(@Root() {id, platform_logo}: PlatformVersion) {
    return (dataloader: DataLoader<RLoader, PlatformLogo[]>) =>
      dataloader.load({id, ids: platform_logo});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async platform_version_release_dates =>
      await loaderResolver(
        platform_version_release_dates,
        'platform_version_release_dates',
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
  async platformVersions() {
    const client = igdb(process.env.CLIENT_ID!, process.env.ACCESS_TOKEN!);
    const {data} = await client
      .request('platform_versions')
      .pipe(fields(['*']))
      .execute();

    return data;
  }
}
