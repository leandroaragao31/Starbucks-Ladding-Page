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

export const ContainerMain = styled.main`
    display:${display.caixa};
    justify-content:${display.justifyAround};
    align-items:${display.align};
    height:45vh;
    margin-top:20vh;

`

export const BoxImg = styled.figure`
    position:relative;
    display:${display.caixa};
    justify-content:${display.justify};
    align-items:${display.align};
    border:none;
    border-radius:50%;
    background-color:#008000;
    height: 45vh;
    width:24%;
    top:10px;
    z-index:-1;
    img{
        width:22vw;
    }

`

export const ContainerProps = styled.div`
   width:38%;
   height:45vh;
   display:${display.caixa};
   flex-direction:${display.direction};
   justify-content:${display.justifyMax};
   
    p{
        text-align:left;
        font-weight:200;
    }

   button{
        border-radius:35px;
        border:none;
        height:5vh;
        width:24%;
        background-color:#008000;
        margin-top:3vh;
        color:#FFF;
   }
  
`

export const Title = styled.h2`
    font-size:3rem;
        

    b{
        font-size:3.1rem;
        padding-left:2vw;
        color:#008000;
    }
`
