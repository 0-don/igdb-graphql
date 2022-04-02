import {Field, ID, Int, ObjectType} from 'type-graphql';

@ObjectType()
export class Genre {
  @Field(() => ID, {nullable: true})
  id?: number;

  @Field(() => Int, {nullable: true})
  created_at?: number;

  @Field({nullable: true})
  name?: string;

  @Field({nullable: true})
  slug?: string;

  @Field(() => Int, {nullable: true})
  updated_at?: number;

  @Field({nullable: true})
  url?: string;

  @Field({nullable: true})
  checksum?: string;
}
