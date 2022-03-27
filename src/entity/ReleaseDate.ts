import { Field, Int, ObjectType } from "type-graphql";
import {
  DateFormatChangeDateCategoryEnum,
  RegionRegionEnum,
} from "../utils/enum";
import { Game } from "./Game/Game";
import { Platform } from "./Platform/Platform";

@ObjectType()
export class ReleaseDate {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => DateFormatChangeDateCategoryEnum, { nullable: true })
  category?: DateFormatChangeDateCategoryEnum;

  @Field(() => Int, { nullable: true })
  created_at?: number;

  @Field(() => Int, { nullable: true })
  date?: number;

  @Field(() => Game, { nullable: true })
  game?: Game;

  @Field({ nullable: true })
  human?: string;

  @Field(() => Int, { nullable: true })
  m?: number;

  @Field(() => Platform, { nullable: true })
  platform?: Platform;

  @Field(() => RegionRegionEnum, { nullable: true })
  region?: RegionRegionEnum;

  @Field(() => Int, { nullable: true })
  updated_at?: number;

  @Field(() => Int, { nullable: true })
  y?: number;

  @Field({ nullable: true })
  checksum?: string;
}
