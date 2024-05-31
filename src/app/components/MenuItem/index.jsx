import { useContext, useEffect, useState } from "react";
import { FaHamburger, FaPlus } from "react-icons/fa";
import { IoRemoveOutline } from "react-icons/io5";

import { CartContext } from "../../context/CartContext.jsx";
import { UserContext } from "../../context/UserContext.jsx";
import * as S from "./styles.js";

export function MenuItem({ name, id, type, description, price }) {
  const { cartItems, updateCart, removeFromCart } = useContext(CartContext);
  const { user } = useContext(UserContext)
  const [quantity, setQuantity] = useState(0);
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price);

  useEffect(() => {
    const item = cartItems.find(item => item.id === id);
    if (item) {
      setQuantity(item.quantity);
    }
  }, [cartItems, id]);

  function handleIncrementQuantity() {
    const newQuantity = quantity + 1;
    const itemData = { id, name, price, type, quantity: newQuantity };
    updateCart(itemData);
    setQuantity(newQuantity);
  }
  
  function handleDecrementQuantity() {
    const newQuantity = quantity - 1;
    const itemData = { id, name, price, type, quantity: newQuantity };
    if (newQuantity > 0) {
      updateCart(itemData);
    } else {
      removeFromCart(id);
    }
    setQuantity(newQuantity);
  }

  return (
    <S.Container>
      {type === "sandwich" && <span><FaHamburger /></span>}
      <div className="info">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
      {user !== "admin" &&
        <>
          <div className="updateCart">
            <div>
              <button onClick={handleIncrementQuantity} disabled={quantity === 9}><FaPlus /></button>
              <button onClick={handleDecrementQuantity} disabled={quantity === 0}><IoRemoveOutline /></button>
            </div>
            <strong>{quantity}</strong>
          </div>
          <strong className="price">{formattedPrice}</strong>
        </>
      }
    </S.Container>
  );
}
