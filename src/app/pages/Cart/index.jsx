import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { LuSandwich } from "react-icons/lu";

import { CartContext } from "../../context/CartContext.jsx";
import { CartItem } from "../../components/CartItem/index.jsx";

import * as S from "./styles.js"

export function Cart() {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const formattedTotal = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(total);

  return (
    <S.Container>
      <S.Content>
        <h1>Leads Burger <span><LuSandwich /></span></h1>
        <button
          className="backButton"
          onClick={() => navigate('/menu')}
        >
          <FaArrowLeft />
        </button>

        {cartItems.map(item => (
          <CartItem
            key={item.id}
            name={item.name}
            id={item.id}
            type={item.type}
            quantity={item.quantity}
            price={item.price}
          />
        ))}

        {cartItems.length > 0 &&
          <div className="orderConfirmation">
            <p>Total: {formattedTotal}</p>
            <button>Fazer pedido</button>
          </div>
        }
      </S.Content>
    </S.Container>
  );
}
