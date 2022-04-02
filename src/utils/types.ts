import {igdb} from 'ts-igdb-client';
import * as entities from '../entity';

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

export type EnitityTypes = InstanceType<typeof entities[keyof typeof entities]>;

export type RLoader = {
  id: number | undefined;
  ids: number[] | number | undefined | EnitityTypes | EnitityTypes[];
};
