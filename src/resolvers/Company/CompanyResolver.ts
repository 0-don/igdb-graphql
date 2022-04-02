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
import {Company, CompanyLogo, CompanyWebsite, Game} from '../../entity';
import {CheckToken} from '../../utils/tokenMiddleware';
import {MyContext, RLoader} from '../../utils/types';
import {loaderResolver} from '../../utils/utils';

@Resolver(() => Company)
export class CompanyResolver {
  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async changed_company_id =>
      await loaderResolver(changed_company_id, 'companies'),
  )
  async changed_company_id(@Root() {id, changed_company_id}: Company) {
    return (dataloader: DataLoader<RLoader, Company[]>) =>
      dataloader.load({id, ids: changed_company_id});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async developed => await loaderResolver(developed, 'games'),
  )
  async developed(@Root() {id, developed}: Company) {
    return (dataloader: DataLoader<RLoader, Game[]>) =>
      dataloader.load({id, ids: developed});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async logo => await loaderResolver(logo, 'company_logos'),
  )
  async logo(@Root() {id, logo}: Company) {
    return (dataloader: DataLoader<RLoader, CompanyLogo[]>) =>
      dataloader.load({id, ids: logo});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async parent => await loaderResolver(parent, 'companies'),
  )
  async parent(@Root() {id, parent}: Company) {
    return (dataloader: DataLoader<RLoader, Company[]>) =>
      dataloader.load({id, ids: parent});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async published => await loaderResolver(published, 'games'),
  )
  async published(@Root() {id, published}: Company) {
    return (dataloader: DataLoader<RLoader, Game[]>) =>
      dataloader.load({id, ids: published});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async websites => await loaderResolver(websites, 'company_websites'),
  )
  async websites(@Root() {id, websites}: Company) {
    return (dataloader: DataLoader<RLoader, CompanyWebsite[]>) =>
      dataloader.load({id, ids: websites});
  }

  @Query(() => [Company], {nullable: true})
  @UseMiddleware(CheckToken)
  // @CacheControl({ maxAge: 1 })
  async companies(@Ctx() {client}: MyContext) {
    const {data} = await client
      .request('companies')
      .pipe(fields(['*']))
      .execute();

    return data;
  }
}
