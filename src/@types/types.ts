import {igdb} from 'ts-igdb-client';
import * as entities from '../entity';
import {BoolFilter} from '../resolvers/inputs/filters/BoolFilter';
import {DateTimeFilter} from '../resolvers/inputs/filters/DateTimeFilter';
import {FloatFilter} from '../resolvers/inputs/filters/FloatFilter';
import {IntFilter} from '../resolvers/inputs/filters/IntFilter';
import {StringFilter} from '../resolvers/inputs/filters/StringFilter';
import {GamesArgs} from '../resolvers/inputs/GameArgs';
import {GamesSortInput} from '../resolvers/inputs/GameSortInput';
import {GamesWhereInput} from '../resolvers/inputs/GameWhereInput';
import {GameFieldsEnum} from './enum';

export type AuthResponse = {
  access_token: string;
  expires_in: number;
  token_type: string;
};

export type MyContext = {
  req: Request;
  res: Response;
  client: ReturnType<typeof igdb>;
};

export type InputFilter = StringFilter &
  FloatFilter &
  IntFilter &
  DateTimeFilter &
  BoolFilter;

export type EnitityTypes = InstanceType<typeof entities[keyof typeof entities]>;

export type RLoader = {
  id: number | undefined;
  ids: number[] | number | undefined | EnitityTypes | EnitityTypes[];
};

export type EntityArgs = GamesArgs; // ADD MORE TYPES HERE

export type EntityWhereInput = GamesWhereInput; // ADD MORE TYPES HERE

export type EntitySortInput = GamesSortInput; // ADD MORE TYPES HERE

export type EntityField = GameFieldsEnum; // ADD MORE TYPES HERE
