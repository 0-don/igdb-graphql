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
import {ImageTypeEnum} from '../@types/enum';
import {MyContext, RLoader} from '../@types/types';
import {Game, Screenshot} from '../entity';
import {CheckToken} from '../utils/tokenMiddleware';
import {loaderResolver} from '../utils/utils';
@Resolver(() => Screenshot)
export class ScreenshotResolver {
  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async (game, {context}) => await loaderResolver(game, 'games', context),
  )
  async game(@Root() {id, game}: Screenshot) {
    return (dataloader: DataLoader<RLoader, Game[]>) =>
      dataloader.load({id, ids: game});
  }

  @FieldResolver()
  async url(
    @Root() {url}: Screenshot,
    @Arg('imageType', () => ImageTypeEnum, {nullable: true})
    imageType?: ImageTypeEnum,
  ) {
    return !url
      ? null
      : new URL(url.includes('//') ? `https:${url}` : url).href.replace(
          'thumb',
          imageType || 'thumb',
        );
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
