import { PhoneCall, Users, Calendar, Bell, FileText } from "lucide-react";
import { Automation } from "./types";

export const salesAutomations: Automation[] = [
  {
    title: "Call Coach",
    description: "Use AI to set and collect performance metrics for sales and customer service calls.",
    icon: PhoneCall,
    iconBg: "bg-indigo-100",
    link: "/call-coach",
    category: "Sales",
    tools: ["VoIP Phone", "Google Sheets"]
  },
  {
    title: "Road Recap",
    description: "Your AI CRM. Set your questions, call in and talk to your custom AI ChatBot, and get a record for your CRM.",
    icon: Users,
    iconBg: "bg-rose-100",
    link: "/road-recap",
    category: "Sales",
    tools: ["HubSpot", "Fireflies.ai", "Slack"]
  },
  {
    title: "Lead Qualification Pipeline",
    description: "AI-powered lead analysis and qualification with instant Slack notifications and CRM integration.",
    icon: Users,
    iconBg: "bg-green-100",
    link: "/lead-qualification",
    category: "Sales",
    tools: ["Gmail", "HubSpot", "Slack"]
  },
  {
    title: "Customer Support Escalation",
    description: "Intelligent support issue analysis and resolution suggestions with automatic CRM updates.",
    icon: Calendar,
    iconBg: "bg-orange-100",
    link: "/support-escalation",
    category: "Support",
    tools: ["Zendesk", "Slack", "HubSpot"]
  },
  {
    title: "Quote/Proposal Automation",
    description: "Automatically generate and send personalized quotes with AI, integrated with your CRM and email.",
    icon: FileText,
    iconBg: "bg-teal-100",
    link: "/quote-automation",
    category: "Sales",
    tools: ["HubSpot", "Gmail", "Slack"]
  },
  {
    title: "Smart Lead Qualification",
    description: "AI-powered lead scoring and routing system that analyzes incoming leads and assigns them to the right sales rep.",
    icon: Users,
    iconBg: "bg-emerald-100",
    link: "/smart-lead-qualification",
    category: "Sales",
    tools: ["Gmail", "HubSpot", "Slack"]
  },
  {
    title: "AI Sales Meeting Follow-up",
    description: "Transcribes sales calls, generates summaries, updates CRM, and schedules follow-ups automatically.",
    icon: Calendar,
    iconBg: "bg-violet-100",
    link: "/sales-meeting-followup",
    category: "Sales",
    tools: ["Fireflies.ai", "HubSpot", "Gmail", "Google Calendar"]
  },
  {
    title: "Pipeline Progress Notifications",
    description: "Alerts teams in Slack when deals move stages, with AI-generated next step recommendations.",
    icon: Bell,
    iconBg: "bg-cyan-100",
    link: "/pipeline-progress",
    category: "Sales",
    tools: ["HubSpot", "Slack"]
  }
];
