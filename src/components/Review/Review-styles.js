import { styled } from "styled-components";

export const Review= styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  margin: 15px 0;
`;
export const ReviewLeft= styled.div`
  margin-right: 12px;
`;
export const ReviewItem= styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
  -webkit-box-align: start;
      -ms-flex-align: start;
          align-items: flex-start;
  -webkit-box-pack: start;
      -ms-flex-pack: start;
          justify-content: flex-start;
`;
export const ReviewImg= styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #F0F0F0;
`;
export const ReviewImgPicture= styled.img`
  display: block;
  width: 100%;
  height: auto;
  -o-object-fit: cover;
    object-fit: cover;
`;
export const ReviewRight= styled.div`
  display: block;
  margin-bottom: 25px;
`;
export const ReviewName= styled.div`
  margin-bottom: 12px;
  font-weight: 600;
  font-size: 16px;
  line-height: 32px;
  color: #000000;
`;
export const ReviewNameSpan= styled.span`
  margin-left: 10px;
  color: #5F5F5F;
`;
export const ReviewTitle= styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 32px;
  color: #000000;
`;
export const ReviewText= styled.div`
  font-size: 16px;
  line-height: 32px;
  color: #000000;
`;