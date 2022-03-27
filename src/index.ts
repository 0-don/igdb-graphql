require("dotenv").config();
import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import responseCachePlugin from "apollo-server-plugin-response-cache";
import { buildSchema } from "type-graphql";
import { Entities } from "./entity";

async function start() {
  const schema = await buildSchema({
    resolvers: [...Entities],
  });

  const server = new ApolloServer({
    schema,
    plugins: [responseCachePlugin()],
  });

  const { url } = await server.listen(4000);
  console.log(`Server is running, GraphQL Playground available at ${url}`);
}

start();
