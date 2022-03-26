import { Field, Int, ObjectType, registerEnumType } from 'type-graphql';
import { proto } from '../../proto/compiled';

// registerEnumType(proto.AgeRatingRatingEnum, {
//   name: 'Age Rating', // this one is mandatory
//   description: 'Age Rating', // this one is optional
// });

@ObjectType()
export class AgeRatingContentDescription {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => proto.AgeRatingRatingEnum, { nullable: true })
  category?: number;

  @Field({ nullable: true })
  description?: number;

  @Field({ nullable: true })
  checksum?: string;
}
