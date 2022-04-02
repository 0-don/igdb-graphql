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
import {ExternalGame, Game} from '../../entity';
import {CheckToken} from '../../utils/tokenMiddleware';
import {RLoader} from '../../utils/types';
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
  async externalGames() {
    const client = igdb(process.env.CLIENT_ID!, process.env.ACCESS_TOKEN!);
    const {data} = await client
      .request('external_games')
      .pipe(fields(['*']))
      .execute();

    return data;
  }
}
