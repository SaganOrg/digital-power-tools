export interface Tool {
  name: string;
  isPriority: boolean;
}

export interface ToolCategory {
  name: string;
  tools: Tool[];
}