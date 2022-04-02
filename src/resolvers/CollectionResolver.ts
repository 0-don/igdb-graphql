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
import {Collection, Game} from '../entity';
import {CheckToken} from '../utils/tokenMiddleware';
import {MyContext, RLoader} from '../utils/types';
import {loaderResolver} from '../utils/utils';

@Resolver(() => Collection)
export class CollectionResolver {
  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async games => await loaderResolver(games, 'games'),
  )
  async games(@Root() {id, games}: Collection) {
    return (dataloader: DataLoader<RLoader, Game[]>) =>
      dataloader.load({id, ids: games});
  }

  @Query(() => [Collection], {nullable: true})
  @UseMiddleware(CheckToken)
  // @CacheControl({ maxAge: 1 })
  async collections(@Ctx() {client}: MyContext) {
    const {data} = await client
      .request('collections')
      .pipe(fields(['*']))
      .execute();

    return data;
  }
}
