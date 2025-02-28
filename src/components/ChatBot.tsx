import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ChatBotOptions from "./chatbot/ChatBotOptions";
import EmailSupportForm from "./chatbot/EmailSupportForm";
import HelpContent from "./chatbot/HelpContent";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleBack = () => {
    setSelectedOption(null);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button
            className="rounded-full p-4 h-14 w-14 flex items-center justify-center"
            variant="default"
          >
            <MessageSquare className="h-6 w-6" />
            <span className="sr-only">Need help?</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Need help?</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4 mt-4">
            {!selectedOption ? (
              <ChatBotOptions onSelectOption={setSelectedOption} />
            ) : selectedOption === "email-support" ? (
              <EmailSupportForm onBack={handleBack} />
            ) : (
              <HelpContent selectedOption={selectedOption} onBack={handleBack} />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ChatBot;