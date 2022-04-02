import DataLoader from 'dataloader';
import {fields} from 'ts-igdb-client';
import {RawRoutes} from 'ts-igdb-client/dist/types';
import {
  Arg,
  Ctx,
  FieldResolver,
  Query,
  Resolver,
  Root,
  UseMiddleware,
} from 'type-graphql';
import {Loader} from 'type-graphql-dataloader';
import {Game, Screenshot} from '../entity';
import {CheckToken} from '../utils/tokenMiddleware';
import {MyContext, RLoader} from '../utils/types';
import {loaderResolver} from '../utils/utils';

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

  @FieldResolver()
  @Loader<string, string[]>(async (url, test) => {
    return [['']];
  })
  async url(@Root() {url}: Screenshot, @Arg('type') type: string) {
    return (dataloader: DataLoader<string, string[]>) =>
      dataloader.load(url || '');
  }

  @Query(() => [Screenshot], {nullable: true})
  @UseMiddleware(CheckToken)
  // @CacheControl({ maxAge: 1 })
  async screenshots(@Ctx() {client}: MyContext) {
    const {data} = await client
      .request('screenshots')
      .pipe(fields(['*']))
      .execute();

    return data;
  }
}
