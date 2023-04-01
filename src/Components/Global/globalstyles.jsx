import { createGlobalStyle } from "styled-components";

const primaryColor = {
    background:'#fffafa',
    color:'#000'
}

const secudaryColor ={
    background:'#036635',
    color:'#FFF'
}


 const Global = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    list-style:none;
  }

  body{
    background-color:${primaryColor.background};
    color:${primaryColor.color}
  }
`;

export default Global;