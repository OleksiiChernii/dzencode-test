import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;

  background-color: rgba(146, 163, 171, 0.4);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalWindow = styled.div`
  width: 790px;
  height: 270px;
  background-color: #fff;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-size: 24px;
  padding: 30px;
  color: rgb(44, 60, 68);
`;

export const ButtonsContainer = styled.div`
  background-color: rgb(136, 192, 73);
  height: 110px;
  padding: 0 35px;
  display: flex;
  align-items: center;
  justify-content: end;

  gap: 20px;
`;

export const ButtonCancel = styled.button`
  border: none;
  text-transform: uppercase;
  color: #fff;
  background-color: inherit;
  padding: 10px 20px;
`;

export const ButtonConfirm = styled.button`
  background-color: #fff;
  color: rgb(232, 54, 79);
  padding: 10px 20px;
  border: none;
  border-radius: 22px;

  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
