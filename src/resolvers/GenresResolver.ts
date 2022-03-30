import {fields, igdb} from 'ts-igdb-client';
import {Query, Resolver, UseMiddleware} from 'type-graphql';
import {Genre} from '../entity';
import {CheckToken} from '../utils/tokenMiddleware';

@Resolver(() => Genre)
export class GenreResolver {
  @Query(() => [Genre], {nullable: true})
  @UseMiddleware(CheckToken)
  // @CacheControl({ maxAge: 1 })
  async genres() {
    const client = igdb(process.env.CLIENT_ID!, process.env.ACCESS_TOKEN!);
    const {data} = await client
      .request('genres')
      .pipe(fields(['*']))
      .execute();

    return data;
  }
}
