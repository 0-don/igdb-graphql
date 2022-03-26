import { Field, Int, ObjectType, registerEnumType } from 'type-graphql';
import { ExternalGameCategoryEnum, ExternalGameMediaEnum } from '../utils/enum';
import { Game } from './Game';
import { Platform } from './Platform/Platform';

registerEnumType(ExternalGameCategoryEnum, {
  name: 'ExternalGameCategory', // this one is mandatory
  description: 'External Game Category', // this one is optional
});

registerEnumType(ExternalGameMediaEnum, {
  name: 'ExternalGameMedia', // this one is mandatory
  description: 'External Game Media', // this one is optional
});

@ObjectType()
export class ExternalGame {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => ExternalGameCategoryEnum, { nullable: true })
  category?: ExternalGameCategoryEnum;

  @Field(() => Int, { nullable: true })
  created_at?: number;

  @Field(() => Game, { nullable: true })
  game?: Game;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  uid?: string;

  @Field(() => Int, { nullable: true })
  updated_at?: number;

  @Field(() => Int, { nullable: true })
  url?: number;

  @Field(() => Int, { nullable: true })
  year?: number;

  @Field(() => ExternalGameMediaEnum, { nullable: true })
  media?: ExternalGameMediaEnum;

  @Field(() => Platform, { nullable: true })
  platform?: Platform;

  @Field(() => [Int], { nullable: true })
  countries?: number[];

  @Field({ nullable: true })
  checksum?: string;
}
