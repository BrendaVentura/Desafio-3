import { useState } from "react";
import bigmac from "../../assets/bigmac.png";
import batata from "../../assets/batata.png";
import sorvete from "../../assets/sorvete.png";

import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import card3 from "../../assets/card3.png";

import * as S from "./main_styled"; 

import Card from "./Card";

export default function Main() {

  const [item, setItem] = useState("");
  const [preco, setPreco] = useState("");

  const Bigmac = () => {
    setItem("Big Mac");
    setPreco("R$ 24,00");
  }

  const Batata = () => {
    setItem("McFritas Pequena");
    setPreco("R$ 9,50");
  }

  const Sorvete = () => {
    setItem("Casquinha Baunilha");
    setPreco("R$ 3,99");
  }





  return (
    <main>
      <S.SectionUm>
        <div>
          <img src={bigmac} alt="Big Mac" />
          <h1>
            BATEU AQUELA <span>#FOME</span> DE <span>MÉQUI?</span>
          </h1>
        </div>

        <figure>
            <img onClick={Bigmac} className="bigmac" src={bigmac} alt="BigMac" />
            <img onClick={Batata} className="batata" src={batata} alt="Batata Frita" />         
            <img onClick={Sorvete} className="sorvete" src={sorvete} alt="Sorvete" />
        </figure>

        <h3>{item} {preco}</h3>

      </S.SectionUm>

      <S.SectionDois>
        <h2>Promoção</h2>
        <div className="container">
          <Card imagem={card1} texto={"Qua tal um #MéquiNoSofá?"} />
          <Card imagem={card2} texto={"Venha conhecer nossa nova loja"} />
          <Card imagem={card3} texto={"Confira as medidas que o Méqui adotou!"} />
        </div>
      </S.SectionDois>
    </main>
  );
}
