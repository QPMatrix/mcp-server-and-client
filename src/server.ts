import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

const server = new McpServer({
  name: "first-mcp-try",
  version: "0.0.1",
  capabilities: {
    resources: {},
    tools: {},
    prompts: {},
  },
});

export const bootstrap = async () => {
  const transport = new StdioServerTransport();

  await server.connect(transport);
};

bootstrap();
