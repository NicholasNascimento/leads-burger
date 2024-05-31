import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const removeFromCart = (itemId) => {
    setCartItems(prevItems => prevItems.filter(x => x.id !== itemId));
  };

  const updateCart = (item) => {
    setCartItems(prevItems => {
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

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, removeFromCart, updateCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}
