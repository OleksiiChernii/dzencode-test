import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const AsideContainer = styled.aside`
    width: 200px;
    box-shadow: 15px 0px 15px lightgray;
    height: calc(100vh - 100px);
    position: relative;

    display: flex;
    flex-direction: column;
    
    align-items: center;
    justify-content: center;
    gap: 50px;
    
    z-index: 9;
`;

export const Circle = styled.div`
  position: absolute;
  top: 150px;
  left: 50%;
  transform: translateX(-50%);

  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: lightgreen;
`

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  padding: 10px;
`

export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  text-transform: uppercase;
  color: black;
  line-height: 1.5;
  position: relative;

  &.active::before{
    content: "";
    width: calc(100% + 6px);
    height: 3px;

    position: absolute;
    bottom: -3px;
    left: -3px;

    background-color: rgb(124, 179, 66);
  }
`;
