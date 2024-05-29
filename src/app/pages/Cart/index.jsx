import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { LuSandwich } from "react-icons/lu";

import { CartContext } from "../../context/CartContext.jsx";

import * as S from "./styles.js"

export function Cart() {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Content>
        <h1>Leads Burger <span><LuSandwich /></span></h1>
        <button
          onClick={() => navigate('/menu')}
        >
          <FaArrowLeft />
        </button>

        {cartItems.map(item => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>Quantidade: {item.quantity}</p>
            <p>Preço: R$ {item.price.toFixed(2)}</p>
          </div>
        ))}
      </S.Content>
    </S.Container>
  )
}