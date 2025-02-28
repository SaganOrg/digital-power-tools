import { salesAutomations } from "./sales";
import { supportAutomations } from "./support";
import { marketingAutomations } from "./marketing";
import { projectAutomations } from "./project";
import { financialAutomations } from "./financial";
import { crossFunctionalAutomations } from "./cross-functional";
import { Automation } from "./types";

export const automations: Automation[] = [
  ...salesAutomations,
  ...supportAutomations,
  ...marketingAutomations,
  ...projectAutomations,
  ...financialAutomations,
  ...crossFunctionalAutomations
];

export * from "./types";