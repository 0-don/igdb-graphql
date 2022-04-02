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
import {Artwork, Game} from '../entity';
import {CheckToken} from '../utils/tokenMiddleware';
import {loaderResolver} from '../utils/utils';

@Resolver(() => Artwork)
export class ArtworkResolver {
  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async (game, {context}) => await loaderResolver(game, 'games', context),
  )
  async game(@Root() {id, game}: Artwork) {
    return (dataloader: DataLoader<RLoader, Game[]>) =>
      dataloader.load({id, ids: game});
  }

  @FieldResolver()
  async url(
    @Root() {url}: Artwork,
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

  @Query(() => [Artwork], {nullable: true})
  @UseMiddleware(CheckToken)
  // @CacheControl({ maxAge: 1 })
  async artworks(@Ctx() {client}: MyContext) {
    const {data} = await client
      .request('artworks')
      .pipe(fields(['*']))
      .execute();

    return data;
  }
}
