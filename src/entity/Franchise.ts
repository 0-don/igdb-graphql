import {Field, Int, ObjectType} from 'type-graphql';
import {Game} from './Game/Game';

@ObjectType()
export class Franchise {
  @Field(() => Int, {nullable: true})
  id?: number;

  @Field(() => Int, {nullable: true})
  created_at?: number;

  @Field(() => [Game], {nullable: true})
  games?: Game[];

  @Field({nullable: true})
  name?: string;

  @Field({nullable: true})
  slug?: string;

  @Field(() => Int, {nullable: true})
  updated_at?: number;

  @Field({nullable: true})
  url?: string;

  @Field({nullable: true})
  checksum?: string;
}
