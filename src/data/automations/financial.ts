import { DollarSign, Receipt, FileText, BarChart, Scan } from "lucide-react";
import { Automation } from "./types";

export const financialAutomations: Automation[] = [
  {
    title: "Invoice Processing System",
    description: "Automates invoice creation, approval, and payment tracking",
    icon: DollarSign,
    iconBg: "bg-green-100",
    link: "/invoice-processing",
    category: "Financial",
    tools: ["QuickBooks Online", "Slack", "Google Drive"]
  },
  {
    title: "Expense Report Handler",
    description: "Streamlines expense submission, approval, and reimbursement process",
    icon: Receipt,
    iconBg: "bg-blue-100",
    link: "/expense-handler",
    category: "Financial",
    tools: ["QuickBooks Online", "Slack", "Google Forms"]
  },
  {
    title: "Contract Management System",
    description: "Manages contract lifecycle from creation to signature collection",
    icon: FileText,
    iconBg: "bg-purple-100",
    link: "/contract-management",
    category: "Financial",
    tools: ["DocuSign", "Google Drive", "Slack"]
  },
  {
    title: "Financial Report Generator",
    description: "Creates and distributes periodic financial reports with AI-generated insights",
    icon: BarChart,
    iconBg: "bg-indigo-100",
    link: "/financial-reports",
    category: "Financial",
    tools: ["QuickBooks Online", "Claude.ai", "Slack"]
  },
  {
    title: "Receipt Processing Automation",
    description: "Extracts data from receipts and creates expense entries automatically",
    icon: Scan,
    iconBg: "bg-rose-100",
    link: "/receipt-processing",
    category: "Financial",
    tools: ["Google Drive", "QuickBooks Online", "ChatGPT"]
  }
];