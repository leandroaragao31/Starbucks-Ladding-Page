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
    border:solid;

`
export const BoxLogo = styled.figure`
    width:25%;

    img{
        padding:2%;
    }
`

export const ContainerMenu = styled.nav`
    width:30%;
    font-family: 'Poppins', sans-serif;
    font-weight:400;

ul{
    display:${display.caixa};
    justify-content:${display.justifyMax};
    align-items:${display.align}
}

li{
    width:20%;
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
    background-color:${props => props.color};

    img{
        width:50%;
        cursor:pointer;
    }

`