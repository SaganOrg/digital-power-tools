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
      { name: "Gmail/Google Workspace",  },
      { name: "Slack",  },
      { name: "Microsoft Teams",  },
      { name: "Zoom",  },
      { name: "Microsoft 365/Outlook",  }
    ]
  },
  {
    name: "CRM & Sales",
    tools: [
      { name: "HubSpot",  },
      { name: "Pipedrive",  },
      { name: "Zoho CRM",  },
      { name: "GoHighLevel",  },
      { name: "ClickUp",  }
    ]
  },
  {
    name: "Project Management",
    tools: [
      { name: "Asana",  },
      { name: "Trello",  },
      { name: "ClickUp",  },
      { name: "Monday.com",  },
      { name: "Notion",  }
    ]
  },
  {
    name: "Forms & Data Collection",
    tools: [
      { name: "Google Forms",  },
      { name: "Typeform",  },
      { name: "JotForm",  },
      { name: "Airtable",  },
      { name: "Microsoft Forms",  }
    ]
  },
  {
    name: "Document Management",
    tools: [
      { name: "Google Drive",  },
      { name: "Dropbox",  },
      { name: "OneDrive",  },
      { name: "Box",  }
    ]
  },
  {
    name: "Accounting & Financial",
    tools: [
      { name: "QuickBooks Online",  },
      { name: "Xero",  },
      { name: "FreshBooks",  },
      { name: "Stripe",  },
      { name: "Square",  }
    ]
  },
  {
    name: "Marketing & Social",
    tools: [
      { name: "Mailchimp",  },
      { name: "ActiveCampaign",  },
      { name: "LinkedIn",  },
      { name: "Facebook/Instagram",  },
      { name: "Twitter",  },
      { name: "Klaviyo",  }
    ]
  },
  {
    name: "E-commerce",
    tools: [
      { name: "Shopify",  },
      { name: "WooCommerce",  },
      { name: "BigCommerce",  },
      { name: "Square",  }
    ]
  },
  {
    name: "Support & Service",
    tools: [
      { name: "Zendesk",  },
      { name: "Intercom",  },
      { name: "Help Scout",  },
      { name: "Freshdesk",  }
    ]
  },
  {
    name: "Scheduling",
    tools: [
      { name: "Calendly",  },
      { name: "Google Calendar",  },
      { name: "Microsoft Booking",  }
    ]
  },
  {
    name: "File Storage & Signing",
    tools: [
      { name: "DocuSign",  },
      { name: "Google Drive",  },
      { name: "Dropbox",  },
      { name: "Box",  }
    ]
  },
  {
    name: "Meeting Intelligence & Transcription",
    tools: [
      { name: "Fireflies.ai",  },
      { name: "Otter.ai",  },
      { name: "Gong.io",  },
      { name: "Rev.ai",  }
    ]
  }
];
