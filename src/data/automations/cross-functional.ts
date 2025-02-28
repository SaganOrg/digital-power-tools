import { UserPlus, Briefcase, Calendar, FolderInput, MessageCircle } from "lucide-react";
import { Automation } from "./types";

export const crossFunctionalAutomations: Automation[] = [
  {
    title: "New Employee Onboarding",
    description: "Automates document collection, account creation, and training scheduling",
    icon: UserPlus,
    iconBg: "bg-teal-100",
    link: "/employee-onboarding",
    category: "Cross-Functional",
    tools: ["Google Workspace", "Slack", "ClickUp"]
  },
  {
    title: "Client Onboarding Orchestrator",
    description: "Manages new client setup process across multiple systems",
    icon: Briefcase,
    iconBg: "bg-amber-100",
    link: "/client-onboarding",
    category: "Cross-Functional",
    tools: ["HubSpot", "ClickUp", "Slack", "Google Drive"]
  },
  {
    title: "Meeting Scheduler & Prep",
    description: "Handles meeting scheduling, reminder sending, and prep material distribution",
    icon: Calendar,
    iconBg: "bg-cyan-100",
    link: "/meeting-scheduler",
    category: "Cross-Functional",
    tools: ["Calendly", "Gmail", "Notion"]
  },
  {
    title: "Document Collection Portal",
    description: "Creates secure, personalized document collection workflows",
    icon: FolderInput,
    iconBg: "bg-violet-100",
    link: "/document-collection",
    category: "Cross-Functional",
    tools: ["Google Forms", "Google Drive", "Slack"]
  },
  {
    title: "Team Communication Hub",
    description: "Centralizes updates from multiple tools into organized channels",
    icon: MessageCircle,
    iconBg: "bg-pink-100",
    link: "/communication-hub",
    category: "Cross-Functional",
    tools: ["Slack", "ClickUp", "Gmail", "Claude.ai"]
  }
];