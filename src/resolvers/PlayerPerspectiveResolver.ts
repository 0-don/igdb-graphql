import { fields, igdb } from 'ts-igdb-client';
import { Query, Resolver, UseMiddleware } from 'type-graphql';

import { PlayerPerspective } from '../entity';
import { CheckToken } from '../utils/tokenMiddleware';

@Resolver(() => PlayerPerspective)
export class PlayerPerspectiveResolver {
  @Query(() => [PlayerPerspective], {nullable: true})
  @UseMiddleware(CheckToken)
  // @CacheControl({ maxAge: 1 })
  async playerPerspectives() {
    const client = igdb(process.env.CLIENT_ID!, process.env.ACCESS_TOKEN!);
    const {data} = await client
      .request('player_perspectives')
      .pipe(fields(['*']))
      .execute();

    return data;
  }
}
