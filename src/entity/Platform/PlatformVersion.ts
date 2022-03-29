import {Field, Int, ObjectType} from 'type-graphql';
import {PlatformCategoryEnum} from '../../utils/enum';
import {Game} from '../Game/Game';
import {PlatformFamily} from './PlatformFamily';
import {PlatformLogo} from './PlatformLogo';

@ObjectType()
export class PlatformVersion {
  @Field(() => Int, {nullable: true})
  id?: number;

  @Field({nullable: true})
  companies?: string;

  @Field({nullable: true})
  connectivity?: string;

  @Field(() => PlatformCategoryEnum, {nullable: true})
  cpu?: PlatformCategoryEnum;

  @Field(() => Int, {nullable: true})
  graphics?: number;

  @Field(() => Int, {nullable: true})
  main_manufacturer?: number;

  @Field({nullable: true})
  media?: string;

  @Field(() => PlatformLogo, {nullable: true})
  memory?: PlatformLogo;

  @Field(() => PlatformFamily, {nullable: true})
  name?: PlatformFamily;

  @Field({nullable: true})
  online?: string;

  @Field({nullable: true})
  os?: string;

  @Field(() => Int, {nullable: true})
  output?: number;

  @Field({nullable: true})
  platform_logo?: string;

  @Field({nullable: true})
  platform_version_release_dates?: number;

  @Field(() => [Game], {nullable: true})
  resolutions?: Game[];

  @Field({nullable: true})
  slug?: string;

  @Field({nullable: true})
  sound?: string;

  @Field({nullable: true})
  storage?: string;

  @Field({nullable: true})
  summary?: string;

  @Field({nullable: true})
  url?: string;

  @Field({nullable: true})
  checksum?: string;
}
