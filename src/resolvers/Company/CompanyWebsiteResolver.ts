import { fields, igdb } from 'ts-igdb-client';
import { Query, Resolver, UseMiddleware } from 'type-graphql';

import { CompanyWebsite } from '../../entity';
import { CheckToken } from '../../utils/tokenMiddleware';

@Resolver(() => CompanyWebsite)
export class CompanyWebsiteResolver {
  @Query(() => [CompanyWebsite], {nullable: true})
  @UseMiddleware(CheckToken)
  // @CacheControl({ maxAge: 1 })
  async companyWebsites() {
    const client = igdb(process.env.CLIENT_ID!, process.env.ACCESS_TOKEN!);
    const {data} = await client
      .request('company_websites')
      .pipe(fields(['*']))
      .execute();

    return data;
  }
}
