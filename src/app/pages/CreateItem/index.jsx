import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaArrowLeft } from "react-icons/fa";
import { LuSandwich } from "react-icons/lu";
import { IoLogOutOutline } from "react-icons/io5";

import { CartContext } from "../../context/CartContext.jsx";

import * as S from "./styles.js"

export function CreateItem() {
  const { addItemToMenu } = useContext(CartContext);
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = data => {
    addItemToMenu(data);
    reset();
    navigate('/menu');
  };

  return (
    <S.Container>
      <button className="logout" onClick={() => navigate('/')}>
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
