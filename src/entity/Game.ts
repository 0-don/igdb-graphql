import { Field, Int, ObjectType, registerEnumType } from 'type-graphql';
import { GameCategoryEnum } from '../utils/enum';
import { AgeRating } from './AgeRating';
import { AlternativeName } from './AlternativeName';
import { Artwork } from './Artworks';
import { Collection } from './Collection';
import { Cover } from './Cover';
import { ExternalGame } from './ExternalGame';

registerEnumType(GameCategoryEnum, {
  name: 'GameCategory', // this one is mandatory
  description: 'Game Category', // this one is optional
});

@ObjectType()
export class Game {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => [AgeRating], { nullable: true })
  age_rating?: AgeRating[];

  @Field(() => Int, { nullable: true })
  aggregated_rating?: number;

  @Field(() => Int, { nullable: true })
  aggregated_rating_count?: number;

  @Field(() => [AlternativeName], { nullable: true })
  alternative_names?: AlternativeName[];

  @Field(() => [Artwork], { nullable: true })
  artworks?: Artwork[];

  @Field(() => [Game], { nullable: true })
  bundles?: Game[];

  @Field(() => GameCategoryEnum, { nullable: true })
  category?: GameCategoryEnum;

  @Field(() => Collection, { nullable: true })
  collection?: Collection;

  @Field(() => Cover, { nullable: true })
  cover?: Cover;

  @Field(() => Int, { nullable: true })
  created_at?: number;

  @Field(() => [Game], { nullable: true })
  dlcs?: Game[];

  @Field(() => [Game], { nullable: true })
  expansions?: Game[];

  @Field(() => [ExternalGame], { nullable: true })
  external_games?: ExternalGame[];

  @Field({ nullable: true })
  name?: string;
}
