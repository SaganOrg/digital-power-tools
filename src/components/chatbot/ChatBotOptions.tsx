import { Button } from "@/components/ui/button";

interface ChatBotOptionsProps {
  onSelectOption: (option: string) => void;
}

const ChatBotOptions = ({ onSelectOption }: ChatBotOptionsProps) => {
  return (
    <div className="flex flex-col gap-4">
      <Button
        variant="outline"
        className="justify-start text-left h-auto py-4"
        onClick={() => onSelectOption("how-it-works")}
      >
        <div>
          <div className="font-semibold">How does this work?</div>
        </div>
      </Button>
      
      <Button
        variant="outline"
        className="justify-start text-left h-auto py-4"
        onClick={() => onSelectOption("help-choose")}
      >
        <div>
          <div className="font-semibold">Can you help me choose?</div>
        </div>
      </Button>
      
      <Button
        variant="outline"
        className="justify-start text-left h-auto py-4"
        onClick={() => onSelectOption("email-support")}
      >
        <div>
          <div className="font-semibold">Email support</div>
        </div>
      </Button>
    </div>
  );
};

export default ChatBotOptions;