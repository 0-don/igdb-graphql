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
import {Company, GameVideo} from '../../entity';
import {CheckToken} from '../../utils/tokenMiddleware';
import {RLoader} from '../../utils/types';
import {loaderResolver} from '../../utils/utils';

@Resolver(() => GameVideo)
export class GameVideoResolver {
  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async game => await loaderResolver(game, 'games'),
  )
  async game(@Root() {id, game}: GameVideo) {
    return (dataloader: DataLoader<RLoader, Company[]>) =>
      dataloader.load({id, ids: game});
  }

  @Query(() => [GameVideo], {nullable: true})
  @UseMiddleware(CheckToken)
  // @CacheControl({ maxAge: 1 })
  async gameVideos() {
    const client = igdb(process.env.CLIENT_ID!, process.env.ACCESS_TOKEN!);
    const {data} = await client
      .request('game_videos')
      .pipe(fields(['*']))
      .execute();

    return data;
  }
}
