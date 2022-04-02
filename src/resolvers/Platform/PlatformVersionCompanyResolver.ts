import DataLoader from 'dataloader';
import {fields, igdb} from 'ts-igdb-client';
import {RawRoutes} from 'ts-igdb-client/dist/types';
import {
  FieldResolver,
  Query,
  Resolver,
  Root,
  UseMiddleware,
} from 'type-graphql';
import {Loader} from 'type-graphql-dataloader';
import {RLoader} from '../../@types/types';
import {Company, PlatformVersionCompany} from '../../entity';
import {CheckToken} from '../../utils/tokenMiddleware';
import {loaderResolver} from '../../utils/utils';

@Resolver(() => PlatformVersionCompany)
export class PlatformVersionCompanyResolver {
  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async (company, {context}) =>
      await loaderResolver(company, 'companies', context),
  )
  async company(@Root() {id, company}: PlatformVersionCompany) {
    return (dataloader: DataLoader<RLoader, Company[]>) =>
      dataloader.load({id, ids: company});
  }

  @Query(() => [PlatformVersionCompany], {nullable: true})
  @UseMiddleware(CheckToken)
  // @CacheControl({ maxAge: 1 })
  async platformVersionCompanies() {
    const client = igdb(process.env.CLIENT_ID!, process.env.ACCESS_TOKEN!);
    const {data} = await client
      .request('platform_version_companies')
      .pipe(fields(['*']))
      .execute();

    return data;
  }
}
