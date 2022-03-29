import {Field, ID, ObjectType} from 'type-graphql';
import {AgeRatingRatingEnum} from '../utils/enum';

@ObjectType()
export class AgeRatingContentDescription {
  @Field(() => ID)
  id: number;

  @Field(() => AgeRatingRatingEnum, {nullable: true})
  category?: AgeRatingRatingEnum;

  @Field({nullable: true})
  description?: string;

  @Field({nullable: true})
  checksum?: string;
}
