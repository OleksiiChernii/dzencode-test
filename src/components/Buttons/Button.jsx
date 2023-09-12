import React from "react";
import sprite from "../../icons.svg";
import { IconList, DeleteButton, CloseButton } from "./Button.styled";

export const ButtonList = ({handler}) => {
  return (
    <IconList type="button" onClick={handler}>
      <svg width={16 + "px"} height={16 + "px"}>
        <use href={sprite + "#list"} />
      </svg>
    </IconList>
  );
};

export const ButtonRemove = ({handler}) => {
    return (
      <DeleteButton type="button" onClick={handler}>
        <svg width={16 + "px"} height={16 + "px"}>
          <use href={sprite + "#bin"} />
        </svg>
      </DeleteButton>
    );
  };
  
  export const ButtonClose = ({handler}) => {
    return (
      <CloseButton type="button" onClick={handler}>
      <svg width={8 + "px"} height={8 + "px"}>
        <use href={sprite + "#close"} />
      </svg>
    </CloseButton>
    )
  }