import styled from "styled-components";
const  display = {
    caixa:'flex',
    align:'center',
    justifySame:'space-evenly',
    justifyAround:'space-around',
    justifyMax:'space-between',
    justifyEnd:'flex-end',
}

export const ContainerFooter = styled.footer`
    display:${display.caixa};
    justify-content:${display.justifySame};
    align-items:${display.align};
    margin-left:6%;
    width:19%;   
    height:12vh;

  


`

export const BoxImg = styled.figure`
    display:flex;
    justify-content:center;
    width:18%;
    height:7vh;
    border-radius:50%;
    border:solid 1px;
    cursor:pointer;
    background-color:${props => props.backFig};
        &:hover{
            background-color:#008000;
        }
        
        .face{
            width:30%;
        }

        .twitter{
        width:50%;
        }

        .insta{
        width:42%;
        }
`