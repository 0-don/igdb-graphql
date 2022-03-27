import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
export class PlatformFamily {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  slug?: string;

  @Field({ nullable: true })
  checksum?: string;
}
