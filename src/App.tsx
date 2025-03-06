import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import { Cart } from "./components/Cart";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AutomationDetail from "./components/AutomationDetail";
import ClickSpark from '@/components/ui/ClickSpark';

const queryClient = new QueryClient();

const App = () => (
  <>
  <ClickSpark
  sparkColor='#5967d4'
  sparkSize={10}
  sparkRadius={15}
  sparkCount={8}
  duration={400}
>
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <div className="relative">
          <div className="fixed top-4 right-4 z-50">
            <Cart />
          </div>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/:id" element={<AutomationDetail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
  </ClickSpark>
  </>
);

export default App;