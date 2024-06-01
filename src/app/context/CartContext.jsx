import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      type: "sandwich",
      name: "X-burger",
      description: "Pão brioche com um suculento hambúrguer no ponto certo, você pode escolher entre o queijo cheddar ou mussarela para adicionar um toque cremoso ao seu sanduíche.",
      price: 19.0,
    },
    {
      id: 2,
      type: "sandwich",
      name: "X-Eggs",
      description: "Hambúrguer com queijo, salada e ovo não deixa ninguém ficar com fome e tem tudo para transformar a sua noite do hambúrguer em um evento inesquecível.",
      price: 21.5,
    }
  ]);

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

  const addItemToMenu = (item) => {
    setMenuItems(prevItems => [...prevItems, {...item, id: prevItems.length + 1}]);
  };

  return (
    <CartContext.Provider value={{ cartItems, menuItems, removeFromCart, updateCart, addItemToMenu }}>
      {children}
    </CartContext.Provider>
  );
}
