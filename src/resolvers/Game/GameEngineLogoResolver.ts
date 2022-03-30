import {fields, igdb} from 'ts-igdb-client';
import {Query, Resolver, UseMiddleware} from 'type-graphql';
import {GameEngine as GameEngineLogo} from '../../entity';
import {CheckToken} from '../../utils/tokenMiddleware';

@Resolver(() => GameEngineLogo)
export class GameEngineLogoResolver {
  @Query(() => [GameEngineLogo], {nullable: true})
  @UseMiddleware(CheckToken)
  // @CacheControl({ maxAge: 1 })
  async gameEnginesLogos() {
    const client = igdb(process.env.CLIENT_ID!, process.env.ACCESS_TOKEN!);
    const {data} = await client
      .request('game_engine_logos')
      .pipe(fields(['*']))
      .execute();

    return data;
  }
}
