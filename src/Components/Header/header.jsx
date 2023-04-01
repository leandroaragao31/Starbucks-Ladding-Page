import { useState, useEffect, useRef } from 'react';
import Logo from '../../Assets/logo.png'
import Moon from '../../Assets/moon-regular.svg'
import Sun from '../../Assets/sun-regular.svg'
import Global from '../Global/globalstyles';
import Menu from './menu';
import * as S from './style.jsx'

const primaryColor = {
    background: '#fffafa',
    color: '#000'
}

const secudaryColor = {
    background: '#036635',
    color: '#FFF'
}

const Header = () => {
    const [open, setOpen] = useState(false)
    const backRef = useRef(null)

    useEffect(() => {
        if (open === false) {
            document.body.style.backgroundColor = `${secudaryColor.background}`
            document.body.style.color = `${secudaryColor.color}`
        } else {
            document.body.style.backgroundColor = `${primaryColor.background}`
            document.body.style.color = `${primaryColor.color}`
        }
    }, [open])




    return (
        <S.ContainerHeader>
            <S.BoxLogo>
                <img src={Logo} alt='logo starbucks' />
            </S.BoxLogo>
            <div style={{display:'flex', width:'30%', justifyContent:'space-evenly', alignItems:'center'}}>
                <Menu home='Home' menu='Menu' news="what's new" contact='Contact'>

                </Menu>
                <S.BoxMode color={open}>
                    <img onClick={() => { setOpen(!open) }} src={open === false ? Sun : Moon} alt='' />
                </S.BoxMode>
            </div>
        </S.ContainerHeader>
    );
}

export default Header;
