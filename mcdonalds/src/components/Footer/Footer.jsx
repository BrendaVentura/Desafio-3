import React from "react";
import logo from "../../assets/logo.png";
import playStore from "../../assets/playStore.png";
import appStore from "../../assets/appStore.png";

import * as S from "./footer_styled";

export default function Footer() {
  return (
    <S.Footer>
      <div>
      <img src={logo} alt="Logo McDonalds" />
      <p>© McDonald's 2024</p>
      </div>

      <figure>
        <a href="https://play.google.com/store/apps/details?id=com.mcdo.mcdonalds&hl=pt_BR" target="_blank"><img src={playStore} alt="Google Play" /></a>
        <a href="https://apps.apple.com/br/app/mcdonalds-cupons-e-delivery/id1114009187" target="_blank"><img src={appStore} alt="Apple Store" /></a> 
      </figure>
    </S.Footer>
  );
}
