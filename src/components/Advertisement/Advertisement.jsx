import React from "react";
import * as S from "./Advertisement-styles";
import { useNavigate } from "react-router-dom";
import { dateFormat, priceFormat } from "../../usefulFunctions";

function Advertisement({ images, title, price, city, released, id }) {
  const navigate = useNavigate();


  //4. переключение фотографий
  console.log()
  return (
    <S.Item onClick={() => {
      localStorage.setItem("postId", JSON.stringify(id))
      navigate(`/advertisement/${id}`)
    }}>
      <S.Adv>
        <S.AdvImg>
          <S.AdvImgLink href="#">
            <S.AdvPhoto src={`http://localhost:8090/${images[0]?.url}`} />
            
          </S.AdvImgLink>
        </S.AdvImg>
        <S.AdvContent>
          <S.AdvContentLink>
            <S.AdvContentTitle>{title}</S.AdvContentTitle>
          </S.AdvContentLink>
          <S.AdvContentPrice>{priceFormat(price)} ₽</S.AdvContentPrice>
          <S.AdvContentPlace>{city}</S.AdvContentPlace>
          <S.AdvContentDate>{dateFormat(released)}</S.AdvContentDate>
        </S.AdvContent>
      </S.Adv>
    </S.Item>
  );
}
export default Advertisement;