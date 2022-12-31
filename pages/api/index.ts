import { join } from "path";
import { readFileSync } from "fs";
import { createServer } from "@graphql-yoga/node";
import type { Resolvers } from '../../types'
const typeDefs = readFileSync(join(process.cwd(), "schema.graphql"), {
  encoding: "utf-8",
});

const resolvers: Resolvers = {
  Query: {
    cart: (_, { id }) => {
      return {
        id,
        totalItems: 0,
      };
    },
  },
};

const server = createServer({
  cors: false,
  endpoint: "/api",
  logging: false,
  schema: {
    typeDefs,
    resolvers,
  },
});

export default server;