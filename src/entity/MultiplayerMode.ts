import { Field, ID, Int, ObjectType } from 'type-graphql';

import { Game } from './Game/Game';
import { Platform } from './Platform/Platform';

@ObjectType()
export class MultiplayerMode {
  @Field(() => ID, {nullable: true})
  id?: number;

  @Field(() => Boolean, {nullable: true})
  campaigncoop?: boolean;

  @Field(() => Boolean, {nullable: true})
  dropin?: boolean;

  @Field(() => Game, {nullable: true})
  game?: Game | number;

  @Field(() => Boolean, {nullable: true})
  lancoop?: string;

  @Field(() => Boolean, {nullable: true})
  offlinecoop?: boolean;

  @Field(() => Int, {nullable: true})
  offlinecoopmax?: number;

  @Field(() => Int, {nullable: true})
  offlinemax?: number;

  @Field(() => Boolean, {nullable: true})
  onlinecoop?: boolean;

  @Field(() => Int, {nullable: true})
  onlinecoopmax?: number;

  @Field(() => Int, {nullable: true})
  onlinemax?: number;

  @Field(() => Platform, {nullable: true})
  platform?: Platform | number;

  @Field(() => Boolean, {nullable: true})
  splitscreen?: boolean;

  @Field(() => Boolean, {nullable: true})
  splitscreenonline?: boolean;

  @Field({nullable: true})
  checksum?: string;
}
