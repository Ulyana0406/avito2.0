import React from "react";
import * as S from "./Advertisement-styles";
import { useNavigate } from "react-router-dom";
import { dateFormat, priceFormat } from "../../usefulFunctions";
import { useSelector } from "react-redux";

function Advertisement({ images, title, price, city, released, id, userId }) {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

  //4. переключение фотографий
  console.log()
  return (
    <S.Item onClick={() => {
      localStorage.setItem("postId", JSON.stringify(id))
      if (user?.id === userId){
        navigate(`/my_ad`)
      } else {navigate(`/advertisement`)}      
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