import {fields} from 'ts-igdb-client';
import {
  Arg,
  Ctx,
  FieldResolver,
  Query,
  Resolver,
  Root,
  UseMiddleware,
} from 'type-graphql';
import {ImageTypeEnum} from '../../@types/enum';
import {MyContext} from '../../@types/types';
import {CompanyLogo} from '../../entity';
import {CheckToken} from '../../utils/tokenMiddleware';

@Resolver(() => CompanyLogo)
export class CompanyLogoResolver {
  @FieldResolver()
  async url(
    @Root() {url}: CompanyLogo,
    @Arg('imageType', () => ImageTypeEnum, {nullable: true})
    imageType?: ImageTypeEnum,
  ) {
    return !url
      ? null
      : new URL(url.includes('//') ? `https:${url}` : url).href.replace(
          'thumb',
          imageType || 'thumb',
        );
  }

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
