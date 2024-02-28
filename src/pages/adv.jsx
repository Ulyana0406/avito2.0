import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import * as S from "./styles/adv-styles";
import Header from "../components/Header/Header";
import MainMenu from "../components/MainMenu/MainMenu";
import { getAd } from "../api/api";
import { dateFormat, priceFormat, sellsFrom } from "../usefulFunctions";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const Advertisement = () => {
  const [ad, setAd] = useState(null);
  const [show, setShow] = useState(false);
  const user = useSelector((state) => state.user.user);
  //const [comments, setComments] = useState([]);
  const navigate = useNavigate();
  const [modalIsOpenReview, setModalIsOpenReview] = useState(false);

  useEffect(() => {
    getAd(JSON.parse(localStorage.getItem("postId"))).then((post) => {
      setAd(post);
    });
  }, []);
  //Отзывы
  const openModalReview = () => {
    setModalIsOpenReview(true);
  };

  const closeModalReview = () => {
    setModalIsOpenReview(false);
  };
  const modalContentReviews = (
    <>
    <S.ModalHeader>
      <S.ModalHeaderTitle>Отзывы о товаре</S.ModalHeaderTitle>
      <S.ModalHeaderClose src="/img/close_modal.png" alt="close" onClick={closeModalReview}/>
    </S.ModalHeader>
    <S.ModalAddReviewForm>
        <S.ModalAddReviewNewArtBlock>
            <S.ModalAddReviewlabel>Добавить отзыв</S.ModalAddReviewlabel>
            <S.ModalAddReviewTextear cols="auto" rows="5" placeholder="Введите описание"></S.ModalAddReviewTextear>
        </S.ModalAddReviewNewArtBlock>

        {user ? 
        <S.ModalAddReviewButton>Опубликовать</S.ModalAddReviewButton>
        :
        <S.ModalAddReviewButtonDisabled disabled={true}>Опубликовать</S.ModalAddReviewButtonDisabled>
        }
        
    </S.ModalAddReviewForm>
    <S.ModalReviews>

        {/**Review */}
        

    </S.ModalReviews>
    </>
);
  return (
    <S.Container>
      <Header page={"adv"}/>
      <main>
        <S.MainContainer>
          <MainMenu />
        </S.MainContainer>
        <S.MainArtic>
          <S.ArticContent>
            <S.ArticLeft>
              <S.ArticFillImg>
                <S.ArticImgBlock>
                  <S.BigImage
                    src={`http://localhost:8090/${ad?.images[0]?.url}`}
                    alt=""
                  />
                </S.ArticImgBlock>
                <S.ArticImgBar>
                  {ad?.images.length > 0 ? (
                    <S.ArticImgBarDiv>
                      <S.ArticImgBarDivPicture
                        src={`http://localhost:8090/${ad?.images[0]?.url}`}
                      />
                    </S.ArticImgBarDiv>
                  ) : null}
                  {ad?.images.length > 1 ? (
                    <S.ArticImgBarDiv>
                      <S.ArticImgBarDivPicture
                        src={`http://localhost:8090/${ad?.images[1]?.url}`}
                      />
                    </S.ArticImgBarDiv>
                  ) : null}
                  {ad?.images.length > 2 ? (
                    <S.ArticImgBarDiv>
                      <S.ArticImgBarDivPicture
                        src={`http://localhost:8090/${ad?.images[2]?.url}`}
                      />
                    </S.ArticImgBarDiv>
                  ) : null}
                  {ad?.images.length > 3 ? (
                    <S.ArticImgBarDiv>
                      <S.ArticImgBarDivPicture
                        src={`http://localhost:8090/${ad?.images[3]?.url}`}
                      />
                    </S.ArticImgBarDiv>
                  ) : null}
                  {ad?.images.length > 4 ? (
                    <S.ArticImgBarDiv>
                      <S.ArticImgBarDivPicture
                        src={`http://localhost:8090/${ad?.images[4]?.url}`}
                      />
                    </S.ArticImgBarDiv>
                  ) : null}
                </S.ArticImgBar>
              </S.ArticFillImg>
            </S.ArticLeft>
            <S.ArticRight>
              <S.ArticBlock>
                <S.ArticTitle>{ad?.title}</S.ArticTitle>
                <S.ArticInfo>
                  <S.ArticDate>
                    {ad ? dateFormat(ad.created_on) : null}
                  </S.ArticDate>
                  <S.ArticCity>{ad?.user.city}</S.ArticCity>
                  <S.ArticLink href="#" onClick={openModalReview}>
                    23 отзыва
                  </S.ArticLink>
                  <Modal isOpen={modalIsOpenReview} onRequestClose={closeModalReview} style={
                      {
                          content: {
                            width: "600px",
                            height: "800px",
                            inset: "unset"
                          },
                          overlay: {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                          }
                      }
                    }>
                      {modalContentReviews}
                    </Modal>
                </S.ArticInfo>
                <S.ArticPrice>
                  {ad ? priceFormat(ad.price) : null} ₽
                </S.ArticPrice>
                <S.ArticButton
                  onClick={() => {
                    setShow(!show);
                  }}
                >
                  {show ? `Скрыть   телефон` : `Показать    телефон`}
                  <S.ArticButtonSpan>
                    {show ? ad?.user.phone : "X XXX XXX XX XX"}
                  </S.ArticButtonSpan>
                </S.ArticButton>
                <S.ArticleAuthor onClick={() => {
                  localStorage.setItem("userId", JSON.stringify(ad.user.id))
                  navigate(`../seller`);
                  }}>
                  <S.AuthorImg>
                    <S.AuthorImgPicture
                      src={`http://localhost:8090/${ad?.user.avatar}`}
                      alt=""
                    />
                  </S.AuthorImg>
                  <S.AuthorContent>
                    <S.AuthorName>{ad?.user.name}</S.AuthorName>
                    <S.AuthorAbout>{ad ? sellsFrom(ad?.user.sells_from) : null}</S.AuthorAbout>
                  </S.AuthorContent>
                </S.ArticleAuthor>
              </S.ArticBlock>
            </S.ArticRight>
          </S.ArticContent>
        </S.MainArtic>
        <S.MainContainerBlock>
          <S.MainTitle>Описание товара</S.MainTitle>
          <S.MainContent>
            <S.MainText>{ad?.description}</S.MainText>
          </S.MainContent>
        </S.MainContainerBlock>
      </main>
    </S.Container>
  );
};
