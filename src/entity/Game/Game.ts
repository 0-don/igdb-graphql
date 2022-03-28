import { Field, ID, Int, ObjectType } from 'type-graphql';
import { GameCategoryEnum, GameStatusEnum } from '../../utils/enum';
import { AgeRating } from '../AgeRating';
import { AlternativeName } from '../AlternativeName';
import { Artwork } from '../Artworks';
import { Collection } from '../Collection';
import { Cover } from '../Cover';
import { ExternalGame } from './ExternalGame';
import { Franchise } from '../Franchise';
import { Platform } from '../Platform/Platform';
import { GameEngine } from './GameEngine';
import { GameMode } from './GameMode';
import { Genre } from '../Genre';
import { InvolvedCompany } from '../Company/InvolvedCompany';
import { Keyword } from '../Keyword';
import { MultiplayerMode } from '../MultiplayerMode';
import { PlayerPerspective } from '../PlayerPerspective';
import { ReleaseDate } from '../ReleaseDate';
import { Screenshot } from '../Screenshot';
import { Theme } from '../Theme';
import { GameVideo } from './GameVideo';
import { Website } from '../Website';

@ObjectType()
export class Game {
  @Field(() => ID)
  id: number;

  @Field(() => [AgeRating], { nullable: true })
  age_ratings?: AgeRating[];

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

  @Field(() => Int, { nullable: true })
  first_release_date?: number;

  @Field(() => Int, { nullable: true })
  follows?: number;

  @Field(() => Franchise, { nullable: true })
  franchise?: Franchise;

  @Field(() => [Franchise], { nullable: true })
  franchises?: Franchise[];

  @Field(() => [GameEngine], { nullable: true })
  game_engines?: GameEngine[];

  @Field(() => [GameMode], { nullable: true })
  game_modes?: GameMode[];

  @Field(() => [Genre], { nullable: true })
  genres?: Genre[];

  @Field(() => Int, { nullable: true })
  hypes?: number;

  @Field(() => [InvolvedCompany], { nullable: true })
  involved_companies?: InvolvedCompany[];

  @Field(() => [Keyword], { nullable: true })
  keywords?: Keyword[];

  @Field(() => [MultiplayerMode], { nullable: true })
  multiplayer_modes?: MultiplayerMode[];

  @Field({ nullable: true })
  name?: string;

  @Field(() => Game, { nullable: true })
  parent_game?: Game;

  @Field(() => [Platform], { nullable: true })
  platforms?: Platform[];

  @Field(() => [PlayerPerspective], { nullable: true })
  player_perspectives?: PlayerPerspective[];

  @Field(() => Int, { nullable: true })
  rating?: number;

  @Field(() => Int, { nullable: true })
  rating_count?: number;

  @Field(() => [ReleaseDate], { nullable: true })
  release_dates?: ReleaseDate[];

  @Field(() => [Screenshot], { nullable: true })
  screenshots?: Screenshot[];

  @Field(() => [Game], { nullable: true })
  similar_games?: Game[];

  @Field({ nullable: true })
  slug?: string;

  @Field(() => [Game], { nullable: true })
  standalone_expansions?: Game[];

  @Field(() => GameStatusEnum, { nullable: true })
  status?: GameStatusEnum;

  @Field({ nullable: true })
  storyline?: string;

  @Field({ nullable: true })
  summary?: string;

  @Field(() => [Int], { nullable: true })
  tags?: number[];

  @Field(() => [Theme], { nullable: true })
  themes?: Theme[];

  @Field(() => Int, { nullable: true })
  total_rating?: number;

  @Field(() => Int, { nullable: true })
  total_rating_count?: number;

  @Field(() => Int, { nullable: true })
  updated_at?: number;

  @Field({ nullable: true })
  url?: string;

  @Field(() => Game, { nullable: true })
  version_parent?: Game;

  @Field({ nullable: true })
  version_title?: string;

  @Field(() => [GameVideo], { nullable: true })
  videos?: GameVideo[];

  @Field(() => [Website], { nullable: true })
  websites?: Website[];

  @Field({ nullable: true })
  checksum?: string;

  @Field(() => [Game], { nullable: true })
  remakes?: Game[];

  @Field(() => [Game], { nullable: true })
  remasters?: Game[];

  @Field(() => [Game], { nullable: true })
  expanded_games?: Game[];

  @Field(() => [Game], { nullable: true })
  ports?: Game[];

  @Field(() => [Game], { nullable: true })
  forks?: Game[];
}
