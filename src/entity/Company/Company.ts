import {Field, Int, ObjectType} from 'type-graphql';
import {DateFormatChangeDateCategoryEnum} from '../../@types/enum';
import {Game} from '../Game/Game';
import {CompanyLogo} from './CompanyLogo';
import {CompanyWebsite} from './CompanyWebsite';

@ObjectType()
export class Company {
  @Field(() => Int, {nullable: true})
  id?: number;

  @Field(() => Int, {nullable: true})
  change_date?: number;

  @Field(() => DateFormatChangeDateCategoryEnum, {nullable: true})
  change_date_category?: DateFormatChangeDateCategoryEnum;

  @Field(() => Company, {nullable: true})
  changed_company_id?: Company | number;

  @Field(() => Int, {nullable: true})
  country?: number;

  @Field(() => Int, {nullable: true})
  created_at?: number;

  @Field({nullable: true})
  description?: string;

  @Field(() => [Game], {nullable: true})
  developed?: Game[] | number[];

  @Field(() => CompanyLogo, {nullable: true})
  logo?: CompanyLogo | number;

  @Field({nullable: true})
  name?: string;

  @Field(() => Company, {nullable: true})
  parent?: Company | number;

  @Field(() => [Game], {nullable: true})
  published?: Game[] | number[];

  @Field({nullable: true})
  slug?: string;

  @Field({nullable: true})
  start_date?: string;

  @Field(() => DateFormatChangeDateCategoryEnum, {nullable: true})
  start_date_category?: DateFormatChangeDateCategoryEnum;

  @Field(() => Int, {nullable: true})
  updated_at?: number;

  @Field({nullable: true})
  url?: string;

  @Field(() => [CompanyWebsite], {nullable: true})
  websites?: CompanyWebsite[] | number[];

  @Field({nullable: true})
  checksum?: string;
}
