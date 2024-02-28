import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

export const MainMenu = styled.div`
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: start;
        -ms-flex-pack: start;
            justify-content: start;
    padding: 11px 0;
    width: 100%;
    padding: 31px 10px 64px;
`;
export const MenuLogoLink = styled(NavLink)`
    width: 54;
    height: 50px;
`;
export const MenuLogoIMG = styled.img`
    width: 54px;
    height: auto;
`;
export const MenuBtn = styled.button`
    margin-left: 60px;
    width: 241px;
    height: 50px;
    background-color: #009EE4;
    border: 1px solid #009EE4;
    border-radius: 6px;
    font-size: 16px;
    line-height: 1;
    color: #FFFFFF;
    &:hover {
        background-color: #0080C1;
    }
`;