import { Field, Int, ObjectType } from "type-graphql";
import { Company } from "../Company/Company";
import { Platform } from "../Platform/Platform";
import { GameEngineLogo } from "./GameEngineLogo";

@ObjectType()
export class GameEngine {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => [Company], { nullable: true })
  companies?: Company[];

  @Field(() => Int, { nullable: true })
  created_at?: number;

  @Field({ nullable: true })
  description?: string[];

  @Field(() => GameEngineLogo, { nullable: true })
  logo?: number;

  @Field({ nullable: true })
  name?: string;

  @Field(() => [Platform], { nullable: true })
  platforms?: Platform[];

  @Field({ nullable: true })
  slug?: string;

  @Field(() => Int, { nullable: true })
  updated_at?: number;

  @Field({ nullable: true })
  url?: string;

  @Field({ nullable: true })
  checksum?: string;
}
