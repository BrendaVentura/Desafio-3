import styled from "styled-components";

export const SectionUm = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-family: sans-serif;
  background-color: #ffc72c;
  padding: 2rem;
  height: 80vh;

  h1 {
    width: 35vw;
    color: #ffffff;
    font-size: 3rem;
  }

  span {
    color: #db0007;
  }

  div {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 70vw;
  }

  img {
    width: 20vw;
  }

  figure {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 28vw;
  }

  .bigmac {
    height: 13vh;
    width: 7vw;
  }

  .batata {
    height: 18vhw;
    width: 6vw;
  }

  .sorvete {
    height: 15vh;
    width: 6vw;
  }
  

`;

export const SectionDois = styled.section`
  background-color: #feb706;
  text-align: center;


  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    height: 70vh;
  }

  h2 {
    color: #ffffff;
    padding-top: 3rem;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 22vw;
  height: 50vh;
  background-color: #ffffff;
  border-radius: 12px;


  img {
    width: 100%;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffbc0d;
    font-size: 20px;
    width: 15vw;
    height: 8vh;
    border-radius: 10px;
    border: none;
    margin-bottom: 2rem;
  }
`;
