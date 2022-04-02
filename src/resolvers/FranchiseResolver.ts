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
import {Franchise, Game} from '../entity';
import {CheckToken} from '../utils/tokenMiddleware';
import { RLoader } from '../utils/types';
import { loaderResolver } from '../utils/utils';

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
  async franchises() {
    const client = igdb(process.env.CLIENT_ID!, process.env.ACCESS_TOKEN!);
    const {data} = await client
      .request('franchises')
      .pipe(fields(['*']))
      .execute();

    return data;
  }
}
