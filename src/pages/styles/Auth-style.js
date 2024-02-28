import { styled } from "styled-components";

export const PageContainer = styled.div`
  max-width: 100%;
  height: 100vh;
  background-color: #FAFAFA;
  
`;

export const ModalForm = styled.div`
  --modal-width: 366px;
  --modal-height: 439px;

  position: absolute;
  left: calc(50% - (var(--modal-width) / 2));
  top: calc(50% - (var(--modal-height) / 2));
  box-sizing: border-box;
  width: var(--modal-width);
  min-height: var(--modal-height);
  background-color: #ffffff;
  border-radius: 12px;
  padding: 43px 47px 47px 40px;
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
-moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
`;
export const ModalLogo = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 34px;
  background-color: transparent;
`;

export const ModalLogoImage = styled.img`
  width: 220px;
  height: 35px;
`;

export const ModalInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #d0cece;
  padding: 8px 1px;

  &::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #d0cece;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  width: 278px;
  height: 52px;
  border-radius: 6px;
  border: none;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;

  &:disabled {
    background-color: #303030;
  }
`;

export const PrimaryButton = styled(Button)`
    width: 278px;
    height: 52px;
    background-color: #009EE4;
    border-radius: 6px;
    margin-top: 60px;
    margin-bottom: 20px;
    border: none;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    &:hover {
        background-color: #0080C1;
    }
    &:active {
        background-color: #0080C1;
    }
`;
export const PrimaryButtonLink = styled.a`
    width: 100%;
    height: 100%;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #FFFFFF;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
`;
export const SecondaryButton = styled(Button)`
    width: 278px;
    height: 52px;
    background-color: transparent;
    border: 1px solid #D0CECE;
    border-radius: 6px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #000000;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    &:hover {
        background-color: #F4F5F6;
    }
    &:active {
        background-color: #D9D9D9;
    }
`;
export const SecondaryButtonLink = styled.a`
    width: 100%;
    height: 100%;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #000000;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
`;

export const Error = styled.div`
  color: coral;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  margin-top: 20px;
  text-align: left;
`;