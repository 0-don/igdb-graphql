import { Field, Int, ObjectType, registerEnumType } from 'type-graphql';
import { AgeRatingRatingEnum } from '../utils/enum';

registerEnumType(AgeRatingRatingEnum, {
  name: 'Age Rating', // this one is mandatory
  description: 'Age Rating', // this one is optional
});

@ObjectType()
export class AgeRatingContentDescription {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => AgeRatingRatingEnum, { nullable: true })
  category?: number;

  @Field({ nullable: true })
  description?: number;

  @Field({ nullable: true })
  checksum?: string;
}
