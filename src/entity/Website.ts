import {Field, ID, ObjectType} from 'type-graphql';
import {WebsiteCategoryEnum} from '../utils/enum';
import {Game} from './Game/Game';

@ObjectType()
export class Website {
  @Field(() => ID)
  id: number;

  @Field(() => WebsiteCategoryEnum, {nullable: true})
  category?: WebsiteCategoryEnum;

  @Field(() => Game, {nullable: true})
  game?: Game | number;

  @Field(() => Boolean, {nullable: true})
  trusted?: boolean;

  @Field({nullable: true})
  url?: string;

  @Field({nullable: true})
  checksum?: string;
}
