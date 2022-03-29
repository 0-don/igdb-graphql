import {Field, ID, ObjectType} from 'type-graphql';

@ObjectType()
export class PlatformFamily {
  @Field(() => ID)
  id: number;

  @Field({nullable: true})
  name?: string;

  @Field({nullable: true})
  slug?: string;

  @Field({nullable: true})
  checksum?: string;
}
