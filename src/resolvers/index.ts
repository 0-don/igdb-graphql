import { NonEmptyArray } from "type-graphql";
import { AgeRatingResolver } from "./AgeRatingResolver";
import { GameResolver } from "./GameResolver";

export default [
  AgeRatingResolver,
  GameResolver,
] as NonEmptyArray<Function>;
