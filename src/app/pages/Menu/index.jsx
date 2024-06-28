import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiSolidFoodMenu } from "react-icons/bi";
import { FaShoppingCart, FaPlus } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { LuSandwich } from "react-icons/lu";

import { MenuItem } from "../../components/MenuItem/index.jsx";
import { CartContext } from "../../context/CartContext.jsx";
import { UserContext } from "../../context/UserContext.jsx";
import { deleteMenuItem, getMenuItems } from "../../utils/http/user.js";

import * as S from "./styles.js";

export function Menu() {
  const { cartItems } = useContext(CartContext);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [sandwiches, setSandwiches] = useState([])
  const [sides, setSides] = useState([])
  const [drinks, setDrinks] = useState([])

  async function getAllMenuItems() {
    try {
      const { data } = await getMenuItems()

      setSandwiches(data?.filter(item => item?.item_type === "sandwich"))
      setSides(data?.filter(item => item?.item_type === "side"))
      setDrinks(data?.filter(item => item?.item_type === "drink"))
    } catch (error) {
      console.log(error)
    }
  }

  async function handleDeleteMenuItem(id) {
    try {
      await deleteMenuItem(id);
      
      getAllMenuItems()
    } catch (error) {
      console.error('Failed to delete menu item:', error);
    }
  }

  function handleLogout() {
    setUser(null);
    navigate('/');
  };

  useEffect(() => {
    getAllMenuItems()
  }, [])

  return (
    <S.Container>
      {!user?.admin &&
        <button className="orders" onClick={() => navigate('/orders')}>
          <BiSolidFoodMenu />
        </button>
      }
      <button className="logout" onClick={() => handleLogout()}>
        <IoLogOutOutline />
      </button>

      <S.Content>
        <h1>Leads Burger <span><LuSandwich /></span></h1>

        <S.Menu>
          {sandwiches.length > 0 && <>
            <h2 className="topic">Sanduíches</h2>
            {sandwiches.map(sandwich => (
              <MenuItem key={sandwich.id} {...sandwich} handleDeleteMenuItem={handleDeleteMenuItem}/>
            ))}
          </>}

          {sides.length > 0 && <>
            <h2 className="topic">Acompanhamentos</h2>
            {sides.map(side => (
              <MenuItem key={side.id} {...side} handleDeleteMenuItem={handleDeleteMenuItem}/>
            ))}
          </>}

          {drinks.length > 0 && <>
            <h2 className="topic">Bebidas</h2>
            {drinks.map(drink => (
              <MenuItem key={drink.id} {...drink} handleDeleteMenuItem={handleDeleteMenuItem}/>
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
