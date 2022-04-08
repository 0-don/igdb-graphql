require('dotenv').config();
import {ApolloServer} from 'apollo-server';
import responseCachePlugin from 'apollo-server-plugin-response-cache';
import {log} from 'console';
import 'reflect-metadata';
import {igdb} from 'ts-igdb-client';
import {buildSchema} from 'type-graphql';
import {ApolloServerLoaderPlugin} from 'type-graphql-dataloader';
import './@types/enum';
import resolvers from './resolvers';
import {createToken} from './utils/tokenMiddleware';

async function start() {
  const schema = await buildSchema({resolvers});

  await createToken();
  const client = igdb(process.env.CLIENT_ID, process.env.ACCESS_TOKEN);

  const server = new ApolloServer({
    schema,
    introspection: true,

    plugins: [ApolloServerLoaderPlugin(), responseCachePlugin()],
    context: () => ({client}),
  });

  const {url} = await server.listen(6969);
  log(`Server is running, GraphQL Playground available at ${url}`);
}

start();
