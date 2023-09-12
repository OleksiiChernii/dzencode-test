import styled from 'styled-components'

export const IconList = styled.button`
  width: 40px;
  height: 40px;
  background-color: inherit;
  fill: rgb(84, 110, 122);
  border: 1px solid rgb(208, 217, 221);
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover{
    background-color: rgb(222, 224, 224);
  }
`;

export const DeleteButton = styled.button`
  width: 32px;
  height: 32px;
  border: none;
  background-color: inherit;
  border-radius: 50%;

  fill: rgb(84, 110, 122);
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgb(84, 110, 122);
    fill: #fff;
  }
`;

export const CloseButton = styled.button`
  width: 32px;
  height: 32px;

  border: 1px solid rgb(207, 216, 220);
  border-radius: 50%;

  fill: rgb(84, 110, 122);

  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);

  display:flex;
  align-items: center;
  justify-content: center;
`
