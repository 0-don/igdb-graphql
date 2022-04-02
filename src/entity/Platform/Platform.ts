import {Field, ID, Int, ObjectType} from 'type-graphql';
import {PlatformCategoryEnum} from '../../@types/enum';
import {PlatformFamily} from './PlatformFamily';
import {PlatformLogo} from './PlatformLogo';
import {PlatformVersion} from './PlatformVersion';
import {PlatformWebsite} from './PlatformWebsite';

@ObjectType()
export class Platform {
  @Field(() => ID, {nullable: true})
  id?: number;

  @Field({nullable: true})
  abbreviation?: string;

  @Field({nullable: true})
  alternative_name?: string;

  @Field(() => PlatformCategoryEnum, {nullable: true})
  category?: PlatformCategoryEnum;

  @Field(() => Int, {nullable: true})
  created_at?: number;

  @Field(() => Int, {nullable: true})
  generation?: number;

  @Field({nullable: true})
  name?: string;

  @Field(() => PlatformLogo, {nullable: true})
  platform_logo?: PlatformLogo | number;

  @Field(() => PlatformFamily, {nullable: true})
  platform_family?: PlatformFamily | number;

  @Field({nullable: true})
  slug?: string;

  @Field({nullable: true})
  summary?: string;

  @Field(() => Int, {nullable: true})
  updated_at?: number;

  @Field({nullable: true})
  url?: string;

  @Field(() => [PlatformVersion], {nullable: true})
  versions?: PlatformVersion[] | number[];

  @Field(() => [PlatformWebsite], {nullable: true})
  websites?: PlatformWebsite[] | number[];

  @Field({nullable: true})
  checksum?: string;
}
