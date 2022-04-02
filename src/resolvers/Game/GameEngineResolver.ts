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
import {Company, GameEngine, Platform} from '../../entity';
import {CheckToken} from '../../utils/tokenMiddleware';
import {MyContext, RLoader} from '../../@types/types';
import {loaderResolver} from '../../utils/utils';

@Resolver(() => GameEngine)
export class GameEngineResolver {
  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async companies => await loaderResolver(companies, 'companies'),
  )
  async companies(@Root() {id, companies}: GameEngine) {
    return (dataloader: DataLoader<RLoader, Company[]>) =>
      dataloader.load({id, ids: companies});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async platforms => await loaderResolver(platforms, 'platforms'),
  )
  async platforms(@Root() {id, platforms}: GameEngine) {
    return (dataloader: DataLoader<RLoader, Platform[]>) =>
      dataloader.load({id, ids: platforms});
  }

  @Query(() => [GameEngine], {nullable: true})
  @UseMiddleware(CheckToken)
  // @CacheControl({ maxAge: 1 })
  async gameEngines(@Ctx() {client}: MyContext) {
    const {data} = await client
      .request('game_engines')
      .pipe(fields(['*']))
      .execute();

    return data;
  }
}
