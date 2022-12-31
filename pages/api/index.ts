import { join } from "path";
import { readFileSync } from "fs";
import { createServer } from "@graphql-yoga/node";
import type { Resolvers } from "../../types";
import type { PrismaClient } from "@prisma/client";
import prisma from "../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export type GraphQLContext = {
  prisma: PrismaClient;
};

export async function createContext(): Promise<GraphQLContext> {
  return {
    prisma,
  };
}

const typeDefs = readFileSync(join(process.cwd(), "schema.graphql"), {
  encoding: "utf-8",
});

const resolvers: Resolvers = {
  Query: {
    cart: (_, { id }, { prisma }) => {
      return {
        id,
        totalItems: 0,
      };
    },
  },
};

const server = createServer<{
  req: NextApiRequest;
  res: NextApiResponse;
}>({
  cors: false,
  endpoint: "/api",
  logging: false,
  schema: {
    typeDefs,
    resolvers,
  },
  context: createContext(),
});

export default server;
