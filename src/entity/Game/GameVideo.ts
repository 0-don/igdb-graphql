import {Field, ID, ObjectType} from 'type-graphql';
import {Game} from './Game';

@ObjectType()
export class GameVideo {
  @Field(() => ID)
  id: number;

  @Field(() => Game, {nullable: true})
  game?: Game | number;

  @Field({nullable: true})
  name?: string;

  @Field({nullable: true})
  video_id?: string;

  @Field({nullable: true})
  checksum?: string;
}
