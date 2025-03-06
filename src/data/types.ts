export interface Tool {
  name: string;
}

export interface ToolCategory {
  name: string;
  tools: Tool[];
}