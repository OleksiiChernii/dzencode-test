import React from 'react';
import { ButtonCancel, ButtonConfirm, ButtonsContainer, ModalContainer, ModalWindow, Title } from './Modal.styled';
import { ButtonClose } from '../Buttons/Button';

export const Modal = ({handler, handleClose}) => {
    return (
        <ModalContainer>
            <ModalWindow>
                <ButtonClose handler={handleClose}/>
                <Title>Вы уверены что хотите удалить этот приход?</Title>
                <ButtonsContainer>
                    <ButtonCancel onClick={handleClose}>Отменить</ButtonCancel>
                    <ButtonConfirm onClick={handler}>Удалить</ButtonConfirm>
                </ButtonsContainer>
            </ModalWindow>
        </ModalContainer>
    )
}