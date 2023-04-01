import React from 'react';
import * as S from './style.jsx'

const Menu = ({home, menu, news, contact, children}) => {
  return (
        <S.ContainerMenu>
            <ul>
                <li>{home}</li>
                <li>{menu}</li>
                <li>{news}</li>
                <li>{contact}</li>
                {children}
            </ul>
        </S.ContainerMenu>
    );
}

export default Menu;
