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
import {PlatformVersion, PlatformVersionReleaseDate} from '../../entity';
import {CheckToken} from '../../utils/tokenMiddleware';
import {loaderResolver} from '../../utils/utils';

@Resolver(() => PlatformVersionReleaseDate)
export class PlatformVersionReleaseDateResolver {
  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async (platform_version, {context}) =>
      await loaderResolver(platform_version, 'platform_versions', context),
  )
  async platform_version(
    @Root() {id, platform_version}: PlatformVersionReleaseDate,
  ) {
    return (dataloader: DataLoader<RLoader, PlatformVersion[]>) =>
      dataloader.load({id, ids: platform_version});
  }

  @Query(() => [PlatformVersionReleaseDate], {nullable: true})
  @UseMiddleware(CheckToken)
  // @CacheControl({ maxAge: 1 })
  async platformVersionReleaseDates() {
    const client = igdb(process.env.CLIENT_ID!, process.env.ACCESS_TOKEN!);
    const {data} = await client
      .request('platform_version_release_dates')
      .pipe(fields(['*']))
      .execute();

    return data;
  }
}
