import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartCount] = useState([]);

  const removeFromCart = (itemId) => {
    setCartCount(prevItems => prevItems.filter(x => x.id !== itemId));
  };

  const updateCart = (item) => {
    setCartCount(prevItems => {
      const itemIndex = prevItems.findIndex(x => x.id === item.id);
      if (itemIndex > -1) {
        const newCartItems = [...prevItems];
        newCartItems[itemIndex] = { ...newCartItems[itemIndex], quantity: item.quantity, type: item.type };
        return newCartItems;
      } else {
        return [...prevItems, { ...item }];
      }
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, removeFromCart, updateCart }}>
      {children}
    </CartContext.Provider>
  );
}
