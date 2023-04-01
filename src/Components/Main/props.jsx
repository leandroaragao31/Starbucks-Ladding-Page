import React from 'react';
import * as S from './style'

const Props = ({star, title, titleS, children}) => {
    return (
        <S.ContainerProps>
            <S.Title>{title}</S.Title>
            <S.Title>{titleS}<b>{star}</b></S.Title>
            {children}          
        </S.ContainerProps>
    );
}

export default Props;
