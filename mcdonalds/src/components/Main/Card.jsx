import * as S from "./main_styled";

export default function Card({ imagem, texto, }) {
    return (
      <S.Card>
        <img src={imagem} alt="" />
        <h3>{texto}</h3>
       <button>Clique aqui</button>
      </S.Card>
    );
  }