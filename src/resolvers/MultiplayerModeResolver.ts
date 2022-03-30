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
import { MultiplayerMode, Game} from '../entity';
import {CheckToken} from '../utils/tokenMiddleware';
import {loaderResolver, RLoader} from '../utils/utils';

@Resolver(() => MultiplayerMode)
export class MultiplayerModeResolver {
  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async game => await loaderResolver(game, 'games'),
  )
  async game(@Root() {id, game}: MultiplayerMode) {
    return (dataloader: DataLoader<RLoader, Game[]>) =>
      dataloader.load({id, ids: game});
  }

  @Query(() => [MultiplayerMode], {nullable: true})
  @UseMiddleware(CheckToken)
  // @CacheControl({ maxAge: 1 })
  async multiplayerModes() {
    const client = igdb(process.env.CLIENT_ID!, process.env.ACCESS_TOKEN!);
    const {data} = await client
      .request('artworks')
      .pipe(fields(['*']))
      .execute();

    return data;
  }
}
