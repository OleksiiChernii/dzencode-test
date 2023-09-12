import React from "react";
import { AsideContainer, List, Item, NavigationLink } from "./AsidePannel.styled";

export const NavigationMenu = () => {
  return (
    <AsideContainer className='text-center'>
      <List>
        <Item className="col"><NavigationLink to='/income'>ПРИХОД</NavigationLink></Item>
        <Item className="col"><NavigationLink to='/groups'>ГРУППЫ</NavigationLink></Item>
        <Item className="col"><NavigationLink to='/products'>ПРОДУКТЫ</NavigationLink></Item>
        <Item className="col"><NavigationLink to='/users'>ПОЛЬЗОВАТЕЛИ</NavigationLink></Item>
        <Item className="col"><NavigationLink to='/settings'>НАСТРОЙКИ</NavigationLink></Item>
      </List>
    </AsideContainer>
  );
};
