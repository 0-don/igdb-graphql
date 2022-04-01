import { fields, igdb } from 'ts-igdb-client';
import { Query, Resolver, UseMiddleware } from 'type-graphql';

import { Theme } from '../entity';
import { CheckToken } from '../utils/tokenMiddleware';

@Resolver(() => Theme)
export class ScreenshotResolver {
  @Query(() => [Theme], {nullable: true})
  @UseMiddleware(CheckToken)
  // @CacheControl({ maxAge: 1 })
  async themes() {
    const client = igdb(process.env.CLIENT_ID!, process.env.ACCESS_TOKEN!);
    const {data} = await client
      .request('themes')
      .pipe(fields(['*']))
      .execute();

    return data;
  }
}
