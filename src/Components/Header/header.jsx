import { useState, useEffect, useRef } from 'react';
import Logo from '../../Assets/logo.png'
import Moon from '../../Assets/moon-regular.svg'
import Sun from '../../Assets/sun-regular.svg'
import Menu from './menu';
import * as S from './style.jsx'

const Header = () => {
    const [open, setOpen] = useState(localStorage.getItem(false))


    return (
        <S.ContainerHeader>
            <S.BoxLogo>
                <img src={Logo} alt='logo starbucks' />
            </S.BoxLogo>
            <Menu home='Home' menu='Menu' news="what's new" contact='Contact'>
                <S.BoxMode color={open === false ? '##fffafa' : "#303030"}>
                    <img onClick={() => {setOpen(!open)}} src={open === false ? Sun : Moon} alt='' />
                </S.BoxMode>
            </Menu>
        </S.ContainerHeader>
    );
}

export default Header;
