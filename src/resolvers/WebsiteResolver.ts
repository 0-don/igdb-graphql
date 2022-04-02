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
import {Game, Website} from '../entity';
import {CheckToken} from '../utils/tokenMiddleware';
import {MyContext, RLoader} from '../utils/types';
import {loaderResolver} from '../utils/utils';

@Resolver(() => Website)
export class WebsiteResolver {
  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async game => await loaderResolver(game, 'games'),
  )
  async game(@Root() {id, game}: Website) {
    return (dataloader: DataLoader<RLoader, Game[]>) =>
      dataloader.load({id, ids: game});
  }

  @Query(() => [Website], {nullable: true})
  @UseMiddleware(CheckToken)
  // @CacheControl({ maxAge: 1 })
  async websites(@Ctx() {client}: MyContext) {
    const {data} = await client
      .request('websites')
      .pipe(fields(['*']))
      .execute();

    return data;
  }
}
