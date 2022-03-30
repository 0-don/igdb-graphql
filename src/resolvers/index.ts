import {NonEmptyArray} from 'type-graphql';
import {AlternativeName} from '../entity';
import {AgeRatingResolver} from './AgeRatingResolver';
import {ArtworkResolver} from './ArtworkResolver';
import {CollectionResolver} from './CollectionResolver';
import {CoverResolver} from './CoverResolver';
import {FranchiseResolver} from './FranchiseResolver';
import {ExternalGameResolver} from './Game/ExternalGameResolver';
import {GameEngineLogoResolver} from './Game/GameEngineLogoResolver';
import {GameEngineResolver} from './Game/GameEngineResolver';
import {GameModeResolver} from './Game/GameModeResolver';
import {GameResolver} from './Game/GameResolver';
import {PlatformResolver} from './Platform/PlatformResolver';

export default [
  AgeRatingResolver,
  AlternativeName,
  ArtworkResolver,
  CollectionResolver,
  CoverResolver,
  FranchiseResolver,
  GameResolver,
  GameEngineResolver,
  GameEngineLogoResolver,
  GameModeResolver,
  ExternalGameResolver,
  PlatformResolver,
] as NonEmptyArray<Function>;
