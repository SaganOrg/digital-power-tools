import { 
  Mail, Calendar, Users, MessageSquare, FileText, 
  PhoneCall, Database, List, AlertCircle, FileCheck,
  BarChart2, Share2, Bell, FolderKanban, DollarSign,
  UserPlus, Briefcase, CalendarCheck, FolderInput, MessageCircle
} from "lucide-react";
import { Tool, ToolCategory } from "./types";

export const toolCategories: ToolCategory[] = [
  {
    name: "Communication & Collaboration",
    tools: [
      { name: "Gmail/Google Workspace", isPriority: true },
      { name: "Slack", isPriority: true },
      { name: "Microsoft Teams", isPriority: false },
      { name: "Zoom", isPriority: false },
      { name: "Microsoft 365/Outlook", isPriority: true }
    ]
  },
  {
    name: "CRM & Sales",
    tools: [
      { name: "HubSpot", isPriority: true },
      { name: "Pipedrive", isPriority: true },
      { name: "Zoho CRM", isPriority: false },
      { name: "GoHighLevel", isPriority: true },
      { name: "ClickUp", isPriority: true }
    ]
  },
  {
    name: "Project Management",
    tools: [
      { name: "Asana", isPriority: true },
      { name: "Trello", isPriority: false },
      { name: "ClickUp", isPriority: true },
      { name: "Monday.com", isPriority: true },
      { name: "Notion", isPriority: false }
    ]
  },
  {
    name: "Forms & Data Collection",
    tools: [
      { name: "Google Forms", isPriority: true },
      { name: "Typeform", isPriority: false },
      { name: "JotForm", isPriority: false },
      { name: "Airtable", isPriority: true },
      { name: "Microsoft Forms", isPriority: false }
    ]
  },
  {
    name: "Document Management",
    tools: [
      { name: "Google Drive", isPriority: true },
      { name: "Dropbox", isPriority: false },
      { name: "OneDrive", isPriority: false },
      { name: "Box", isPriority: false }
    ]
  },
  {
    name: "Accounting & Financial",
    tools: [
      { name: "QuickBooks Online", isPriority: true },
      { name: "Xero", isPriority: true },
      { name: "FreshBooks", isPriority: false },
      { name: "Stripe", isPriority: true },
      { name: "Square", isPriority: false }
    ]
  },
  {
    name: "Marketing & Social",
    tools: [
      { name: "Mailchimp", isPriority: true },
      { name: "ActiveCampaign", isPriority: false },
      { name: "LinkedIn", isPriority: false },
      { name: "Facebook/Instagram", isPriority: true },
      { name: "Twitter", isPriority: false },
      { name: "Klaviyo", isPriority: false }
    ]
  },
  {
    name: "E-commerce",
    tools: [
      { name: "Shopify", isPriority: true },
      { name: "WooCommerce", isPriority: true },
      { name: "BigCommerce", isPriority: false },
      { name: "Square", isPriority: false }
    ]
  },
  {
    name: "Support & Service",
    tools: [
      { name: "Zendesk", isPriority: true },
      { name: "Intercom", isPriority: true },
      { name: "Help Scout", isPriority: false },
      { name: "Freshdesk", isPriority: false }
    ]
  },
  {
    name: "Scheduling",
    tools: [
      { name: "Calendly", isPriority: true },
      { name: "Google Calendar", isPriority: true },
      { name: "Microsoft Booking", isPriority: false }
    ]
  },
  {
    name: "File Storage & Signing",
    tools: [
      { name: "DocuSign", isPriority: true },
      { name: "Google Drive", isPriority: true },
      { name: "Dropbox", isPriority: false },
      { name: "Box", isPriority: false }
    ]
  },
  {
    name: "Meeting Intelligence & Transcription",
    tools: [
      { name: "Fireflies.ai", isPriority: true },
      { name: "Otter.ai", isPriority: false },
      { name: "Gong.io", isPriority: false },
      { name: "Rev.ai", isPriority: false }
    ]
  }
];
