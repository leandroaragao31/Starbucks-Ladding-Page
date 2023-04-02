import styled from 'styled-components'

const  display = {
    caixa:'flex',
    align:'center',
    justify:'center',
    justifySame:'space-evenly',
    justifyAround:'space-around',
    justifyMax:'space-between',
    justifyEnd:'flex-end',
    direction:'column',
    clean:'wrap'
}

export const ContainerHeader = styled.header`
    display:${display.caixa};
    justify-content:${display.justifyAround};
    align-items:${display.align};
    height:12vh;

`
export const BoxLogo = styled.figure`
    width:35%;

    img{
        width:15%;
        margin-top:1.5%
    }
`

export const ContainerMenu = styled.nav`
    width:90%;
    font-weight:600;


ul{
    display:${display.caixa};
    justify-content:${display.justifySame};
    align-items:${display.align}
}

li{
    text-align:center;
    cursor:pointer;
}
`

export const BoxMode = styled.figure` 
    display:${display.caixa};
    justify-content:${display.justify};
    border-radius:50%;
    width:10%;
    height:6vh;
    background-color:${props => props.color === false ? "#fffafa" : '#303030'};

    img{
        width:50%;
        cursor:pointer;
    }

`