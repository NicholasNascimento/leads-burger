import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { LuSandwich } from "react-icons/lu";
import { IoLogOutOutline } from "react-icons/io5";

import * as S from "./styles.js"

export function CreateItem() {
  const navigate = useNavigate();

  return(
    <S.Container>
      <button
        className="logout"
        onClick={() => navigate('/')}
      >
        <IoLogOutOutline />
      </button>

      <S.Content>
        <h1>Leads Burger <span><LuSandwich /></span></h1>
        <button className="backButton" onClick={() => navigate('/menu')}>
          <FaArrowLeft />
        </button>
      </S.Content>
    </S.Container>
  )
}