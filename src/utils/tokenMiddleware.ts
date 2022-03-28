import { MiddlewareFn } from 'type-graphql';
import axios from 'axios';
import dayjs from 'dayjs';

export type AuthResponse = {
  access_token: string;
  expires_in: number;
  token_type: string;
};

export const CheckToken: MiddlewareFn = async (_, next) => {
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
      const { data } = await axios.post<AuthResponse>(url);
      if (data) {
        process.env.EXPIRES_IN = `${dayjs().add(data.expires_in, 's')}`;
        process.env.ACCESS_TOKEN = data.access_token;
        return next();
      }
      throw new Error('No data');
    } catch (error) {
      console.error('Access Token error', error);
      throw error;
    }
  }
  return next();
};
