import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { LuSandwich } from "react-icons/lu";

import { UserContext } from "../../context/UserContext.jsx";
import { getUserOrders } from "../../utils/http/user.js";

import * as S from "./styles.js";

export function Orders() {
  const navigate = useNavigate();
  const { orders, setOrders } = useContext(UserContext);

  async function loadOrders() {
    try {
      const response = await getUserOrders();
      setOrders(response?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadOrders();
  }, []);

  return (
    <S.Container>
      <button
        className="logout"
        onClick={() => navigate('/')}
      >
        <IoLogOutOutline />
      </button>

      <S.Content>
        <h1>Leads Burger <span><LuSandwich /></span></h1>
        <button className="backButton" onClick={() => navigate('/menu')}><FaArrowLeft /></button>

        <div className="ordersList">
          {orders?.map((order, index) => (
            <div key={index} className="orderCard">
              <h2>Pedido realizado em: {new Date(order.createdAt).toLocaleString()}</h2>
              <ul>
                {order?.order_items?.map((item, idx) => (
                  <li key={idx}>
                    {item?.name} - {item.quantity} x {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL'
                    }).format(item.price)} (Total: {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL'
                    }).format(item.price * item.quantity)})
                  </li>
                ))}
              </ul>
              <strong>Valor Total do Pedido: {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(order.total)}</strong>
            </div>
          ))}
        </div>

      </S.Content>
    </S.Container>
  );
}