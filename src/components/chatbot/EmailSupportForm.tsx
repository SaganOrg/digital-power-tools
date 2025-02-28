import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface EmailSupportFormProps {
  onBack: () => void;
}

const EmailSupportForm = ({ onBack }: EmailSupportFormProps) => {
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setEmail("");
    setQuestion("");
  };

  return (
    <div className="space-y-4">
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <Textarea
              placeholder="Your question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              required
              className="min-h-[100px]"
            />
          </div>
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      ) : (
        <div className="text-sm text-center py-4">
          Thank you for contacting us! A member of our customer support team will be in touch shortly.
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

export default EmailSupportForm;