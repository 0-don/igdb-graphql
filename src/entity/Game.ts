import { proto } from 'ts-igdb-client/proto/compiled';
import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType()
export class Game {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => Int, { nullable: true })
  aggregated_rating?: number;

  @Field(() => Int, { nullable: true })
  aggregated_rating_count?: number;

  @Field({ nullable: true })
  name?: string;
}
