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
import {Game, MultiplayerMode, Platform} from '../entity';
import {CheckToken} from '../utils/tokenMiddleware';
import {loaderResolver} from '../utils/utils';

@Resolver(() => MultiplayerMode)
export class MultiplayerModeResolver {
  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async (game, {context}) => await loaderResolver(game, 'games', context),
  )
  async game(@Root() {id, game}: MultiplayerMode) {
    return (dataloader: DataLoader<RLoader, Game[]>) =>
      dataloader.load({id, ids: game});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async (platform, {context}) =>
      await loaderResolver(platform, 'platforms', context),
  )
  async platform(@Root() {id, platform}: MultiplayerMode) {
    return (dataloader: DataLoader<RLoader, Platform[]>) =>
      dataloader.load({id, ids: platform});
  }

  @Query(() => [MultiplayerMode], {nullable: true})
  @UseMiddleware(CheckToken)
  // @CacheControl({ maxAge: 1 })
  async multiplayerModes(@Ctx() {client}: MyContext) {
    const {data} = await client
      .request('multiplayer_modes')
      .pipe(fields(['*']))
      .execute();

    return data;
  }
}
