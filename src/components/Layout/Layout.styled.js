import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;

  display: flex;
  flex-direction: row-reverse;
  justify-content: start;
`;

export const InputStyled = styled.input`
  background-color: rgb(240, 243, 245);
  width: 410px;
  height: 30px;
  padding: 0 15px;
  color: black;
  border-bottom: none;
  border-radius: 5px;

  &::placeholder{
    color: black;
  }
`

export const LogoContainer = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  text-decoration: none;
  color: rgb(124, 179, 66);
`;

export const NavigationContainer = styled.div`
    width: 100%;
    height: 100px;
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-around;

    box-shadow: 0px 10px 15px lightgray;
    z-index: 99;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 150px;
`;
