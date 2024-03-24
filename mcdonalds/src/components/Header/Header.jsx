import React from "react";
import logo from "../../assets/logo.png";
import cell1 from "../../assets/cell1.png";
import cell2 from "../../assets/cell2.png";

import * as S from "./header_styled";

export default function Header() {
  return (
    <S.Header>
        <img className="logo" src={logo} alt="Logo McDonald's" />

        <section>
            <div className="app">
                <img src={cell1} alt="Celular" />
                <h3>Baixe o App</h3>
            </div>

            <div className="mequi">
                <h3>Peça seu Méqui</h3>
                <img src={cell2} alt="Celular" />
            </div>
        </section>
    </S.Header>
  )
}
