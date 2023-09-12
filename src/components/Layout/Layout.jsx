import React from "react";
import { Outlet } from "react-router-dom";
import { AsidePannel } from "./AsidePannel";
import { Container, InputStyled, LogoContainer, Navigation, NavigationContainer } from "./Layout.styled";
import logo from '../../logo.png';
import { Clock } from "../Pages/Clock/Clock";

export const Layout = () => {
  return (
    <>
      <NavigationContainer>
        <Navigation>
          <LogoContainer to='/'>
            <img src={logo} alt="logo"></img>
            <div>INVESTORY</div>
          </LogoContainer>
          <InputStyled type="text" placeholder="Поиск" />
        </Navigation>
        <Clock/>
      </NavigationContainer>

      <Container>
        <main className="container">
          <Outlet />
        </main>
        <AsidePannel />
      </Container>
    </>
  );
};
