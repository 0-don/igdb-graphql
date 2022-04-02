import {fields} from 'ts-igdb-client';
import {
  Arg,
  Ctx,
  FieldResolver,
  Query,
  Resolver,
  Root,
  UseMiddleware,
} from 'type-graphql';
import {ImageTypeEnum} from '../../@types/enum';
import {MyContext} from '../../@types/types';
import {PlatformLogo} from '../../entity';
import {CheckToken} from '../../utils/tokenMiddleware';

@Resolver(() => PlatformLogo)
export class PlatformLogoResolver {
  @FieldResolver()
  async url(
    @Root() {url}: PlatformLogo,
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

  @Query(() => [PlatformLogo], {nullable: true})
  @UseMiddleware(CheckToken)
  // @CacheControl({ maxAge: 1 })
  async platformLogos(@Ctx() {client}: MyContext) {
    const {data} = await client
      .request('platform_logos')
      .pipe(fields(['*']))
      .execute();

    return data;
  }
}
