import { twitchAccessToken, igdb, fields, where } from 'ts-igdb-client';
import { Query, Resolver } from 'type-graphql';
import { Game } from '../entity/Game/Game';
import { CacheControl } from '../utils/cache-control';

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
  async cachedGames() {
    const client = igdb(process.env.CLIENT_ID!, process.env.ACCESS_TOKEN!);

    const { data } = await client
      .request('games')
      .pipe(fields(['*']), where('created_at', '<', Date.now()))
      .execute();
    // console.log(data);
    return data;
  }
}
