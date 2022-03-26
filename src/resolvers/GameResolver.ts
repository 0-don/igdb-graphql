import { twitchAccessToken, igdb, fields, where } from 'ts-igdb-client';
import { Query, Resolver, UseMiddleware } from 'type-graphql';
import { Game } from '../entity/Game';
import { CacheControl } from '../utils/cache-control';

import { CheckToken } from '../utils/tokenMiddleware';

@Resolver(() => Game)
export class GameResolver {
  @Query(() => [Game], { nullable: true })
  async games() {
    const twitchSecrets = {
      client_id: process.env.CLIENT_ID!,
      client_secret: process.env.CLIENT_SECRET!,
    };

    const accessToken = await twitchAccessToken(twitchSecrets);
    const client = igdb(twitchSecrets.client_id, accessToken);
    const { data } = await client
      .request('games')
      .pipe(fields(['*']), where('created_at', '<', Date.now()))
      .execute();
    return data;
  }

  @Query(() => [Game], { nullable: true })
  // @CacheControl({ maxAge: 60 })
  @UseMiddleware(CheckToken)
  async cachedGames() {
    // const result = fs.readFileSync('token.json');
    // console.log(result);

    // console.log(accessToken);
    // const client = igdb(twitchSecrets.client_id, accessToken);
    // const { data } = await client
    //   .request('games')
    //   .pipe(fields(['*']), where('created_at', '<', Date.now()))
    //   .execute();

    return [];
  }
}
