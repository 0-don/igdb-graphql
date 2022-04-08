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
import {Company, CompanyLogo, CompanyWebsite, Game} from '../../entity';
import {CheckToken} from '../../utils/tokenMiddleware';
import {loaderResolver} from '../../utils/utils';

@Resolver(() => Company)
export class CompanyResolver {
  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async (changed_company_id, {context}) =>
      await loaderResolver(changed_company_id, 'companies', context),
  )
  async changed_company_id(@Root() {id, changed_company_id}: Company) {
    return (dataloader: DataLoader<RLoader, Company[]>) =>
      dataloader.load({id, ids: changed_company_id});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async (developed, {context}) =>
      await loaderResolver(developed, 'games', context),
  )
  async developed(@Root() {id, developed}: Company) {
    return (dataloader: DataLoader<RLoader, Game[]>) =>
      dataloader.load({id, ids: developed});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async (logo, {context}) =>
      await loaderResolver(logo, 'company_logos', context),
  )
  async logo(@Root() {id, logo}: Company) {
    return (dataloader: DataLoader<RLoader, CompanyLogo[]>) =>
      dataloader.load({id, ids: logo});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async (parent, {context}) =>
      await loaderResolver(parent, 'companies', context),
  )
  async parent(@Root() {id, parent}: Company) {
    return (dataloader: DataLoader<RLoader, Company[]>) =>
      dataloader.load({id, ids: parent});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async (published, {context}) =>
      await loaderResolver(published, 'games', context),
  )
  async published(@Root() {id, published}: Company) {
    return (dataloader: DataLoader<RLoader, Game[]>) =>
      dataloader.load({id, ids: published});
  }

  @FieldResolver()
  @Loader<RLoader, RawRoutes[]>(
    async (websites, {context}) =>
      await loaderResolver(websites, 'company_websites', context),
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
