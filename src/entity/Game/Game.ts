import {Field, ID, Int, ObjectType} from 'type-graphql';
import {GameCategoryEnum, GameStatusEnum} from '../../utils/enum';
import {AgeRating} from '../AgeRating';
import {AlternativeName} from '../AlternativeName';
import {Artwork} from '../Artworks';
import {Collection} from '../Collection';
import {InvolvedCompany} from '../Company/InvolvedCompany';
import {Cover} from '../Cover';
import {Franchise} from '../Franchise';
import {Genre} from '../Genre';
import {Keyword} from '../Keyword';
import {MultiplayerMode} from '../MultiplayerMode';
import {Platform} from '../Platform/Platform';
import {PlayerPerspective} from '../PlayerPerspective';
import {ReleaseDate} from '../ReleaseDate';
import {Screenshot} from '../Screenshot';
import {Theme} from '../Theme';
import {Website} from '../Website';
import {ExternalGame} from './ExternalGame';
import {GameEngine} from './GameEngine';
import {GameMode} from './GameMode';
import {GameVideo} from './GameVideo';

@ObjectType()
export class Game {
  @Field(() => ID)
  id: number;

  @Field(() => [AgeRating], {nullable: true})
  age_ratings?: AgeRating[] | number[];

  @Field(() => Int, {nullable: true})
  aggregated_rating?: number;

  @Field(() => Int, {nullable: true})
  aggregated_rating_count?: number;

  @Field(() => [AlternativeName], {nullable: true})
  alternative_names?: AlternativeName[];

  @Field(() => [Artwork], {nullable: true})
  artworks?: Artwork[] | number[];

  @Field(() => [Game], {nullable: true})
  bundles?: Game[] | number[];

  @Field(() => GameCategoryEnum, {nullable: true})
  category?: GameCategoryEnum;

  @Field(() => Collection, {nullable: true})
  collection?: Collection | number;

  @Field(() => Cover, {nullable: true})
  cover?: Cover | number;

  @Field(() => Int, {nullable: true})
  created_at?: number;

  @Field(() => [Game], {nullable: true})
  dlcs?: Game[] | number[];

  @Field(() => [Game], {nullable: true})
  expansions?: Game[] | number[];

  @Field(() => [ExternalGame], {nullable: true})
  external_games?: ExternalGame[] | number[];

  @Field(() => Int, {nullable: true})
  first_release_date?: number;

  @Field(() => Int, {nullable: true})
  follows?: number;

  @Field(() => Franchise, {nullable: true})
  franchise?: Franchise;

  @Field(() => [Franchise], {nullable: true})
  franchises?: Franchise[] | number[];

  @Field(() => [GameEngine], {nullable: true})
  game_engines?: GameEngine[] | number[];

  @Field(() => [GameMode], {nullable: true})
  game_modes?: GameMode[] | number[];

  @Field(() => [Genre], {nullable: true})
  genres?: Genre[] | number[];

  @Field(() => Int, {nullable: true})
  hypes?: number;

  @Field(() => [InvolvedCompany], {nullable: true})
  involved_companies?: InvolvedCompany[] | number[];

  @Field(() => [Keyword], {nullable: true})
  keywords?: Keyword[] | number[];

  @Field(() => [MultiplayerMode], {nullable: true})
  multiplayer_modes?: MultiplayerMode[] | number[];

  @Field({nullable: true})
  name?: string;

  @Field(() => Game, {nullable: true})
  parent_game?: Game | number;

  @Field(() => [Platform], {nullable: true})
  platforms?: Platform[] | number[];

  @Field(() => [PlayerPerspective], {nullable: true})
  player_perspectives?: PlayerPerspective[] | number[];

  @Field(() => Int, {nullable: true})
  rating?: number;

  @Field(() => Int, {nullable: true})
  rating_count?: number;

  @Field(() => [ReleaseDate], {nullable: true})
  release_dates?: ReleaseDate[] | number[];

  @Field(() => [Screenshot], {nullable: true})
  screenshots?: Screenshot[] | number[];

  @Field(() => [Game], {nullable: true})
  similar_games?: Game[] | number[];

  @Field({nullable: true})
  slug?: string;

  @Field(() => [Game], {nullable: true})
  standalone_expansions?: Game[] | number[];

  @Field(() => GameStatusEnum, {nullable: true})
  status?: GameStatusEnum;

  @Field({nullable: true})
  storyline?: string;

  @Field({nullable: true})
  summary?: string;

  @Field(() => [Int], {nullable: true})
  tags?: number[] | number;

  @Field(() => [Theme], {nullable: true})
  themes?: Theme[] | number[];

  @Field(() => Int, {nullable: true})
  total_rating?: number;

  @Field(() => Int, {nullable: true})
  total_rating_count?: number;

  @Field(() => Int, {nullable: true})
  updated_at?: number;

  @Field({nullable: true})
  url?: string;

  @Field(() => Game, {nullable: true})
  version_parent?: Game | number;

  @Field({nullable: true})
  version_title?: string;

  @Field(() => [GameVideo], {nullable: true})
  videos?: GameVideo[] | number[];

  @Field(() => [Website], {nullable: true})
  websites?: Website[] | number[];

  @Field({nullable: true})
  checksum?: string;

  @Field(() => [Game], {nullable: true})
  remakes?: Game[] | number[];

  @Field(() => [Game], {nullable: true})
  remasters?: Game[] | number[];

  @Field(() => [Game], {nullable: true})
  expanded_games?: Game[] | number[];

  @Field(() => [Game], {nullable: true})
  ports?: Game[] | number[];

  @Field(() => [Game], {nullable: true})
  forks?: Game[] | number[];
}
