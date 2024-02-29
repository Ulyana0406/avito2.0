// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import * as S from "./styles/adv-styles";
import Header from "../components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import MainMenu from "../components/MainMenu/MainMenu";
import { addComments, getAd, getComments } from "../api/api";
import { dateFormat, priceFormat, sellsFrom } from "../usefulFunctions";
import { useNavigate } from "react-router-dom";
import { setToken } from "../store/slices/userSlice";

export const Advertisement = () => {
  const [ad, setAd] = useState(null);
  const [show, setShow] = useState(false);
  const user = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.user.token);
  //const [comments, setComments] = useState([]);
  const navigate = useNavigate();
  const [modalIsOpenReview, setModalIsOpenReview] = useState(false);
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const [comments, setComments] = useState([]);

  const [active, setActive] = useState(0);
  const [swiper, setSwiper] = useState(null);
  useEffect(() => {
    getAd(JSON.parse(localStorage.getItem("postId"))).then((post) => {
      setAd(post);
      console.log(ad);
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
        <S.ModalHeaderClose
          src="/img/close_modal.png"
          alt="close"
          onClick={closeModalReview}
        />
      </S.ModalHeader>

      <S.ModalAddReviewForm>
        <S.ModalAddReviewNewArtBlock>
          <S.ModalAddReviewlabel>Добавить отзыв</S.ModalAddReviewlabel>
          <S.ModalAddReviewTextear
            cols="auto"
            rows="5"
            placeholder="Введите описание"
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          ></S.ModalAddReviewTextear>
        </S.ModalAddReviewNewArtBlock>

        {user ? (
          <S.ModalAddReviewButton
            onClick={(event) => {
              // Удалить потом
              event.preventDefault();
              //
              addComments({ id: ad.id, text: description, token: token }).then(
                (item) => {
                  if (item?.text !== description) {
                    dispatch(setToken(item));
                    addComments({
                      id: ad.id,
                      text: description,
                      token: item,
                    }).then(() => {
                      getComments({ id: ad.id, token: token }).then(
                        (response) => {
                          setComments(response);
                        }
                      );
                    });
                  } else {
                    getComments({ id: ad.id, token: token }).then(
                      (response) => {
                        setComments(response);
                      }
                    );
                  }
                }
              );
            }}
          >
            Опубликовать
          </S.ModalAddReviewButton>
        ) : (
          <S.ModalAddReviewButtonDisabled disabled={true}>
            Опубликовать
          </S.ModalAddReviewButtonDisabled>
        )}
      </S.ModalAddReviewForm>
      <S.ModalReviews>
        {comments.map((comment) => (
          <div key={comment.id}>
            <div>{comment.author.email}</div>
            <div>{comment.text}</div>
          </div>
        ))}
      </S.ModalReviews>
    </>
  );
  return (
    <S.Container>
      <Header page={"adv"} />
      <main>
        <S.MainContainer>
          <MainMenu />
        </S.MainContainer>
        <S.MainArtic>
          <S.ArticContent>
            <S.ArticLeft>
              <S.ArticFillImg>
                <S.ArticImgBlock>
                  <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    slidesPerView={1}
                    activeIndex={active}
                    onSwiper={setSwiper}
                    style={{ zIndex: "0" }}
                  >
                    {ad?.images.length > 0 ? (
                      <SwiperSlide>
                        <S.BigImage
                          src={`http://localhost:8090/${ad?.images[0]?.url}`}
                          alt=""
                        />
                      </SwiperSlide>
                    ) : null}
                    {ad?.images.length > 1 ? (
                      <SwiperSlide>
                        <S.BigImage
                          src={`http://localhost:8090/${ad?.images[1]?.url}`}
                          alt=""
                        />
                      </SwiperSlide>
                    ) : null}
                    {ad?.images.length > 2 ? (
                      <SwiperSlide>
                        <S.BigImage
                          src={`http://localhost:8090/${ad?.images[2]?.url}`}
                          alt=""
                        />
                      </SwiperSlide>
                    ) : null}
                    {ad?.images.length > 3 ? (
                      <SwiperSlide>
                        <S.BigImage
                          src={`http://localhost:8090/${ad?.images[2]?.url}`}
                          alt=""
                        />
                      </SwiperSlide>
                    ) : null}
                    {ad?.images.length > 4 ? (
                      <SwiperSlide>
                        <S.BigImage
                          src={`http://localhost:8090/${ad?.images[2]?.url}`}
                          alt=""
                        />
                      </SwiperSlide>
                    ) : null}
                    {/* <SwiperSlide>
                      <S.BigImage
                        src={`http://localhost:8090/${ad?.images[1]?.url}`}
                        alt=""
                      />
                    </SwiperSlide> */}
                    <S.ArticImgBar>
                      {ad?.images.length > 0 ? (
                        <S.ArticImgBarDiv
                          onClick={() => {
                            console.log(swiper);
                            swiper.slideTo(0);
                            setActive(0);
                          }}
                        >
                          <S.ArticImgBarDivPicture
                            src={`http://localhost:8090/${ad?.images[0]?.url}`}
                          />
                        </S.ArticImgBarDiv>
                      ) : null}
                      {ad?.images.length > 1 ? (
                        <S.ArticImgBarDiv
                          onClick={() => {
                            swiper.slideTo(1);
                            setActive(1);
                          }}
                        >
                          <S.ArticImgBarDivPicture
                            src={`http://localhost:8090/${ad?.images[1]?.url}`}
                          />
                        </S.ArticImgBarDiv>
                      ) : null}
                      {ad?.images.length > 2 ? (
                        <S.ArticImgBarDiv
                          onClick={() => {
                            swiper.slideTo(2);
                            setActive(2);
                          }}
                        >
                          <S.ArticImgBarDivPicture
                            src={`http://localhost:8090/${ad?.images[2]?.url}`}
                          />
                        </S.ArticImgBarDiv>
                      ) : null}
                      {ad?.images.length > 3 ? (
                        <S.ArticImgBarDiv
                          onClick={() => {
                            setActive(3);
                          }}
                        >
                          <S.ArticImgBarDivPicture
                            src={`http://localhost:8090/${ad?.images[3]?.url}`}
                          />
                        </S.ArticImgBarDiv>
                      ) : null}
                      {ad?.images.length > 4 ? (
                        <S.ArticImgBarDiv
                          onClick={() => {
                            setActive(4);
                          }}
                        >
                          <S.ArticImgBarDivPicture
                            src={`http://localhost:8090/${ad?.images[4]?.url}`}
                          />
                        </S.ArticImgBarDiv>
                      ) : null}
                    </S.ArticImgBar>
                  </Swiper>
                </S.ArticImgBlock>
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
                  <S.ArticLink
                    href="#"
                    onClick={() => {
                      openModalReview();
                      getComments({ id: ad.id, token: token }).then(
                        (response) => {
                          setComments(response);
                        }
                      );
                    }}
                  >
                    Отзывы
                    {/* Выводить отзывы */}
                  </S.ArticLink>
                  <Modal
                    isOpen={modalIsOpenReview}
                    onRequestClose={closeModalReview}
                    style={{
                      content: {
                        width: "600px",
                        height: "800px",
                        inset: "unset",
                      },
                      overlay: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      },
                    }}
                  >
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
                <S.ArticleAuthor
                  onClick={() => {
                    localStorage.setItem("userId", JSON.stringify(ad.user.id));
                    navigate(`../seller`);
                  }}
                >
                  <S.AuthorImg>
                    <S.AuthorImgPicture
                      src={`http://localhost:8090/${ad?.user.avatar}`}
                      alt=""
                    />
                  </S.AuthorImg>
                  <S.AuthorContent>
                    <S.AuthorName>{ad?.user.name}</S.AuthorName>
                    <S.AuthorAbout>
                      {ad ? sellsFrom(ad?.user.sells_from) : null}
                    </S.AuthorAbout>
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
