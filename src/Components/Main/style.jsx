import styled from 'styled-components'

const display = {
    caixa: 'flex',
    align: 'center',
    justifySame: 'space-evenly',
    justifyAround: 'space-around',
    justifyEnd: 'flex-end',
    direction: 'column',
}

export const ContainerMain = styled.main`
    display:${display.caixa};
    justify-content:${display.justifyAround};
    align-items:${display.align};
    height:74vh;
   

`

export const BoxImg = styled.figure`
    position:relative;
    display:${display.caixa};
    justify-content:${display.align};
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
   width:40%;
   height:70%;
   display:${display.caixa};
   flex-direction:${display.direction};
   justify-content:${display.justifyMax};
    @media(min-width:1600px) {
      height:50%;

    }
   
     p{  
      font-size:1.1rem;
      font-weight:400;
        @media(min-width:1600px) {
           font-size:1.3rem;
         }
    }

   button{
        border-radius:35px;
        border:none;
        height:5vh;
        width:24%;
        background-color:#008000;
        margin-top:2vh;
        color:#FFF;  
        cursor: pointer; 
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
