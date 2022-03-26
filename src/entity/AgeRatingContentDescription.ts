import { Field, Int, ObjectType, registerEnumType } from 'type-graphql';
import { AgeRatingRatingEnum } from '../utils/enum';

@ObjectType()
export class AgeRatingContentDescription {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => AgeRatingRatingEnum, { nullable: true })
  category?: AgeRatingRatingEnum;

  @Field({ nullable: true })
  description?: number;

  @Field({ nullable: true })
  checksum?: string;
}
