import {Field, Int, ObjectType} from 'type-graphql';
import {PlatformLogo} from './PlatformLogo';
import {PlatformVersionCompany} from './PlatformVersionCompany';
import {PlatformVersionReleaseDate} from './PlatformVersionReleaseDate';

@ObjectType()
export class PlatformVersion {
  @Field(() => Int, {nullable: true})
  id?: number;

  @Field(() => [PlatformVersionCompany], {nullable: true})
  companies?: PlatformVersionCompany[];

  @Field({nullable: true})
  connectivity?: string;

  @Field({nullable: true})
  cpu?: string;

  @Field({nullable: true})
  graphics?: string;

  @Field(() => PlatformVersionCompany, {nullable: true})
  main_manufacturer?: PlatformVersionCompany;

  @Field({nullable: true})
  media?: string;

  @Field({nullable: true})
  memory?: string;

  @Field({nullable: true})
  name?: string;

  @Field({nullable: true})
  online?: string;

  @Field({nullable: true})
  os?: string;

  @Field({nullable: true})
  output?: string;

  @Field(() => PlatformLogo, {nullable: true})
  platform_logo?: PlatformLogo;

  @Field(() => [PlatformVersionReleaseDate], {nullable: true})
  platform_version_release_dates?: PlatformVersionReleaseDate[];

  @Field({nullable: true})
  resolutions?: string;

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
