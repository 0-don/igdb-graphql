import DataLoader from 'dataloader';
import { fields, igdb } from 'ts-igdb-client';
import { RawRoutes } from 'ts-igdb-client/dist/types';
import { FieldResolver, Query, Resolver, Root, UseMiddleware } from 'type-graphql';
import { Loader } from 'type-graphql-dataloader';

import { Company, Game, InvolvedCompany } from '../../entity';
import { CheckToken } from '../../utils/tokenMiddleware';
import { loaderResolver, RLoader } from '../../utils/utils';

@Resolver(() => InvolvedCompany)
export class InvolvedCompanyResolver {
  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async company => await loaderResolver(company, 'companies'),
  )
  async company(@Root() {id, company}: InvolvedCompany) {
    return (dataloader: DataLoader<RLoader, Company[]>) =>
      dataloader.load({id, ids: company});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async game => await loaderResolver(game, 'games'),
  )
  async game(@Root() {id, game}: InvolvedCompany) {
    return (dataloader: DataLoader<RLoader, Game[]>) =>
      dataloader.load({id, ids: game});
  }

  @Query(() => [InvolvedCompany], {nullable: true})
  @UseMiddleware(CheckToken)
  // @CacheControl({ maxAge: 1 })
  async involvedCompanies() {
    const client = igdb(process.env.CLIENT_ID!, process.env.ACCESS_TOKEN!);
    const {data} = await client
      .request('involved_companies')
      .pipe(fields(['*']))
      .execute();

    return data;
  }
}
