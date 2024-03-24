import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;

    }

`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 10px;
  height: 10vh;
  margin: 1rem;

    
  .logo {
    width: 4vw;
  }
  
  img {
    width: 2vw;
    padding: 2px;
  }

  .app {
    display: flex;
    align-items: center;
  }

  h3 {
    font-weight: 400;
  }

  section {
    display: flex;
    justify-content: space-between;
    height: 7vh;
    width: 19vw;
   
  }
  .mequi {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #FFC72C;
    border-radius: 4px;
    width: 10vw;
    
    
  }

  .mequi h3 {
    font-weight: bold;
  }

`;
