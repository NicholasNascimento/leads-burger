import { createContext, useState } from "react";

export const UserContext = createContext({});

export function UserProvider({ children }) {
  const [user, setUser] = useState("admin");
  const [orders, setOrders] = useState([]);

  const addOrder = (order) => {
    setOrders(prevOrders => [...prevOrders, order]);
  };

  return (
    <UserContext.Provider value={{ user, setUser, orders, addOrder }}>
      {children}
    </UserContext.Provider>
  );
}
