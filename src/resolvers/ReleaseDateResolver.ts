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
import {MyContext, RLoader} from '../@types/types';
import {Game, Platform, ReleaseDate} from '../entity';
import {CheckToken} from '../utils/tokenMiddleware';
import {loaderResolver} from '../utils/utils';

@Resolver(() => ReleaseDate)
export class ReleaseDateResolver {
  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async (game, {context}) => await loaderResolver(game, 'games', context),
  )
  async game(@Root() {id, game}: ReleaseDate) {
    return (dataloader: DataLoader<RLoader, Game[]>) =>
      dataloader.load({id, ids: game});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async (platform, {context}) =>
      await loaderResolver(platform, 'platforms', context),
  )
  async platform(@Root() {id, platform}: ReleaseDate) {
    return (dataloader: DataLoader<RLoader, Platform[]>) =>
      dataloader.load({id, ids: platform});
  }

  @Query(() => [ReleaseDate], {nullable: true})
  @UseMiddleware(CheckToken)
  // @CacheControl({ maxAge: 1 })
  async releaseDates(@Ctx() {client}: MyContext) {
    const {data} = await client
      .request('release_dates')
      .pipe(fields(['*']))
      .execute();

    return data;
  }
}
