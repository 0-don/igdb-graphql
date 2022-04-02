import {Field, ID, Int, ObjectType} from 'type-graphql';
import {Company} from '../Company/Company';
import {Platform} from '../Platform/Platform';
import {GameEngineLogo} from './GameEngineLogo';

@ObjectType()
export class GameEngine {
  @Field(() => ID, {nullable: true})
  id?: number;

  @Field(() => [Company], {nullable: true})
  companies?: Company[] | number[];

  @Field(() => Int, {nullable: true})
  created_at?: number;

  @Field({nullable: true})
  description?: string;

  @Field(() => GameEngineLogo, {nullable: true})
  logo?: GameEngineLogo | number;

  @Field({nullable: true})
  name?: string;

  @Field(() => [Platform], {nullable: true})
  platforms?: Platform[] | number[];

  @Field({nullable: true})
  slug?: string;

  @Field(() => Int, {nullable: true})
  updated_at?: number;

  @Field({nullable: true})
  url?: string;

  @Field({nullable: true})
  checksum?: string;
}
