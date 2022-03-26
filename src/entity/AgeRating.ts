import { proto } from 'ts-igdb-client/proto/compiled';
import { Field, Int, ObjectType, registerEnumType } from 'type-graphql';

import { AgeRatingContentDescription } from './AgeRatingContentDescription';

const { AgeRatingCategoryEnum } = proto;
// enum AgeRatingCategoryEnum {
//   AGERATING_CATEGORY_NULL = 0,
//   ESRB = 1,
//   PEGI = 2,
//   CERO = 3,
//   USK = 4,
//   GRAC = 5,
//   CLASS_IND = 6,
//   ACB = 7
// }

registerEnumType(AgeRatingCategoryEnum, {
  name: 'Age Rating Category', // this one is mandatory
  description: 'Age Rating Category', // this one is optional
});

// registerEnumType(proto.AgeRatingRatingEnum, {
//   name: 'Age Rating Rating', // this one is mandatory
//   description: 'Age Rating Rating', // this one is optional
// });

@ObjectType()
export class AgeRating {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => AgeRatingCategoryEnum, { nullable: true })
  category?: number;

  // @Field(() => [AgeRatingContentDescription], { nullable: true })
  // content_descriptions?: AgeRatingContentDescription[];

  // @Field(() => proto.AgeRatingRatingEnum, { nullable: true })
  // rating?: string;

  @Field({ nullable: true })
  rating_cover_url?: string;

  @Field({ nullable: true })
  synopsis?: string;

  @Field({ nullable: true })
  checksum?: string;
}
