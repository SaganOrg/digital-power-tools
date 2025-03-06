import {Button} from "@heroui/react";
const Hero = () => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16 px-4">
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
        AI-Powered Digital Power Tools
      </h1>
      <p className="text-xl text-muted-foreground">
        Streamline your business operations with intelligent automations that connect your favorite tools and help your team work smarter.
      </p>
      <Button color="primary" variant="solid" 
      className="mt-10 bg-gradient-to-tr from-blue-700 to-blue-400 text-white shadow-lg"
     >
        Explore Automations
      </Button>
</div>

  );
};

export default Hero;