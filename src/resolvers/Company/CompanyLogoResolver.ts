import {fields} from 'ts-igdb-client';
import {Ctx, Query, Resolver, UseMiddleware} from 'type-graphql';
import {MyContext} from '../../@types/types';
import {CompanyLogo} from '../../entity';
import {CheckToken} from '../../utils/tokenMiddleware';

@Resolver(() => CompanyLogo)
export class CompanyLogoResolver {
  @Query(() => [CompanyLogo], {nullable: true})
  @UseMiddleware(CheckToken)
  // @CacheControl({ maxAge: 1 })
  async companyLogos(@Ctx() {client}: MyContext) {
    const {data} = await client
      .request('company_logos')
      .pipe(fields(['*']))
      .execute();

    return data;
  }
}
