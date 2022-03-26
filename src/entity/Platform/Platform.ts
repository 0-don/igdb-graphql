import { Field, Int, ObjectType, registerEnumType } from 'type-graphql';
import { PlatformCategoryEnum } from '../../utils/enum';
import { Game } from '../Game';
import { PlatformFamily } from './PlatformFamily';
import { PlatformLogo } from './PlatformLogo';
import { PlatformVersion } from './PlatformVersion';
import { PlatformWebsite } from './PlatformWebsite';

registerEnumType(PlatformCategoryEnum, {
  name: 'PlatformCategory', // this one is mandatory
  description: 'Platform Category Enum', // this one is optional
});

@ObjectType()
export class Platform {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field({ nullable: true })
  abbreviation?: string;

  @Field({ nullable: true })
  alternative_name?: string;

  @Field(() => PlatformCategoryEnum, { nullable: true })
  category?: PlatformCategoryEnum;

  @Field(() => Int, { nullable: true })
  created_at?: number;

  @Field(() => Int, { nullable: true })
  generation?: number;

  @Field({ nullable: true })
  name?: string;

  @Field(() => PlatformLogo, { nullable: true })
  platform_logo?: PlatformLogo;

  @Field(() => PlatformFamily, { nullable: true })
  platform_family?: PlatformFamily;

  @Field({ nullable: true })
  slug?: string;

  @Field({ nullable: true })
  summary?: string;

  @Field(() => Int, { nullable: true })
  updated_at?: number;

  @Field({ nullable: true })
  url?: string;

  @Field(() => [PlatformVersion], { nullable: true })
  versions?: PlatformVersion[];

  @Field(() => [PlatformWebsite], { nullable: true })
  websites?: PlatformWebsite[];

  @Field({ nullable: true })
  checksum?: string;
}
