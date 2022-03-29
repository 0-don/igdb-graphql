import {Field, Int, ObjectType} from 'type-graphql';
import {Game} from './Game/Game';

@ObjectType()
export class Cover {
  @Field(() => Int, {nullable: true})
  id?: number;

  @Field(() => Boolean, {nullable: true})
  alpha_channel?: boolean;

  @Field(() => Boolean, {nullable: true})
  animated?: boolean;

  @Field(() => Game, {nullable: true})
  game?: Game;

  @Field(() => Int, {nullable: true})
  height?: number;

  @Field({nullable: true})
  image_id?: string;

  @Field({nullable: true})
  url?: string;

  @Field(() => Int, {nullable: true})
  width?: number;

  @Field({nullable: true})
  checksum?: string;
}
