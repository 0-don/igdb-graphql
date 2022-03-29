import {NonEmptyArray} from 'type-graphql';
import {AgeRatingResolver} from './AgeRatingResolver';
import {GameResolver} from './Game/GameResolver';
import {PlatformResolver} from './Platform/PlatformResolver';

export default [
  AgeRatingResolver,
  GameResolver,
  PlatformResolver,
] as NonEmptyArray<Function>;
