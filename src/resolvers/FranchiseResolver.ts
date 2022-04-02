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
import {Franchise, Game} from '../entity';
import {CheckToken} from '../utils/tokenMiddleware';
import {MyContext, RLoader} from '../@types/types';
import {loaderResolver} from '../utils/utils';

@Resolver(() => Franchise)
export class FranchiseResolver {
  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async games => await loaderResolver(games, 'games'),
  )
  async games(@Root() {id, games}: Franchise) {
    return (dataloader: DataLoader<RLoader, Game[]>) =>
      dataloader.load({id, ids: games});
  }

  @Query(() => [Franchise], {nullable: true})
  @UseMiddleware(CheckToken)
  // @CacheControl({ maxAge: 1 })
  async franchises(@Ctx() {client}: MyContext) {
    const {data} = await client
      .request('franchises')
      .pipe(fields(['*']))
      .execute();

    return data;
  }
}
