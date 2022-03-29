import {Field, ID, Int, ObjectType} from 'type-graphql';
import {Company} from '../Company/Company';
import {Game} from '../Game/Game';

@ObjectType()
export class InvolvedCompany {
  @Field(() => ID)
  id: number;

  @Field(() => Company, {nullable: true})
  company?: Company;

  @Field(() => Int, {nullable: true})
  created_at?: number;

  @Field(() => Boolean, {nullable: true})
  developer?: boolean;

  @Field(() => Game, {nullable: true})
  game?: Game;

  @Field(() => Boolean, {nullable: true})
  porting?: boolean;

  @Field(() => Boolean, {nullable: true})
  publisher?: boolean;

  @Field(() => Boolean, {nullable: true})
  supporting?: boolean;

  @Field(() => Int, {nullable: true})
  updated_at?: number;

  @Field({nullable: true})
  checksum?: string;
}
