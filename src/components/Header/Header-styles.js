import { styled } from "styled-components";

export const Header = styled.header`
  background-color: #009ee4;
`;
export const HeaderNav = styled.nav`
  max-width: 1178px;
  margin: 0 auto;
  padding: 0 10px;
  height: 79px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: end;
  gap: 10px;
`;
export const HeaderBtnMainEnter = styled.button`
  width: 224px;
  height: 40px;
  border: 1px solid #ffffff;
  border-radius: 6px;
  background-color: transparent;
  color: #ffffff;
  font-size: 16px;
  line-height: 1;
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid #ffffff;
  }
`;

export const ModalHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;
export const ModalHeaderTitle = styled.h1``;
export const ModalHeaderClose = styled.img`
  width: 30px;
  height: 30px;
  margin-top: 30px;
`;
export const ModalTitle = styled.div``;
export const ModalTitleHeader = styled.span`
  color: #000000;
  font-size: 16px;
`;
export const ModalTitleInput = styled.input`
  width: 590px;
  height: 50px;
  border-radius: 6px;
  border: 1px solid #00000033;
  font-size: 16px;
  padding-left: 15px;
`;
export const ModalDescription = styled.div`
  margin-top: 30px;
`;
export const ModalDescritionHeader = styled.span`
  color: #000000;
  font-size: 16px;
`;
export const ModalDescriptionInput = styled.textarea`
  width: 590px;
  height: 200px;
  border-radius: 6px;
  border: 1px solid #00000033;
  font-size: 16px;
  padding-left: 15px;
`;
export const ModalPhotos = styled.div`
  margin-top: 30px;
`;
export const ModalFormNewArtP = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  margin-bottom: 10px;
`;
export const ModalFormNewArtSpan = styled.span`
  margin-left: 10px;
  color: rgba(0, 0, 0, 0.3);
`;
export const ModalAddPhotosBar = styled.div`
  width: 500px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: start;
  margin: 0px -5px 10px;
  overflow: hidden;
`;
export const ModalAddPhotos = styled.div`
  width: 500px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-bottom: 10px;
  overflow: hidden;
`;
export const ModalAddForm = styled.div`
  width: 90px;
  height: 90px;
  margin-right: 10px;
  position: relative;
  z-index: 0;
`;
export const ModalAddPhotoCover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #f0f0f0;
  z-index: -1;
`;
export const ModalBlockPrice = styled.div`
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  margin-bottom: 18px;
  margin-top: 30px;
`;
export const ModalInputPrice = styled.input`
  width: 200px;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  margin-top: 4px;
  padding: 13px 19px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  ::placeholder {
    font-size: 14px;
    line-height: 21px;
    color: #000000;
  }
  &::-ms-input-placeholder {
    font-size: 14px;
    line-height: 21px;
    color: #000000;
  }
  &:-ms-input-placeholder {
    font-size: 14px;
    line-height: 21px;
    color: #000000;
  }
  &::-webkit-input-placeholder {
    font-size: 14px;
    line-height: 21px;
    color: #000000;
  }
`;
export const ModalInputPriceCover = styled.div`
  width: 24px;
  height: 24px;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  position: absolute;
  bottom: 13px;
  left: 170px;
  z-index: 0;
  background-color: #FFFFFF;
  width: 21px;
  height: 21px;
  font-size: 14px;
  line-height: 21px;
  bottom: 9px;
  left: auto;
  right: 18px;
  &::after {
    content: "\A0 \20BD";
    width: 24px;
    height: 24px;
    position: absolute;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    z-index: 2;
    font-size: 14px;
    line-height: 21px;
  }
`;
export const ModalPublishButton = styled.button`
  margin-top: 10px;
  width: 181px;
  height: 46px;
  border-radius: 6px;
  border: 1px solid #D9D9D9;
  background-color: #009EE4;
  color: #FFFFFF;
  &:hover {
    background-color: #0080C1;
  }
`;