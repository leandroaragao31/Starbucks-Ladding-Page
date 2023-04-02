import React from 'react';
import * as S from './style'

const Props = ({ star, title, titleS, children }) => {
    return (
        <S.ContainerProps>
            <S.Title>{title} {titleS}
                <b>{star}</b>
            </S.Title>
            {children}
        </S.ContainerProps>
    );
}

export default Props;
