require('dotenv').config();
import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import responseCachePlugin from 'apollo-server-plugin-response-cache';
import { buildSchema } from 'type-graphql';
import { RecipeResolver } from './resolvers/recipe-resolver';
import { ApolloServerPluginCacheControl } from 'apollo-server-core';

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [RecipeResolver],
  });

  const server = new ApolloServer({
    schema,
    plugins: [
      ApolloServerPluginCacheControl({ defaultMaxAge: 5 }),
      responseCachePlugin(),
    ],
  });

  const { url } = await server.listen(4000);
  console.log(`Server is running, GraphQL Playground available at ${url}`);
}

bootstrap();
