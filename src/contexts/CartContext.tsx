import React, { createContext, useContext, useState } from 'react';
import { Automation } from '@/data/automations/types';
import { useToast } from '@/components/ui/use-toast';

interface CartItem extends Automation {
  price: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (automation: Automation) => void;
  removeFromCart: (automationId: string) => void;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const { toast } = useToast();

  const addToCart = (automation: Automation) => {
    if (!items.find(item => item.title === automation.title)) {
      const price = 400; // Fixed price for each automation
      setItems([...items, { ...automation, price }]);
      toast({
        title: "Added to cart",
        description: `${automation.title} has been added to your cart.`,
      });
    } else {
      toast({
        title: "Already in cart",
        description: "This automation is already in your cart.",
        variant: "destructive",
      });
    }
  };

  const removeFromCart = (automationTitle: string) => {
    setItems(items.filter(item => item.title !== automationTitle));
    toast({
      title: "Removed from cart",
      description: "Item has been removed from your cart.",
    });
  };

  const total = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, total }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};