require('dotenv').config();
import 'reflect-metadata';
import './utils/enum';
import { ApolloServer } from 'apollo-server';
import responseCachePlugin from 'apollo-server-plugin-response-cache';
import { buildSchema } from 'type-graphql';
import { GameResolver } from './resolvers/GameResolver';
import { CheckToken } from './utils/tokenMiddleware';

async function start() {
  const schema = await buildSchema({
    globalMiddlewares: [CheckToken],
    resolvers: [GameResolver],
  });

  const server = new ApolloServer({
    schema,

    plugins: [responseCachePlugin()],
  });

  const { url } = await server.listen(4000);
  console.log(`Server is running, GraphQL Playground available at ${url}`);
}

start();
