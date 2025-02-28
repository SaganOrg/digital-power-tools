import { TicketIcon, MessageSquare, Book, Headphones, Activity } from "lucide-react";
import { Automation } from "./types";

export const supportAutomations: Automation[] = [
  {
    title: "Smart Ticket Triage",
    description: "AI-powered support ticket categorization and routing with automatic priority assignment",
    icon: TicketIcon,
    iconBg: "bg-yellow-100",
    link: "/ticket-triage",
    category: "Support",
    tools: ["Zendesk", "Slack", "Claude.ai"]
  },
  {
    title: "Customer Feedback Loop",
    description: "Automatically collects, analyzes, and distributes customer feedback to relevant teams",
    icon: MessageSquare,
    iconBg: "bg-purple-100",
    link: "/feedback-loop",
    category: "Support",
    tools: ["Typeform", "Slack", "ClickUp", "Claude.ai"]
  },
  {
    title: "Support Knowledge Base Builder",
    description: "Converts support conversations into searchable knowledge base articles",
    icon: Book,
    iconBg: "bg-blue-100",
    link: "/knowledge-base",
    category: "Support",
    tools: ["Zendesk", "Notion", "Claude.ai"]
  },
  {
    title: "Meeting Intelligence System",
    description: "Transcribes customer calls, extracts action items, and updates task management system",
    icon: Headphones,
    iconBg: "bg-green-100",
    link: "/meeting-intelligence",
    category: "Support",
    tools: ["Otter.ai", "ClickUp", "Slack"]
  },
  {
    title: "Customer Success Tracker",
    description: "Monitors customer health metrics and alerts teams of risks or opportunities",
    icon: Activity,
    iconBg: "bg-orange-100",
    link: "/success-tracker",
    category: "Support",
    tools: ["HubSpot", "Slack", "Claude.ai"]
  }
];