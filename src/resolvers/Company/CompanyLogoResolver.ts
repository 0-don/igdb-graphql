import { fields, igdb } from 'ts-igdb-client';
import { Query, Resolver, UseMiddleware } from 'type-graphql';

import { CompanyLogo } from '../../entity';
import { CheckToken } from '../../utils/tokenMiddleware';

@Resolver(() => CompanyLogo)
export class CompanyLogoResolver {
  @Query(() => [CompanyLogo], {nullable: true})
  @UseMiddleware(CheckToken)
  // @CacheControl({ maxAge: 1 })
  async companyLogos() {
    const client = igdb(process.env.CLIENT_ID!, process.env.ACCESS_TOKEN!);
    const {data} = await client
      .request('company_logos')
      .pipe(fields(['*']))
      .execute();

    return data;
  }
}
