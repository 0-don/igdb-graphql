require('dotenv').config();
import {ApolloServer} from 'apollo-server';
import responseCachePlugin from 'apollo-server-plugin-response-cache';
import 'reflect-metadata';
import {buildSchema} from 'type-graphql';
import {ApolloServerLoaderPlugin} from 'type-graphql-dataloader';
import resolvers from './resolvers';
import './utils/enum';

async function start() {
  const schema = await buildSchema({resolvers});

  const server = new ApolloServer({
    schema,
    plugins: [ApolloServerLoaderPlugin(), responseCachePlugin()],
  });

  const {url} = await server.listen(4000);
  console.log(`Server is running, GraphQL Playground available at ${url}`);
}

start();
