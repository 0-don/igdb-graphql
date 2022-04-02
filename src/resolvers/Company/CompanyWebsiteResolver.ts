import {fields} from 'ts-igdb-client';
import {Ctx, Query, Resolver, UseMiddleware} from 'type-graphql';
import {CompanyWebsite} from '../../entity';
import {CheckToken} from '../../utils/tokenMiddleware';
import {MyContext} from '../../utils/types';

@Resolver(() => CompanyWebsite)
export class CompanyWebsiteResolver {
  @Query(() => [CompanyWebsite], {nullable: true})
  @UseMiddleware(CheckToken)
  // @CacheControl({ maxAge: 1 })
  async companyWebsites(@Ctx() {client}: MyContext) {
    const {data} = await client
      .request('company_websites')
      .pipe(fields(['*']))
      .execute();

    return data;
  }
}
