import AutomationCard from "./AutomationCard";
import { Automation } from "@/data/automations/types";

interface FeaturedAutomationsProps {
  automations: Automation[];
}

const FeaturedAutomations = ({ automations }: FeaturedAutomationsProps) => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">Featured Automations</h2>
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {automations.slice(0, 3).map((automation, index) => (
            <AutomationCard key={index} {...automation} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedAutomations;