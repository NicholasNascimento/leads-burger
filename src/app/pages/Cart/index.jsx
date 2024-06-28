import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { LuSandwich } from "react-icons/lu";

import { CartContext } from "../../context/CartContext.jsx";
import { UserContext } from "../../context/UserContext.jsx";
import { CartItem } from "../../components/CartItem/index.jsx";
import { createOrder } from "../../utils/http/user.js";

import * as S from "./styles.js";

export function Cart() {
  const { cartItems } = useContext(CartContext);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const formattedTotal = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(total);

  const handleMakeOrder = async () => {
    try {
      const orderDetails = {
        total: total,
        order_items_attributes: cartItems.map(item => ({
          name: item.name,
          menu_item_id: item.id,
          quantity: item.quantity,
          price: item.price
        }))
      };
  
      const response = await createOrder({ order: orderDetails });
  
      if (response.status === 201) {
        navigate('/orders');
      }
    } catch (error) {
      console.error('Failed to place order:', error.response?.data);
    }
  };

  return (
    <S.Container>
      <S.Content>
        <h1>Leads Burger <span><LuSandwich /></span></h1>
        <button className="backButton" onClick={() => navigate('/menu')}>
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
            <button onClick={handleMakeOrder}>Fazer pedido</button>
          </div>
        }
      </S.Content>
    </S.Container>
  );
}
