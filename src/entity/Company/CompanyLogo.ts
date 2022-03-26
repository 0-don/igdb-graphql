import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType()
export class CompanyLogo {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => Boolean, { nullable: true })
  alpha_channel?: boolean;

  @Field(() => Boolean, { nullable: true })
  animated?: boolean;

  @Field(() => Int, { nullable: true })
  height?: number;

  @Field({ nullable: true })
  image_id?: string;

  @Field({ nullable: true })
  url?: string;

  @Field(() => Int, { nullable: true })
  width?: string;

  @Field({ nullable: true })
  checksum?: string;
}
