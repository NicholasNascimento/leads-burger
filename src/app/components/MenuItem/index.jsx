import { useContext, useEffect, useState } from "react";
import { FaHamburger, FaPlus, FaTrash } from "react-icons/fa";
import { GiFrenchFries } from "react-icons/gi";
import { IoRemoveOutline } from "react-icons/io5";
import { RiDrinks2Fill } from "react-icons/ri";

import { CartContext } from "../../context/CartContext.jsx";
import { UserContext } from "../../context/UserContext.jsx";

import * as S from "./styles.js";

export function MenuItem({ name, id, item_type, description, price, handleDeleteMenuItem }) {
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
    const itemData = { id, name, price, item_type, quantity: newQuantity };
    updateCart(itemData);
    setQuantity(newQuantity);
  }
  
  function handleDecrementQuantity() {
    const newQuantity = quantity - 1;
    const itemData = { id, name, price, item_type, quantity: newQuantity };
    if (newQuantity > 0) {
      updateCart(itemData);
    } else {
      removeFromCart(id);
    }
    setQuantity(newQuantity);
  }

  return (
    <S.Container>
      {item_type === "sandwich" ? (
        <span><FaHamburger /></span>
      ) : item_type === "side" ? (
        <span><GiFrenchFries /></span>
      ) : (
        <span><RiDrinks2Fill /></span>
      )}
      <div className="info">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
      {user?.username !== "admin" &&
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
      {user?.username === "admin" && (
        <button
          className="deleteButton"
          onClick={() => handleDeleteMenuItem(id)}
        >
          <span><FaTrash /></span>
        </button>
      )}
    </S.Container>
  );
}
