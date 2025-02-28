import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ShoppingCart, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Cart() {
  const { items, removeFromCart, total } = useCart();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <ShoppingCart className="h-4 w-4" />
          {items.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {items.length}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
        </SheetHeader>
        <div className="mt-8 space-y-4">
          {items.map((item) => (
            <div key={item.title} className="flex justify-between items-center p-4 bg-secondary rounded-lg">
              <div>
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-sm text-muted-foreground">${item.price}</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeFromCart(item.title)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
          {items.length === 0 && (
            <p className="text-center text-muted-foreground">Your cart is empty</p>
          )}
          {items.length > 0 && (
            <div className="border-t pt-4 mt-4">
              <div className="flex justify-between mb-4">
                <span className="font-medium">Total:</span>
                <span className="font-medium">${total}</span>
              </div>
              <Button className="w-full">
                Proceed to Quote
              </Button>
              <p className="text-xs text-muted-foreground mt-4 text-center">
                Monthly usage fees will apply based on automation usage, averaging $.005/run, 
                but can increase based on customization required. Your Customer Support Agent 
                will provide you additional details on monthly fees once your digital power 
                tool build is complete.
              </p>
              <p className="text-xs text-muted-foreground mt-4 text-center">
                By checking this box, you expressly authorize Sagan World LLC to charge the credit card we have on file for you for this service.
              </p>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                You acknowledge and agree that this charge is non-refundable and that you will not dispute or initiate a chargeback for this transaction. If you have any concerns regarding this charge, you agree to contact us first to seek resolution before initiating a dispute with your card issuer.
              </p>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}