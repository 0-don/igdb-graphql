import { Field, ObjectType, Int, Float } from 'type-graphql';

import { CacheControl } from '../utils/cache-control';
import { getTime } from '../utils/utils';

@ObjectType()
export class Recipe {
  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => [Int])
  ratings: number[];

  @Field()
  creationDate: Date;

  @Field(() => Float, { nullable: true })
  // will invalidate `cachedRecipe` cache with maxAge of 60 to 10
  // if the field is requested
  @CacheControl({ maxAge: 10 })
  get cachedAverageRating() {
    console.log(
      `Called 'cachedAverageRating' for recipe '${this.title}' on ${getTime()}`
    );
    return this.averageRating;
  }

  @Field(() => Float, { nullable: true })
  get averageRating(): number | null {
    console.log(
      `Called 'averageRating' for recipe '${this.title}' on ${getTime()}`
    );
    const ratingsCount = this.ratings.length;
    if (ratingsCount === 0) {
      return null;
    }
    const ratingsSum = this.ratings.reduce((a, b) => a + b, 0);
    return ratingsSum / ratingsCount;
  }
}
