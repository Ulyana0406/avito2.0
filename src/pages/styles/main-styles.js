import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
    width: 100%;
    margin: 0 auto;
    background-color: #FFFFFF;
`;
export const Header = styled.header`
    background-color: #009EE4;
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
`;
export const HeaderBtnMainEnter = styled.button`
    width: 224px;
    height: 40px;
    border: 1px solid #FFFFFF;
    border-radius: 6px;
    background-color: transparent;
    color: #FFFFFF;
    font-size: 16px;
    line-height: 1;
    &:hover {
        background: rgba(255, 255, 255, 0.15);
        border: 1px solid #FFFFFF;
      }
`;
export const MainSearch = styled.div`
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    padding: 11px 0;
    max-width: 1240px;
    margin: 0 auto;
    padding: 31px 10px 0px;
`;
export const SearchLogoLink = styled(NavLink)``;
export const SearchLogoLinkMob = styled(NavLink)``;
export const SearchLogoIMG = styled.img`
    width: 54px;
    height: auto;
    margin-top: 35px;
`;
export const SearchLogoIMGMob = styled.img`
    display: none;
`;
export const SearchForm = styled.form`
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    padding: 11px 0;
    max-width: 1178px;
    margin: 0 auto;
    padding: 31px 70px 0px;
`;
export const SearchText = styled.input`
    width: 100%;
    height: 50px;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    background-color: transparent;
    padding: 13px 19px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    &::-webkit-input-placeholder {
        background-color: transparent;
        color: rgba(0, 0, 0, 0.3);
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
    }
    &:-ms-input-placeholder {
        background-color: transparent;
        color: rgba(0, 0, 0, 0.3);
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
    }
    &::-ms-input-placeholder {
        background-color: transparent;
        color: rgba(0, 0, 0, 0.3);
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
    }
    &::placeholder {
        background-color: transparent;
        color: rgba(0, 0, 0, 0.3);
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
    }
`;
export const SearchTextMob = styled.input`
    display: none;
`;
export const SearchBtn = styled.button`
    margin-left: 10px;
    width: 158px;
    height: 50px;
    background-color: #009EE4;
    border: 1px solid #009EE4;
    border-radius: 6px;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    &:hover {
        background-color: #0080C1;
    }
`;
export const MainContainer = styled.div`
    max-width: 1178px;
    margin: 0 auto;
    padding: 52px 10px 37px;
`;
export const MainTitle = styled.h2`
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 42px;
    color: #000000;
    margin-bottom: 30px;
`;
export const MainContent = styled.h2`
    width: 100%;
    margin: 0 auto;
`;
export const MainCards = styled.div`
    max-width: 1175px;
    width: 100%;
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: (270px)[4];
        grid-template-columns: repeat(4, 270px);
    grid-auto-rows: 441px;
    grid-gap: 80px 26px;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    scrollbar-color: #FFFFFF #2E2E2E;
    scrollbar-width: thin;
    scrollbar-width: 0px;
    height: 922px;
    &::-webkit-scrollbar {
        width: 0px;
        background-color: #009EE4;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #0080C1;
        border-radius: 3px;
    }
`;
