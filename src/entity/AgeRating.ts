import { Field, Int, ObjectType, registerEnumType } from 'type-graphql';
import { AgeRatingCategoryEnum, AgeRatingRatingEnum } from '../utils/enum';
import { AgeRatingContentDescription } from './AgeRatingContentDescription';

registerEnumType(AgeRatingCategoryEnum, {
  name: 'Age Rating Category', // this one is mandatory
  description: 'Age Rating Category', // this one is optional
});

registerEnumType(AgeRatingRatingEnum, {
  name: 'Age Rating Rating', // this one is mandatory
  description: 'Age Rating Rating', // this one is optional
});

@ObjectType()
export class AgeRating {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => AgeRatingCategoryEnum, { nullable: true })
  category?: number;

  @Field(() => [AgeRatingContentDescription], { nullable: true })
  content_descriptions?: AgeRatingContentDescription[];

  @Field(() => AgeRatingRatingEnum, { nullable: true })
  rating?: string;

  @Field({ nullable: true })
  rating_cover_url?: string;

  @Field({ nullable: true })
  synopsis?: string;

  @Field({ nullable: true })
  checksum?: string;
}
