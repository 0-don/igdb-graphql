require('dotenv').config();
import 'reflect-metadata';
import './utils/enum';
import { ApolloServer } from 'apollo-server';
import responseCachePlugin from 'apollo-server-plugin-response-cache';
import { buildSchema } from 'type-graphql';
import resolvers from './resolvers';
import { ApolloServerLoaderPlugin } from 'type-graphql-dataloader';

async function start() {
  const schema = await buildSchema({ resolvers });

  const server = new ApolloServer({
    schema,
    plugins: [ApolloServerLoaderPlugin(), responseCachePlugin()],
  });

  const { url } = await server.listen(4000);
  console.log(`Server is running, GraphQL Playground available at ${url}`);
}

start();
