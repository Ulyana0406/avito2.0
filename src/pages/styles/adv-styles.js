import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
`;
export const MainContainer = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  padding: 0px 10px 79px;
`;
export const MainArtic = styled.div`
  max-width: 1178px;
  padding: 0 0 70px;
  margin: 0 auto;
  padding: 0 5px 70px;
`;
export const ArticContent = styled.div`
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
export const ArticLeft = styled.div`
  max-width: 480px;
  margin-right: 54px;
`;
export const ArticFillImg = styled.div`
  width: 100%;
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
`;
export const ArticImgBlock = styled.div`
  width: 490px;
  height: 480px;
  background-color: #f0f0f0;
  margin: 0 5px;
`;
export const BigImage = styled.img`
  width: 490px;
  height: 480px;
`;
export const ArticImgBar = styled.div`
  margin-top: 30px;
  width: 504px;
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
  -webkit-box-pack: left;
  -ms-flex-pack: left;
  justify-content: left;
  overflow: hidden;
  margin-left: -5px;
`;
export const ArticImgBarDiv = styled.div`
  width: 88px;
  min-width: 88px;
  height: 88px;
  background-color: #f0f0f0;
  border: 2px solid #f0f0f0;
  margin: 0 5px;
`;
export const ArticImgBarDivPicture = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
`;
export const ArticRight = styled.div`
  max-width: 621px;
`;
export const ArticBlock = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`;
export const ArticTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 32px;
`;
export const ArticInfo = styled.div`
  margin-bottom: 34px;
`;
export const ArticDate = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;
  margin-bottom: 4px;
`;
export const ArticCity = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;
  margin-bottom: 4px;
`;
export const ArticLink = styled.a`
  font-size: 16px;
  line-height: 21px;
  color: #009ee4;
`;
export const ArticPrice = styled.p`
  font-size: 28px;
  line-height: 39px;
  font-weight: 700;
  margin-bottom: 20px;
`;
export const ArticButton = styled.button`
  background-color: #009ee4;
  border-radius: 6px;
  border: 1px solid #009ee4;
  width: 214px;
  height: 62px;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  color: #ffffff;
  font-family: "Roboto", sans-serif;
  &:hover {
    background-color: #0080c1;
  }
`;
export const ArticButtonSpan = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 400;
`;
export const ArticleAuthor = styled.div`
  margin-top: 34px;
  margin-bottom: 20px;
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
  width: 345px;
  &:hover{
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.25);
    border-radius: 60px;
  }
`;
export const AuthorImg = styled.div`
  width: 40px;
  height: 40px;
  background-color: #f0f0f0;
  border-radius: 50%;
  margin-top: 30px;
`;
export const AuthorImgPicture = styled.img`
  width: 100%;
  height: auto;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
  border-radius: 30px;
`;
export const AuthorContent = styled.div`
  margin-left: 12px;
`;
export const AuthorName = styled.p`
  font-size: 20px;
  line-height: 26px;
  font-weight: 600;
  color: #009ee4;
`;
export const AuthorAbout = styled.p`
  font-size: 16px;
  line-height: 32px;
  color: #5f5f5f;
`;
export const MainContainerBlock = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  padding: 0px 5px;
`;
export const MainTitle = styled.h3`
  margin-bottom: 32px;
  padding: 0 5px;
  font-size: 32px;
`;
export const MainContent = styled.div`
  max-width: 792px;
  width: 100%;
  padding: 0 5px 117px;
`;
export const MainText = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #000000;
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
export const ModalAddReviewForm = styled.form`
  margin-top: 5px;
  margin-bottom: 15px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  width: 100%;
`;
export const ModalAddReviewNewArtBlock = styled.div`
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  margin-bottom: 14px;
`;
export const ModalAddReviewlabel = styled.label`
  margin-bottom: 14px;
  font-size: 16px;
  line-height: 32px;
  font-weight: 600;
  color: #000000;
`;
export const ModalAddReviewTextear = styled.textarea`
  font-family: 'Roboto', sans-serif;
  padding: 10px 19px;
  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  font-size: 16px;
  line-height: 1;
  width: 550px;
  height: 100px;
  max-height: 100px;
`;
export const ModalAddReviewButton = styled.button`
  width: 181px;
  height: 50px;
  background-color: #009EE4;
  border: 1px solid #D9D9D9;
  border-radius: 6px;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
  &:hover {
    background-color: #0080C1;
  }
`;
export const ModalAddReviewButtonDisabled = styled.button`
  width: 181px;
  height: 50px;
  background: #D9D9D9;
  border: 1px solid #D9D9D9;
  border-radius: 6px;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
`;
export const ModalReviews = styled.div`
  width: 550px;
  height: 495px;
`;