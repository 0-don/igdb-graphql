import {fields} from 'ts-igdb-client';
import {Ctx, Query, Resolver, UseMiddleware} from 'type-graphql';
import {GameMode} from '../../entity';
import {CheckToken} from '../../utils/tokenMiddleware';
import {MyContext} from '../../@types/types';

@Resolver(() => GameMode)
export class GameModeResolver {
  @Query(() => [GameMode], {nullable: true})
  @UseMiddleware(CheckToken)
  // @CacheControl({ maxAge: 1 })
  async gameModes(@Ctx() {client}: MyContext) {
    const {data} = await client
      .request('game_modes')
      .pipe(fields(['*']))
      .execute();

    return data;
  }
}
