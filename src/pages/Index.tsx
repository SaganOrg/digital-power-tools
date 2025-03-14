
import {Button} from "@heroui/react";
import Threads from '@/components/ui/Threads';
import AutomationCard from "@/components/AutomationCard";
import FeaturedAutomations from "@/components/FeaturedAutomations";
import { Checkbox } from "@/components/ui/checkbox";
import { toolCategories } from "@/data/toolCategories";
import { useState, useEffect } from "react";
import { automations } from "@/data/automations";
import ChatBot from "@/components/ChatBot";
import { getUserDataFromUrl } from '@/components/captureLogin';
import { useRef } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
const MAKE_WEBHOOK_URL = "https://hook.us2.make.com/d38kg7nnqsclk9aqeb14qsfkvfvsuruv";

const Index = () => {

  const featuredRef = useRef(null);

  const handleScroll = () => {
    if (featuredRef.current) {
      featuredRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
    useEffect(() => {
        const userData = getUserDataFromUrl();
        // console.log("Extracted User Data:", userData);
        // Send data to Make.com Webhook
        fetch(MAKE_WEBHOOK_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData)
        })
        .then(response => response.text())
        // .then(data => console.log("Make.com Response:", data))
        .catch(error => console.error("Error:", error));
        
    }, []);


  const [selectedTools, setSelectedTools] = useState<string[]>([]);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const toggleTool = (toolName: string) => {
    setSelectedTools(prev => 
      prev.includes(toolName)
        ? prev.filter(tool => tool !== toolName)
        : [...prev, toolName]
    );
  };

  // Updated filtering logic
  const filteredAutomations = automations.filter((automation) => {
    if (selectedTools.length === 0) return true;
    return automation.tools.some(tool => selectedTools.includes(tool));
  });

  const featuredAutomations = automations.slice(0, 3);
  const remainingAutomations = selectedTools.length > 0 
    ? filteredAutomations.filter(automation => !featuredAutomations.includes(automation))
    : filteredAutomations.slice(3);

  // console.log('Selected Tools:', selectedTools);
  // console.log('Filtered Automations:', filteredAutomations);

  return (
    <>
    <div className="mt-36">
    <Threads
      amplitude={1}
      distance={0}
      enableMouseInteraction={true}
    />
    </div>
    <div className="text-center max-w-3xl mx-auto mb-16 px-4">
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
        AI-Powered Digital Power Tools
      </h1>
      <p className="text-xl text-muted-foreground">
        Streamline your business operations with intelligent automations that connect your favorite tools and help your team work smarter.
      </p>
      <Button color="primary" variant="solid" onPress={handleScroll}
      className="mt-10 bg-gradient-to-tr from-blue-700 to-blue-400 text-white shadow-lg"
     >
        Explore Automations
      </Button>
</div>
    <div ref={featuredRef} style={{ width: '100%', height: '600px', position: 'relative' }}>
    <div className="max-w-7xl mx-auto mt-96">        
        <FeaturedAutomations automations={featuredAutomations} />
        <div className="mb-8 space-y-4">
          <h3 className="text-lg font-semibold mb-4">Filter by Tools</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {toolCategories.map((category) => (
              <div 
                key={category.name}
                className="border rounded-lg p-4"
              >
                <button
                  onClick={() => toggleCategory(category.name)}
                  className="flex items-center justify-between w-full text-left font-medium mb-2"
                >
                  <span>{category.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {expandedCategories.includes(category.name) ? <ChevronDown /> : <ChevronRight />}
                  </span>
                </button>
                
                {expandedCategories.includes(category.name) && (
                  <div className="space-y-2 ml-2">
                    {category.tools.map((tool) => (
                      <div key={tool.name} className="flex items-center space-x-2">
                        <Checkbox
                          id={`${category.name}-${tool.name}`}
                          checked={selectedTools.includes(tool.name)}
                          onCheckedChange={() => toggleTool(tool.name)}
                        />
                        <label
                          htmlFor={`${category.name}-${tool.name}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {tool.name}
                        </label>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {remainingAutomations.map((automation, index) => (
            <AutomationCard key={index} {...automation} />
          ))}
        </div>
      </div>
      <ChatBot />
    </div>
    </>
  );
};

export default Index;
