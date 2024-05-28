import { FaHamburger } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { IoRemoveOutline } from "react-icons/io5";

import * as S from "./styles.js"
import { useState } from "react";

export function MenuItem({ name, type, description, price }) {
  const [quantity, setQuantity] = useState(0)
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price);

  function handleIncrementQuantity() {
    if (quantity < 9) {
      setQuantity(quantity+1)
    }
  }

  function handleDecrementQuantity() {
    if (quantity > 0) {
      setQuantity(quantity-1)
    }
  }

  return (
    <S.Container>
      {type === "sandwich" &&
        <span><FaHamburger /></span>
      }

      <div className="info">
        <h2>{name}</h2>

        <p>{description}</p>
      </div>

      <div className="updateCart">
        <div>
          <button
            onClick={() => handleIncrementQuantity()}
            disabled={quantity === 9}
          >
              <FaPlus />
          </button>
          <button
            onClick={() => handleDecrementQuantity()}
            disabled={quantity === 0}
          >
            <IoRemoveOutline />
          </button>
        </div>
        <strong>{quantity}</strong>
      </div>
      
      <strong className="price">{formattedPrice}</strong>
    </S.Container>
  )
}