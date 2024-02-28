import React from "react";
import * as S from "./Review-styles";

function Review({avatarPicture, name, date, comment}){
    return(
    <S.Review>
        <S.ReviewItem>
            <S.ReviewLeft>
                <S.ReviewImg>
                    <S.ReviewImgPicture src={`http://localhost:8090/${avatarPicture}`} alt=""/>
                </S.ReviewImg>
            </S.ReviewLeft>
            <S.ReviewRight>
                <S.ReviewName>{name} <S.ReviewNameSpan>{date}</S.ReviewNameSpan></S.ReviewName>
                <S.ReviewTitle>Комментарий</S.ReviewTitle>
                <S.ReviewText>{comment}</S.ReviewText>
            </S.ReviewRight>
        </S.ReviewItem>
    </S.Review>
    )
}
export default Review;