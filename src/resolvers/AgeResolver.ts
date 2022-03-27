import { Resolver, Query } from 'type-graphql';
import { AgeRating } from '../entity/AgeRating';

@Resolver(() => AgeRating)
export class AgeRatingResolver {
  @Query(() => Boolean)
  async ageRating() {
    return false;
  }
}
