import styled from 'styled-components'

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 10px;

  overflow-y: scroll;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  border: 1px solid rgb(207, 216, 220);
  border-radius: 5px;
  padding: 20px 10px 20px 80px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;


  position: relative;


  &::before {
    content: "";
    background-color: ${props => props.isnew ? "rgb(205, 220, 57)" : "rgb(44,60,68)"};
    position: absolute;
    top: 50%;
    left: 45px;

    transform: translateY(-50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }

  &:hover {
    background-color: rgb(233, 235, 236);
  }
`;

export const Underlined = styled.div`
  color: rgb(44, 60, 68);
  position: relative;
  &:after {
    content: "";
    position: absolute;

    bottom: 0;
    left: 0;

    width: 100%;
    height: 1px;

    background-color: rgb(215, 217, 218);
  }
`;

export const Smaller = styled.div`
  font-size: 10px;
  color: rgb(178, 191, 198);
`;