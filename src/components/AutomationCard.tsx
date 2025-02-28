import { ArrowRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

interface AutomationCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconBg: string;
  link: string;
  tools?: string[];
  category?: string;
}

const AutomationCard = ({ 
  title, 
  description, 
  icon: Icon, 
  iconBg, 
  link,
  tools = [],
  category 
}: AutomationCardProps) => {
  const { addToCart } = useCart();

  return (
    <Card className="automation-card hover:shadow-lg transition-shadow duration-200">
      <CardHeader>
        <div className={`w-12 h-12 rounded-lg ${iconBg} flex items-center justify-center mb-4`}>
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription className="mt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {tools.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-2 py-1 bg-muted text-muted-foreground rounded-full text-xs"
              >
                {tool}
              </span>
            ))}
          </div>
        )}
        <div className="flex items-center justify-between mt-4">
          <Link 
            to={link.replace("/", "")} 
            className="inline-flex items-center text-sm font-medium text-primary hover:underline"
          >
            Learn More <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
          <Button 
            onClick={() => addToCart({ title, description, icon: Icon, iconBg, link, tools, category })}
            variant="default"
            className="flex items-center"
          >
            Get This Tool
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AutomationCard;