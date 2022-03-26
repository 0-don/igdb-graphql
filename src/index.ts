require('dotenv').config();
import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import responseCachePlugin from 'apollo-server-plugin-response-cache';
import { buildSchema } from 'type-graphql';
import { RecipeResolver } from './resolvers/RecipeResolver';
import { GameResolver } from './resolvers/GameResolver';

async function start() {
  const schema = await buildSchema({
    resolvers: [RecipeResolver, GameResolver],
  });

  const server = new ApolloServer({
    schema,
    plugins: [responseCachePlugin()],
  });

  const { url } = await server.listen(4000);
  console.log(`Server is running, GraphQL Playground available at ${url}`);
}

start();
