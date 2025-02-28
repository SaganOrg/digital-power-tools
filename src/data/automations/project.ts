import { Rocket, AlertTriangle, FileCheck, ListTodo, PieChart } from "lucide-react";
import { Automation } from "./types";

export const projectAutomations: Automation[] = [
  {
    title: "Project Kickoff Automator",
    description: "Creates project workspaces, schedules kick-off meetings, and generates initial documentation",
    icon: Rocket,
    iconBg: "bg-emerald-100",
    link: "/project-kickoff",
    category: "Project Management",
    tools: ["ClickUp", "Google Calendar", "Notion"]
  },
  {
    title: "Resource Allocation Alert",
    description: "Monitors team capacity and alerts managers of potential bottlenecks",
    icon: AlertTriangle,
    iconBg: "bg-red-100",
    link: "/resource-alert",
    category: "Project Management",
    tools: ["ClickUp", "Slack", "Claude.ai"]
  },
  {
    title: "Document Approval Workflow",
    description: "Streamlines document review process with automatic routing and reminders",
    icon: FileCheck,
    iconBg: "bg-blue-100",
    link: "/document-approval",
    category: "Project Management",
    tools: ["Google Drive", "DocuSign", "Slack"]
  },
  {
    title: "Meeting Action Item Tracker",
    description: "Extracts action items from meeting transcripts and creates assigned tasks",
    icon: ListTodo,
    iconBg: "bg-purple-100",
    link: "/action-items",
    category: "Project Management",
    tools: ["Fireflies.ai", "Asana", "Slack"]
  },
  {
    title: "Project Status Reporter",
    description: "Generates automated project status reports with AI-enhanced insights",
    icon: PieChart,
    iconBg: "bg-yellow-100",
    link: "/status-reporter",
    category: "Project Management",
    tools: ["ClickUp", "Slack", "Claude.ai"]
  }
];