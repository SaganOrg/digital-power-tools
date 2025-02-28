import { Share2, BarChart2, MessageCircle, Mail, Download } from "lucide-react";
import { Automation } from "./types";

export const marketingAutomations: Automation[] = [
  {
    title: "Content Distribution Automator",
    description: "Schedules and distributes content across multiple platforms with customized messaging",
    icon: Share2,
    iconBg: "bg-pink-100",
    link: "/content-distribution",
    category: "Marketing",
    tools: ["Monday.com", "LinkedIn", "Twitter", "Facebook"]
  },
  {
    title: "Campaign Performance Reporter",
    description: "Aggregates marketing metrics and generates AI-enhanced performance insights",
    icon: BarChart2,
    iconBg: "bg-teal-100",
    link: "/campaign-performance",
    category: "Marketing",
    tools: ["HubSpot", "Slack", "Claude.ai"]
  },
  {
    title: "Social Media Engagement Monitor",
    description: "Tracks and routes social media interactions to appropriate team members",
    icon: MessageCircle,
    iconBg: "bg-purple-100",
    link: "/social-engagement",
    category: "Marketing",
    tools: ["Twitter", "Facebook", "Slack", "ClickUp"]
  },
  {
    title: "Email Campaign Optimizer",
    description: "AI-powered email content suggestions based on performance analytics",
    icon: Mail,
    iconBg: "bg-blue-100",
    link: "/email-optimizer",
    category: "Marketing",
    tools: ["Mailchimp", "Claude.ai", "Airtable"]
  },
  {
    title: "Lead Magnet Automation",
    description: "Delivers lead magnets and triggers personalized follow-up sequences",
    icon: Download,
    iconBg: "bg-amber-100",
    link: "/lead-magnet",
    category: "Marketing",
    tools: ["Typeform", "Mailchimp", "HubSpot"]
  }
];