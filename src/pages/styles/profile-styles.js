import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    margin: 0 auto;
    background-color: #FFFFFF;
`;
export const MainContainer = styled.div`
    max-width: 1178px;
    margin: 0 auto;
    padding: 0px 10px 79px;
`;
export const MainHeader = styled.h2`
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 42px;
    color: #000000;
    margin-bottom: 30px;
`;
export const MainProfile = styled.div`
    width: 100%;
    padding: 0 0 70px;
`;
export const ProfileContent = styled.div`
    max-width: 834px;
`;
export const ProfileTitle = styled.h3`
    margin-bottom: 20px;
`;
export const ProfileSettings = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: top;
        -ms-flex-align: top;
            align-items: top;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
`;
export const SettingsLeft = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    margin-right: 43px;
`;
export const SettingsImg = styled.div`
    width: 170px;
    height: 170px;
    border-radius: 50%;
    background-color: #F0F0F0;
`;
export const SettingImgLink = styled.a``;
export const SettingImgPhoto = styled.img`
    width: 170px;
    height: 170px;
    border-radius: 50%;
    background-color: #F0F0F0;
`;
export const SettingsChangePhoto = styled.a`
    margin-top: 10px;
    margin-bottom: 30px;
    text-decoration: none;
    font-size: 16px;
    line-height: 24px;
    color: #009EE4;
`;
export const SettingsRight = styled.div`
    width: 630px;
`;
export const SettingsForm = styled.form`
    width: 708px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
`;
export const SettingsDiv = styled.div`
    display: inline-block;
    margin: 0 7px 20px;
`;
export const SettingsLabel = styled.label`
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    color: #C4C4C4;
    margin-bottom: 4px;
    display: block;
`;
const inputsOption = `
    background-color: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    padding: 13px 19px;
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
`
export const SettingsOption = styled.input`
    width: 300px;
    ${inputsOption}
`;
export const SettingsOptionPhone = styled.input`
    width: 656px;
    ${inputsOption}
`
export const SettingsBtn = styled.button`
    font-size: 16px;
    line-height: 1;
    color: #FFFFFF;
    width: 154px;
    height: 50px;
    margin: 10px 7px 0;
    background-color: #009EE4;
    border-radius: 6px;
    border: 1px solid #009EE4;
    &:hover {
        background-color: #0080C1;
    }
`;
export const MainTitle = styled.h3`
    margin-bottom: 20px;
    font-size: 32px;
    line-height: 70px;
    font-weight: 500;
    color: rgb(0, 0, 0);
`;
export const MainContent = styled.h2`
    width: 100%;
    margin: 0 auto;
`;
export const MainCards = styled.div`
    max-width: 1158px;
    width: 100%;
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: (270px)[4];
        grid-template-columns: repeat(4, 270px);
    grid-auto-rows: 441px;
    grid-gap: 40px 26px;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    overflow-y: auto;
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
export const Item = styled.div`
    margin: 0;
`;
export const Adv = styled.div`
    width: 270px;
    height: 441px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
`;
export const AdvImg = styled.div`
    width: 270px;
    height: 270px;
    background-color: #F0F0F0;
`;
export const AdvImgLink = styled.a``;
export const AdvPhoto = styled.img``;
export const AdvContent = styled.div``;
export const AdvContentLink = styled.a``;
export const AdvContentTitle = styled.h3`
    height: 52px;
    font-size: 22px;
    font-weight: 500;
    line-height: 26px;
    color: #009EE4;
    margin-bottom: 10px;
    margin-top: 20px;
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
    color: #5F5F5F;
    margin-bottom: 4px;
`;
export const AdvContentDate = styled.p`
    font-size: 16px;
    line-height: 21px;
    color: #5F5F5F;
`;