import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BiSolidFoodMenu } from "react-icons/bi";
import { FaShoppingCart, FaPlus } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { LuSandwich } from "react-icons/lu";

import { MenuItem } from "../../components/MenuItem/index.jsx";
import { CartContext } from "../../context/CartContext.jsx";
import { UserContext } from "../../context/UserContext.jsx";

import * as S from "./styles.js"

export function Menu() {
  const { cartItems } = useContext(CartContext);
  const { user } = useContext(UserContext)
  const navigate = useNavigate();
  const sandwiches = [
    {
      id: 1,
      type: "sandwich",
      name: "X-burger",
      description: "Pão brioche com um suculento hambúrguer no ponto certo, você pode escolher entre o queijo cheddar ou mussarela para adicionar um toque cremoso ao seu sanduíche.",
      price: 19.0,
    },
    {
      id: 2,
      type: "sandwich",
      name: "X-Eggs",
      description: "hambúrguer com queijo, salada e ovo não deixa ninguém ficar com fome e tem tudo para transformar a sua noite do hambúrguer em um evento inesquecível.",
      price: 21.5,
    }
  ]

  return (
    <S.Container>
      <button
        className="orders"
        onClick={() => navigate('/orders')}
      >
        <BiSolidFoodMenu />
      </button>
      <button
        className="logout"
        onClick={() => navigate('/')}
      >
        <IoLogOutOutline />
      </button>

      <S.Content>
        <h1>Leads Burger <span><LuSandwich /></span></h1>

        <S.Menu>
        {sandwiches?.map(sandwich => (
            <MenuItem
              key={sandwich.id}
              name={sandwich.name}
              id={sandwich.id}
              type={sandwich.type}
              description={sandwich.description}
              price={sandwich.price}
            />
          ))}
        </S.Menu>
      </S.Content>

      {cartItems.length > 0 &&
        <S.CartButton
          onClick={() => navigate('/cart')}
        >
          <span><FaShoppingCart /></span>
        </S.CartButton>
      }

      {user === "admin" &&
        <S.CartButton
          onClick={() => navigate('/create_item')}
        >
          <span><FaPlus /></span>
        </S.CartButton>
      }
    </S.Container>
  )
}