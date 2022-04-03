import {ArgsType, Field, Int} from 'type-graphql';
import {GamesSortInput} from './GameSortInput';
import {GamesWhereInput} from './GameWhereInput';

ArgsType();
export class GamesArgs {
  @Field(_type => GamesWhereInput, {
    nullable: true,
  })
  where?: GamesWhereInput | undefined;

  @Field(_type => [GamesSortInput], {
    nullable: true,
  })
  sort?: GamesSortInput[] | undefined;

  @Field(_type => Int, {
    nullable: true,
  })
  limit?: number | undefined;

  @Field(_type => Int, {
    nullable: true,
  })
  offset?: number | undefined;
}
