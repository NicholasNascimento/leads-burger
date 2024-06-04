import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BiSolidFoodMenu } from "react-icons/bi";
import { FaShoppingCart, FaPlus } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { LuSandwich } from "react-icons/lu";

import { MenuItem } from "../../components/MenuItem/index.jsx";
import { CartContext } from "../../context/CartContext.jsx";
import { UserContext } from "../../context/UserContext.jsx";

import * as S from "./styles.js";

export function Menu() {
  const { cartItems, menuItems } = useContext(CartContext);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const sandwiches = menuItems.filter(item => item.type === "sandwich");
  const sides = menuItems.filter(item => item.type === "side");
  const drinks = menuItems.filter(item => item.type === "drink");

  return (
    <S.Container>
      <button className="orders" onClick={() => navigate('/orders')}>
        <BiSolidFoodMenu />
      </button>
      <button className="logout" onClick={() => navigate('/')}>
        <IoLogOutOutline />
      </button>

      <S.Content>
        <h1>Leads Burger <span><LuSandwich /></span></h1>

        <S.Menu>
          {sandwiches.length > 0 && <>
            <h2 className="topic">Sanduíches</h2>
            {sandwiches.map(sandwich => (
              <MenuItem key={sandwich.id} {...sandwich} />
            ))}
          </>}

          {sides.length > 0 && <>
            <h2 className="topic">Acompanhamentos</h2>
            {sides.map(side => (
              <MenuItem key={side.id} {...side} />
            ))}
          </>}

          {drinks.length > 0 && <>
            <h2 className="topic">Bebidas</h2>
            {drinks.map(drink => (
              <MenuItem key={drink.id} {...drink} />
            ))}
          </>}
        </S.Menu>
      </S.Content>

      {cartItems.length > 0 &&
        <S.CartButton onClick={() => navigate('/cart')}>
          <span><FaShoppingCart /></span>
        </S.CartButton>
      }

      {user?.admin &&
        <S.CartButton
          onClick={() => navigate('/create_item')}
        >
          <span><FaPlus /></span>
        </S.CartButton>
      }
    </S.Container>
  );
}
