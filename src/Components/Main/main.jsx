import React from 'react';
import * as S from './style'
import Props from './props';
import Coffe from '../../Assets/coffe.png'

const Main = () => {
    return (
        <S.ContainerMain>
            <Props title="It's not just Coffe" titleS="It's" star='Starbucks'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu tristique tortor. Nullam consectetur lacinia congue. Phasellus quis risus nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac nibh diam. Integer lobortis, ipsum.</p>
                <button>Learn More</button>
            </Props>
            <S.BoxImg>
                <img  src={Coffe} alt='Frappuchino' />
            </S.BoxImg>
        </S.ContainerMain>
    );
}

export default Main;
