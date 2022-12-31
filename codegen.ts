import type { CodegenConfig } from "@graphql-codegen/cli";
import { Module } from "module";

const config: CodegenConfig = {
  overwrite: true,
  schema: "schema.graphql",
  generates: {
    "types.ts": {
      config: {
        contextType: "./pages/api/index#GraphQLContext",
        mapperTypeSuffix: "Model",
        mappers: {
          Cart: "@prisma/client#Cart",
          CartItem: "@prisma/client#CartItem",
        },
      },
      plugins: ["typescript", "typescript-operations", "typescript-resolvers"],
    },
  },
};

export default config;
