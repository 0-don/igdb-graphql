import {Field, Int, ObjectType} from 'type-graphql';
import {AgeRatingRatingEnum} from '../utils/enum';

@ObjectType()
export class AgeRatingContentDescription {
  @Field(() => Int, {nullable: true})
  id?: number;

  @Field(() => AgeRatingRatingEnum, {nullable: true})
  category?: AgeRatingRatingEnum;

  @Field({nullable: true})
  description?: string;

  @Field({nullable: true})
  checksum?: string;
}
