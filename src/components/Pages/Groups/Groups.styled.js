import styled from "styled-components";

export const GroupContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  gap: 20px;
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const Item = styled.li`
  width: 460px;
  padding: 15px 40px;
  border: 1px solid rgb(207, 216, 220);
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: start;
  gap: 20px;

  position: relative;

  &:hover {
    background-color: rgb(233, 235, 236);
  }

  &.activeOrder::after {
    content: "";

    background-image: url("../right-arrow.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 16px 16px;
    background-color: #fff;
    color: #fff;

    position: absolute;
    top: 0;
    right: 0;

    background-color: rgb(207, 216, 220);
    width: 40px;
    height: 100%;
  }
`;

export const IncomeContainer = styled.div`
position: relative;
  border: 1px solid rgb(207, 216, 220);
  border-radius: 5px;
  width: 950px;
`;

export const Title = styled.p`
  color: rgb(44, 60, 68);
  font-size: 16px;
`;

export const AddProduct = styled.button`
  color: rgb(139, 195, 74);
  border: none;
  background-color: #fff;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
`;

export const Add = styled.div`
  background-color: rgb(139, 195, 74);
  color: #fff;
  width: 20px;
  height: 20px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProductItem = styled.li`
  margin: 0;
  padding-left: 85px;
  padding-right: 35px;
  padding-top: 10px;
  padding-bottom: 10px;

  position: relative;

  border-top: 1px solid rgb(207, 216, 220);

  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background-color: rgb(233, 235, 236);
  }

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
`;

export const Trash = styled.div`
  width: 10px;
  height: 10px;

  background-color: rgb(144, 164, 174);
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ProductTitle = styled.div`
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
