import { Button } from "@/components/ui/button";

interface HelpContentProps {
  selectedOption: string;
  onBack: () => void;
}

const HelpContent = ({ selectedOption, onBack }: HelpContentProps) => {
  return (
    <div className="space-y-4">
      {selectedOption === "how-it-works" && (
        <div className="text-sm">
          You can select individual automations or use our "Filter by Tools" to find automations that may be most helpful to you with your existing tech stack.
        </div>
      )}
      
      {selectedOption === "help-choose" && (
        <div className="space-y-4">
          <div className="text-sm">
            Use our pathfinder tool to find the perfect automation for your needs.
          </div>
          <Button 
            onClick={() => {
              window.open("https://saganpathfinder.replit.app/", "_blank");
            }}
          >
            Open Pathfinder Tool
          </Button>
        </div>
      )}
      
      <Button
        variant="outline"
        onClick={onBack}
        className="w-full"
      >
        Back to options
      </Button>
    </div>
  );
};

export default HelpContent;