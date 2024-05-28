import { LuSandwich } from "react-icons/lu";

import { MenuItem } from "../../components/MenuItem/index.jsx";

import * as S from "./styles.js"

export function Menu() {
  const sandwiches = [
    {
      id: 1,
      type: "sandwich",
      name: "X-burger",
      description: "Pão briocheCom um suculento hambúrguer no ponto certo, você pode escolher entre o queijo cheddar ou mussarela para adicionar um toque cremoso ao seu sanduíche.",
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
      <S.Content>
        <h1>Leads Burger <span><LuSandwich /></span></h1>

        <S.Menu>
        {sandwiches?.map(sandwich => (
            <MenuItem
              key={sandwich.id}
              name={sandwich.name}
              type={sandwich.type}
              description={sandwich.description}
              price={sandwich.price}
            />
          ))}
        </S.Menu>
      </S.Content>
    </S.Container>
  )
}