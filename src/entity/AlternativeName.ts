import {Field, Int, ObjectType} from 'type-graphql';
import {Game} from './Game/Game';

@ObjectType()
export class AlternativeName {
  @Field(() => Int, {nullable: true})
  id?: number;

  @Field({nullable: true})
  comment?: string;

  @Field(() => Game, {nullable: true})
  game?: Game | number;

  @Field({nullable: true})
  name?: string;

  @Field({nullable: true})
  checksum?: string;
}
