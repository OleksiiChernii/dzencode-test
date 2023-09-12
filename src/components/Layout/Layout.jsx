import React from "react";
import { Outlet } from "react-router-dom";
import { NavigationMenu } from "./NavigationMenu";
import { Container, InputStyled, LogoContainer, Navigation, NavigationContainer } from "./Layout.styled";
import logo from '../../logo.png';
import { TopMenu } from "../Pages/TopMenu/TopMenu";

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
        <TopMenu/>
      </NavigationContainer>

      <Container>
        <main className="container">
          <Outlet />
        </main>
        <NavigationMenu />
      </Container>
    </>
  );
};
