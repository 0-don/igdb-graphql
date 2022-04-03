import {Field, Int, ObjectType} from 'type-graphql';
import {AgeRatingCategoryEnum, AgeRatingRatingEnum} from '../@types/enum';
import {AgeRatingContentDescription} from './AgeRatingContentDescription';

@ObjectType()
export class AgeRating {
  @Field(() => Int, {nullable: true})
  id?: number;

  @Field(() => AgeRatingCategoryEnum, {nullable: true})
  category?: AgeRatingCategoryEnum;

  @Field(() => [AgeRatingContentDescription], {nullable: true})
  content_descriptions?: AgeRatingContentDescription[] | number[];

  @Field(() => AgeRatingRatingEnum, {nullable: true})
  rating?: AgeRatingRatingEnum;

  @Field({nullable: true})
  rating_cover_url?: string;

  @Field({nullable: true})
  synopsis?: string;

  @Field({nullable: true})
  checksum?: string;
}
