import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaArrowLeft } from "react-icons/fa";
import { LuSandwich } from "react-icons/lu";
import { IoLogOutOutline } from "react-icons/io5";

import { createMenuItem } from "../../utils/http/user.js";
import { UserContext } from "../../context/UserContext.jsx";

import * as S from "./styles.js"

export function CreateItem() {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  async function onSubmit(data) {
    try {
      const response = await createMenuItem({
        menu_item: {
          name: data.name,
          description: data.description,
          price: parseFloat(data.price),
          item_type: data.type
        }
      });
      console.log('Item added:', response.data);
      navigate('/menu');
    } catch (error) {
      console.error('Error adding menu item:', error);
      alert('Failed to add item');
    } finally {
      reset();
      navigate('/menu');
    }
  };

  function handleLogout() {
    setUser(null);
    navigate('/');
  };

  return (
    <S.Container>
      <button className="logout" onClick={() => handleLogout()}>
        <IoLogOutOutline />
      </button>
      <S.Content>
        <h1>Leads Burger <span><LuSandwich /></span></h1>
        <button className="backButton" onClick={() => navigate('/menu')}>
          <FaArrowLeft />
        </button>

        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <input {...register("name")} placeholder="Nome do item" required />
          <textarea {...register("description")} placeholder="Descrição" required />
          <div>
            <input className="halfInput" type="number" {...register("price")} placeholder="Preço" required />
            <select className="halfInput" {...register("type")} required>
              <option value="sandwich">Sanduíche</option>
              <option value="side">Acompanhamento</option>
              <option value="drink">Bebida</option>
            </select>
          </div>
          <button type="submit">Adicionar</button>
        </form>
      </S.Content>
    </S.Container>
  );
}
