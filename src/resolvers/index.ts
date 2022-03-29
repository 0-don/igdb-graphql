import {NonEmptyArray} from 'type-graphql';
import {AgeRatingResolver} from './AgeRatingResolver';
import {GameResolver} from './GameResolver';
import { PlatformResolver } from './PlatformResolver';

export default [AgeRatingResolver, GameResolver, PlatformResolver] as NonEmptyArray<Function>;
