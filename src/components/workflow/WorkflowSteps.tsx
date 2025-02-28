import { Card } from "../ui/card";
import WorkflowStep from "./WorkflowStep";
import { WorkflowStep as WorkflowStepType } from "./types";

interface WorkflowStepsProps {
  steps: WorkflowStepType[];
}

const WorkflowSteps = ({ steps }: WorkflowStepsProps) => {
  return (
    <Card className="p-6 mb-8">
      <h2 className="text-xl font-semibold mb-6">Steps in this workflow</h2>
      <div className="space-y-6">
        {steps.map((step, index) => (
          <WorkflowStep
            key={index}
            {...step}
            isLast={index === steps.length - 1}
          />
        ))}
      </div>
    </Card>
  );
};

export default WorkflowSteps;