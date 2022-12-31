import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "schema.graphql",
  config: {
    contextType: "./pages/api/index#GraphQLContext",
  },
  generates: {
    "types.ts": {
      plugins: ["typescript", "typescript-resolvers"],
    },
  },
};

export default config;
