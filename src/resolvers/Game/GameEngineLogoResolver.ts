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
import {GameEngineLogo} from '../../entity';
import {CheckToken} from '../../utils/tokenMiddleware';

@Resolver(() => GameEngineLogo)
export class GameEngineLogoResolver {
  @FieldResolver()
  async url(
    @Root() {url}: GameEngineLogo,
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

  @Query(() => [GameEngineLogo], {nullable: true})
  @UseMiddleware(CheckToken)
  // @CacheControl({ maxAge: 1 })
  async gameEnginesLogos(@Ctx() {client}: MyContext) {
    const {data} = await client
      .request('game_engine_logos')
      .pipe(fields(['*']))
      .execute();

    return data;
  }
}
