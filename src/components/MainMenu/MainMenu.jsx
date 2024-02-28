import React from "react";
import * as S from "./MainMenu-styles"

function MainMenu(){
    return(
    <S.MainMenu>
        <S.MenuLogoLink to="/">
            <S.MenuLogoIMG src="/img/logo.png" alt="logo" />
        </S.MenuLogoLink>
        <S.MenuBtn onClick={() => window.location.href="/"}>
            Вернуться на&nbsp;главную
        </S.MenuBtn>
    </S.MainMenu>
    )
}
export default MainMenu;