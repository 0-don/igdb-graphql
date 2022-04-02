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
import {ExternalGame, Game} from '../../entity';
import {CheckToken} from '../../utils/tokenMiddleware';
import {MyContext, RLoader} from '../../utils/types';
import {loaderResolver} from '../../utils/utils';

@Resolver(() => ExternalGame)
export class ExternalGameResolver {
  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async game => await loaderResolver(game, 'games'),
  )
  async game(@Root() {id, game}: ExternalGame) {
    return (dataloader: DataLoader<RLoader, Game[]>) =>
      dataloader.load({id, ids: game});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async platform => await loaderResolver(platform, 'platforms'),
  )
  async platform(@Root() {id, platform}: ExternalGame) {
    return (dataloader: DataLoader<RLoader, Game[]>) =>
      dataloader.load({id, ids: platform});
  }

  @Query(() => [ExternalGame], {nullable: true})
  @UseMiddleware(CheckToken)
  // @CacheControl({ maxAge: 1 })
  async externalGames(@Ctx() {client}: MyContext) {
    const {data} = await client
      .request('external_games')
      .pipe(fields(['*']))
      .execute();

    return data;
  }
}
