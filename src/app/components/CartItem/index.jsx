import { useContext } from "react";
import { FaHamburger, FaPlus, FaTrash } from "react-icons/fa";
import { IoRemoveOutline } from "react-icons/io5";

import { CartContext } from "../../context/CartContext.jsx";

import * as S from "./styles.js";

export function CartItem({ name, id, type, quantity, price }) {
  const { updateCart, removeFromCart } = useContext(CartContext);
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price);

  function handleIncrementQuantity() {
    const newQuantity = quantity + 1;
    const itemData = { id, name, price, type, quantity: newQuantity };
    updateCart(itemData);
  }
  
  function handleDecrementQuantity() {
    const newQuantity = quantity - 1;
    const itemData = { id, name, price, type, quantity: newQuantity };
    if (newQuantity > 0) {
      updateCart(itemData);
    } else {
      removeFromCart(id);
    }
  }

  function handleRemoveItem() {
    removeFromCart(id);
  }

  return (
    <S.Container>
      {type === 'sandwich' &&
        <span className="image"><FaHamburger /></span>
      }

      <div className="texts">
        <h2>{name}</h2>
        <strong>{formattedPrice}</strong>
      </div>

      <div className="updateCartItems">
        <button className="trash" onClick={handleRemoveItem}>
          <FaTrash />
        </button>

        <div className="updateCart">
          <div>
            <button onClick={handleIncrementQuantity} disabled={quantity === 9}><FaPlus /></button>
            <button onClick={handleDecrementQuantity}><IoRemoveOutline /></button>
          </div>
          <strong>{quantity}</strong>
        </div>
      </div>
    </S.Container>
  );
}
