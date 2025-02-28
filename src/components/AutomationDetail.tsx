import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { automations } from "@/data/automations";
import { 
  Mail, FileText, MessageSquare, Terminal, Calendar, 
  Users, AlertCircle, DollarSign, PhoneCall, Database,
  List, BrainCircuit, Bot, Workflow
} from "lucide-react";
import WorkflowSteps from "./workflow/WorkflowSteps";
import IntegrationDetails from "./integration/IntegrationDetails";

const workflowSteps = {
  "email-triage": [
    {
      title: "Email Reception",
      description: "New customer email arrives in Gmail inbox",
      icon: Mail
    },
    {
      title: "AI Analysis",
      description: "AI analyzes email content and sentiment to determine priority",
      icon: BrainCircuit
    },
    {
      title: "Route & Notify",
      description: "Email is routed to appropriate Slack channel and CRM is updated",
      icon: MessageSquare
    }
  ],
  "meeting-followup": [
    {
      title: "Meeting Ends",
      description: "Calendar event concludes",
      icon: Calendar
    },
    {
      title: "Generate Summary",
      description: "AI creates detailed meeting summary and action items",
      icon: FileText
    },
    {
      title: "Update Systems",
      description: "CRM is updated and follow-up emails are drafted",
      icon: Database
    }
  ],
  "lead-qualification": [
    {
      title: "Lead Entry",
      description: "New lead information is received",
      icon: Users
    },
    {
      title: "AI Scoring",
      description: "AI analyzes lead data against qualification criteria",
      icon: BrainCircuit
    },
    {
      title: "Team Assignment",
      description: "Qualified leads are assigned to sales team with notifications",
      icon: MessageSquare
    }
  ],
  "support-escalation": [
    {
      title: "Issue Detection",
      description: "Support ticket is flagged for escalation",
      icon: AlertCircle
    },
    {
      title: "Analysis",
      description: "AI analyzes issue severity and required expertise",
      icon: BrainCircuit
    },
    {
      title: "Route & Resolve",
      description: "Issue is routed to appropriate team with context",
      icon: MessageSquare
    }
  ],
  "quote-automation": [
    {
      title: "Request Receipt",
      description: "Quote request received from customer",
      icon: FileText
    },
    {
      title: "Data Collection",
      description: "System gathers necessary pricing and product information",
      icon: Database
    },
    {
      title: "Generate & Send",
      description: "Personalized quote is created and sent to customer",
      icon: DollarSign
    }
  ],
  "call-coach": [
    {
      title: "Call Recording",
      description: "Customer call is recorded and transcribed",
      icon: PhoneCall
    },
    {
      title: "AI Analysis",
      description: "AI analyzes call against performance metrics",
      icon: BrainCircuit
    },
    {
      title: "Report Generation",
      description: "Detailed performance report is generated and shared",
      icon: FileText
    }
  ],
  "road-recap": [
    {
      title: "Voice Input",
      description: "Sales rep calls in with updates",
      icon: PhoneCall
    },
    {
      title: "AI Processing",
      description: "AI ChatBot processes conversation and extracts key information",
      icon: Bot
    },
    {
      title: "CRM Update",
      description: "Information is structured and added to CRM",
      icon: Database
    }
  ],
  "agenda-ai": [
    {
      title: "Query Receipt",
      description: "User asks question to AI ChatBot",
      icon: MessageSquare
    },
    {
      title: "Context Gathering",
      description: "AI accesses connected systems for relevant information",
      icon: Database
    },
    {
      title: "Response Generation",
      description: "Contextual answer is generated and delivered",
      icon: Bot
    }
  ]
};

const AutomationDetail = () => {
  const { id } = useParams();
  const automation = automations.find(a => a.link.replace("/", "") === id);
  
  if (!automation) {
    return <div>Automation not found</div>;
  }

  const steps = workflowSteps[id as keyof typeof workflowSteps] || [
    {
      title: "Trigger",
      description: "Automation is triggered by specific event",
      icon: Workflow
    },
    {
      title: "Process",
      description: "System processes the incoming data",
      icon: Terminal
    },
    {
      title: "Output",
      description: "Results are delivered to specified channels",
      icon: MessageSquare
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center text-sm font-medium text-primary hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-1" /> Back to Automations
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">{automation.title}</h1>
          <p className="text-lg text-muted-foreground">{automation.description}</p>
        </div>

        <WorkflowSteps steps={steps} />
        <IntegrationDetails tools={automation.tools} category={automation.category} />
      </div>
    </div>
  );
};

export default AutomationDetail;
