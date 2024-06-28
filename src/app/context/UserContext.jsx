import { createContext, useState } from "react";

export const UserContext = createContext({});

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);

  return (
    <UserContext.Provider value={{ user, setUser, orders, setOrders }}>
      {children}
    </UserContext.Provider>
  );
}
