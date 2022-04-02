import axios from 'axios';
import dayjs from 'dayjs';
import {igdb} from 'ts-igdb-client';
import {MiddlewareFn, NextFn} from 'type-graphql';
import {AuthResponse, MyContext} from './types';

export const CheckToken: MiddlewareFn<MyContext> = async ({context}, next) =>
  await createToken(context, next);

export const createToken = async (context?: MyContext, next?: NextFn) => {
  const dateExpiresIn = dayjs(process.env.EXPIRES_IN);
  const now = dayjs();
  const token = process.env.ACCESS_TOKEN;

  if (!token || dateExpiresIn.diff(now, 'd') < 5) {
    const searchParams = new URLSearchParams({
      client_id: process.env.CLIENT_ID!,
      client_secret: process.env.CLIENT_SECRET!,
      grant_type: 'client_credentials',
    });
    const url = `https://id.twitch.tv/oauth2/token?${searchParams}`;

    try {
      const {data} = await axios.post<AuthResponse>(url);
      if (data) {
        process.env.EXPIRES_IN = `${dayjs().add(data.expires_in, 's')}`;
        process.env.ACCESS_TOKEN = data.access_token;

        if (context) {
          context.client = igdb(
            process.env.CLIENT_ID!,
            process.env.ACCESS_TOKEN,
          );
        }
        return next ? next() : null;
      }
      throw new Error('No data');
    } catch (error) {
      console.error('Access Token error', error);
      throw error;
    }
  }
  return next ? next() : null;
};
