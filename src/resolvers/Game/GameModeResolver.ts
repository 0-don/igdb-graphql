import {fields, igdb} from 'ts-igdb-client';
import {Query, Resolver, UseMiddleware} from 'type-graphql';
import {GameMode} from '../../entity';
import {CheckToken} from '../../utils/tokenMiddleware';

@Resolver(() => GameMode)
export class GameModeResolver {
  @Query(() => [GameMode], {nullable: true})
  @UseMiddleware(CheckToken)
  // @CacheControl({ maxAge: 1 })
  async gameModes() {
    const client = igdb(process.env.CLIENT_ID!, process.env.ACCESS_TOKEN!);
    const {data} = await client
      .request('game_modes')
      .pipe(fields(['*']))
      .execute();

    return data;
  }
}
