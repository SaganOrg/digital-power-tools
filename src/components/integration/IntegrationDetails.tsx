import { Card } from "../ui/card";

interface IntegrationDetailsProps {
  tools: string[];
  category: string;
}

const IntegrationDetails = ({ tools, category }: IntegrationDetailsProps) => {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Integration Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-medium mb-2">Required Tools</h3>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            {tools.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-medium mb-2">Category</h3>
          <p className="text-muted-foreground">{category}</p>
        </div>
      </div>
    </Card>
  );
};

export default IntegrationDetails;