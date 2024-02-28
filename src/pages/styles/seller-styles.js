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
export const ProfileSeller = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: top;
        -ms-flex-align: top;
            align-items: top;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: flex-start;
`;
export const SellerLeft = styled.div`
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
export const SellerImg = styled.div`
    width: 170px;
    height: 170px;
    border-radius: 50%;
    background-color: #F0F0F0;
`;
export const SellerImgLink = styled.a``;
export const SellerImgPhoto = styled.img`
    width: 170px;
    height: 170px;
    border-radius: 50%;
    background-color: #F0F0F0;
    `;
export const SellerRight = styled.div`
    width: auto;
`;
export const SellerTitle = styled.h3`
    font-size: 20px;
    font-weight: 600;
    line-height: 40px;
    color: #000000;
    margin-bottom: 0px;
`;
export const SellerCity_Inf = styled.p`
    font-size: 16px;
    line-height: 21px;
    color: #5F5F5F;
    margin-bottom: 10px;
`;
export const SellerButton = styled.button`
    margin-top: 20px;
    background-color: #009EE4;
    border-radius: 6px;
    border: 1px solid #009EE4;
    width: 214px;
    height: 62px;
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;
    color: #FFFFFF;
    font-family: 'Roboto', sans-serif;
    &:hover {
        background-color: #0080C1;
    }
`;
export const SellerButtonSpan = styled.span`
    display: block;
    font-size: 14px;
    font-weight: 400;
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