import DataLoader from 'dataloader';
import {fields} from 'ts-igdb-client';
import {RawRoutes} from 'ts-igdb-client/dist/types';
import {
  Ctx,
  FieldResolver,
  Query,
  Resolver,
  Root,
  UseMiddleware,
} from 'type-graphql';
import {Loader} from 'type-graphql-dataloader';
import {MyContext, RLoader} from '../../@types/types';
import {Company, Game, InvolvedCompany} from '../../entity';
import {CheckToken} from '../../utils/tokenMiddleware';
import {loaderResolver} from '../../utils/utils';

@Resolver(() => InvolvedCompany)
export class InvolvedCompanyResolver {
  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async (company, {context}) =>
      await loaderResolver(company, 'companies', context),
  )
  async company(@Root() {id, company}: InvolvedCompany) {
    return (dataloader: DataLoader<RLoader, Company[]>) =>
      dataloader.load({id, ids: company});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async (game, {context}) => await loaderResolver(game, 'games', context),
  )
  async game(@Root() {id, game}: InvolvedCompany) {
    return (dataloader: DataLoader<RLoader, Game[]>) =>
      dataloader.load({id, ids: game});
  }

  @Query(() => [InvolvedCompany], {nullable: true})
  @UseMiddleware(CheckToken)
  // @CacheControl({ maxAge: 1 })
  async involvedCompanies(@Ctx() {client}: MyContext) {
    const {data} = await client
      .request('involved_companies')
      .pipe(fields(['*']))
      .execute();

    return data;
  }
}
