import { LucideIcon } from "lucide-react";

interface WorkflowStepProps {
  title: string;
  description: string;
  icon: LucideIcon;
  isLast: boolean;
}

const WorkflowStep = ({ title, description, icon: Icon, isLast }: WorkflowStepProps) => {
  return (
    <div className="flex items-start relative">
      <div className="flex-shrink-0 relative">
        {!isLast && (
          <div className="absolute left-6 top-12 w-[2px] h-16 border-dashed border-gray-200 -z-10" />
        )}
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center z-10 relative">
          <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
        </div>
      </div>
      <div className="ml-4 flex min-h-[48px] flex-grow">
        <div className="flex flex-col justify-center">
          <h3 className="font-medium text-lg leading-6">{title}</h3>
          <p className="text-sm text-muted-foreground mt-1">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkflowStep;