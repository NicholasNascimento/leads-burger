import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { LuSandwich } from "react-icons/lu";
import { TbMoodEmpty } from "react-icons/tb";

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

  useEffect(() => {
    console.log(orders)
  }, [orders]);

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
          {orders?.slice().reverse().map((order, index) => (
            <div key={index} className="orderCard">
              <h2>Pedido realizado em: {new Date(order.created_at).toLocaleString()}</h2>
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
          {orders?.length === 0 &&
            <div className="empty">
              <span><TbMoodEmpty /></span>
              <h2>Você ainda não realizou nenhum pedido.</h2>
            </div>
          }
        </div>

      </S.Content>
    </S.Container>
  );
}