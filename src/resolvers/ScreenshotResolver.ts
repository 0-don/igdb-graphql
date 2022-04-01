import DataLoader from 'dataloader';
import { fields, igdb } from 'ts-igdb-client';
import { RawRoutes } from 'ts-igdb-client/dist/types';
import { FieldResolver, Query, Resolver, Root, UseMiddleware } from 'type-graphql';
import { Loader } from 'type-graphql-dataloader';

import { Game, Screenshot } from '../entity';
import { CheckToken } from '../utils/tokenMiddleware';
import { loaderResolver, RLoader } from '../utils/utils';

@Resolver(() => Screenshot)
export class ScreenshotResolver {
  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async game => await loaderResolver(game, 'games'),
  )
  async game(@Root() {id, game}: Screenshot) {
    return (dataloader: DataLoader<RLoader, Game[]>) =>
      dataloader.load({id, ids: game});
  }

  @Query(() => [Screenshot], {nullable: true})
  @UseMiddleware(CheckToken)
  // @CacheControl({ maxAge: 1 })
  async screenshots() {
    const client = igdb(process.env.CLIENT_ID!, process.env.ACCESS_TOKEN!);
    const {data} = await client
      .request('screenshots')
      .pipe(fields(['*']))
      .execute();

    return data;
  }
}
