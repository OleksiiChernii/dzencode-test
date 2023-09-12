import React from 'react';
import { Add, Container } from './Title.styled';

export const SectionTitle = ({title, size, add, children}) => {
    return (
        <Container>
            {add && <Add>+</Add>}
            <div>{title} / {size}</div>
            {children}
        </Container>
    )
}