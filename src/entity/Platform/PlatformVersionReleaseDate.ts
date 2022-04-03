import {Field, Int, ObjectType} from 'type-graphql';
import {
  DateFormatChangeDateCategoryEnum,
  RegionRegionEnum,
} from '../../@types/enum';
import {PlatformVersion} from './PlatformVersion';

@ObjectType()
export class PlatformVersionReleaseDate {
  @Field(() => Int, {nullable: true})
  id?: number;

  @Field(() => DateFormatChangeDateCategoryEnum, {nullable: true})
  category?: DateFormatChangeDateCategoryEnum;

  @Field(() => Int, {nullable: true})
  created_at?: number;

  @Field(() => Int, {nullable: true})
  date?: number;

  @Field({nullable: true})
  human?: string;

  @Field(() => Int, {nullable: true})
  m?: number;

  @Field(() => [PlatformVersion], {nullable: true})
  platform_version?: PlatformVersion | number[];

  @Field(() => RegionRegionEnum, {nullable: true})
  region?: RegionRegionEnum;

  @Field(() => Int, {nullable: true})
  updated_at?: number;

  @Field(() => Int, {nullable: true})
  y?: number;

  @Field({nullable: true})
  checksum?: string;
}
