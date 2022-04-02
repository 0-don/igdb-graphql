import {fields} from 'ts-igdb-client';
import {Ctx, Query, Resolver, UseMiddleware} from 'type-graphql';
import {GameEngineLogo} from '../../entity';
import {CheckToken} from '../../utils/tokenMiddleware';
import {MyContext} from '../../@types/types';

@Resolver(() => GameEngineLogo)
export class GameEngineLogoResolver {
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
