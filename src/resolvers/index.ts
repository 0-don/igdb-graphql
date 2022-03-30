import { NonEmptyArray } from 'type-graphql';

import { AgeRatingResolver } from './AgeRatingResolver';
import { CollectionResolver } from './CollectionResolver';
import { CoverResolver } from './CoverResolver';
import { GameResolver } from './Game/GameResolver';
import { PlatformResolver } from './Platform/PlatformResolver';

export default [
  AgeRatingResolver,
  GameResolver,
  PlatformResolver,
  CollectionResolver,
  CoverResolver,
] as NonEmptyArray<Function>;
