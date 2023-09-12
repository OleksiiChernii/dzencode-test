import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 10px;

  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  border: 1px solid rgb(207, 216, 220);
  border-radius: 5px;
  padding: 5px 15px;

  font-size: 20px;

  &:hover {
    background-color: rgb(233, 235, 236);
  }
`;
