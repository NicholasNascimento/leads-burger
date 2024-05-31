import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { LuSandwich } from "react-icons/lu";

import { UserContext } from "../../context/UserContext.jsx";

import * as S from "./styles.js";

export function Orders() {
  const { orders } = useContext(UserContext);
  const navigate = useNavigate();

  const reversedOrders = [...orders].reverse();

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
          {reversedOrders.map((order, index) => (
            <div key={index} className="orderCard">
              <h2>Pedido realizado em: {new Date(order.date).toLocaleString()}</h2>
              <ul>
                {order.items.map((item, idx) => (
                  <li key={idx}>
                    {item.name} - {item.quantity} x {new Intl.NumberFormat('pt-BR', {
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
