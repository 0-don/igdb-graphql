import { Field, Int, ObjectType, registerEnumType } from 'type-graphql';
import { WebsiteCategoryEnum } from '../../utils/enum';
import { Game } from '../Game';

@ObjectType()
export class PlatformWebsite {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => WebsiteCategoryEnum, { nullable: true })
  category?: WebsiteCategoryEnum;

  @Field(() => Boolean, { nullable: true })
  trusted?: boolean;

  @Field({ nullable: true })
  url?: string;

  @Field({ nullable: true })
  checksum?: string;
}
