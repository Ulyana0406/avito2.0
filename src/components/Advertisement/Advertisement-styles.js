import { styled } from "styled-components";

export const Item = styled.div`
  margin: 0;
`;
export const Adv = styled.div`
  width: 270px;
  height: 495px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  transition: 0.4s;
  &:hover {
    transform: scale(1.01);
  }
`;
export const AdvImg = styled.div`
  width: 270px;
  height: 270px;
  background-color: #f0f0f0;
`;
export const AdvImgLink = styled.a``;
export const AdvPhoto = styled.img`
  width: 268px;
  height: 270px;
  border: 1px solid #000000;
`;
export const AdvContent = styled.div``;
export const AdvContentLink = styled.a``;
export const AdvContentTitle = styled.h3`
  font-size: 22px;
  font-weight: 500;
  line-height: 26px;
  color: #009ee4;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const AdvContentPrice = styled.p`
  color: #000000;
  font-size: 22px;
  font-weight: 500;
  line-height: 33px;
  margin-bottom: 10px;
`;
export const AdvContentPlace = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;
  margin-bottom: 4px;
`;
export const AdvContentDate = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;
`;
