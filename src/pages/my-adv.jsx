import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import * as S from "./styles/my-adv-styles";
import Header from "../components/Header/Header";
import MainMenu from "../components/MainMenu/MainMenu";
import { useDispatch, useSelector } from "react-redux";
import { deleteAd, getAd, getAllAds, updateAd } from "../api/api";
import { useNavigate } from "react-router-dom";
import { dateFormat, priceFormat, sellsFrom } from "../usefulFunctions";
import { setAllAds } from "../store/slices/adSlice";

export const MyAdvertisement = () => {
    const [modalIsOpenEdit, setModalIsOpenEdit] = useState(false);
    const [modalIsOpenReview, setModalIsOpenReview] = useState(false);
    const user = useSelector((state) => state.user.user);
    const token = useSelector((state) => state.user.token);
    const [ad, setAd] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState();
    //const [photos, setPhotos] = useState([]);
    const dispatch = useDispatch();
    //const [comments, setComments] = useState([]);
    const navigate = useNavigate();
  
    useEffect(() => {
      getAd(JSON.parse(localStorage.getItem("postId"))).then((post) => {
        setAd(post);
      });
    }, []);

    const openModalEdit = () => {
        setTitle(ad.title);
        setDescription(ad.description);
        setPrice(ad.price);
        setModalIsOpenEdit(true);
    };
  
    const closeModalEdit = () => {
      setModalIsOpenEdit(false);
    };

    const openModalReview = () => {
        setModalIsOpenReview(true);
      };
    
      const closeModalReview = () => {
        setModalIsOpenReview(false);
      };
  
    const modalContentEdit = (
      <>
      <S.ModalHeader>
          <S.ModalHeaderTitle>Редактировать объявление</S.ModalHeaderTitle>
          <S.ModalHeaderClose src="/img/close_modal.png" alt="close" onClick={closeModalEdit}/>
      </S.ModalHeader>
      <S.ModalTitle>
          <S.ModalTitleHeader>Название</S.ModalTitleHeader>
          <S.ModalTitleInput placeholder="Введите название" onChange={(event) => {setTitle(event.target.value)}} value={title}/>
      </S.ModalTitle>
      <S.ModalDescription>
          <S.ModalDescritionHeader>Описание</S.ModalDescritionHeader>
          <S.ModalDescriptionInput placeholder="Введите описание" onChange={(event) => {setDescription(event.target.value)}} value={description}/>
      </S.ModalDescription>
      <S.ModalPhotos>
          <S.ModalFormNewArtP>Фотографии товара <S.ModalFormNewArtSpan>не более 5 фотографий</S.ModalFormNewArtSpan></S.ModalFormNewArtP>
          <S.ModalAddPhotosBar>
            <S.ModalAddPhotos>
                <img src="/img/add_photo.png" alt="add_photo" />
                <S.ModalAddPhotoCover></S.ModalAddPhotoCover>
            </S.ModalAddPhotos>
            <S.ModalAddPhotos>
                <img src="/img/add_photo.png" alt="add_photo" />
                <S.ModalAddPhotoCover></S.ModalAddPhotoCover>
            </S.ModalAddPhotos>
            <S.ModalAddPhotos>
                <img src="/img/add_photo.png" alt="add_photo" />
                <S.ModalAddPhotoCover></S.ModalAddPhotoCover>
            </S.ModalAddPhotos>
            <S.ModalAddPhotos>
                <img src="/img/add_photo.png" alt="add_photo" />
                <S.ModalAddPhotoCover></S.ModalAddPhotoCover>
            </S.ModalAddPhotos>
            <S.ModalAddPhotos>
                <img src="/img/add_photo.png" alt="add_photo" />
                <S.ModalAddPhotoCover></S.ModalAddPhotoCover>
            </S.ModalAddPhotos>
          </S.ModalAddPhotosBar>
      </S.ModalPhotos>
      <S.ModalBlockPrice>
        <label for="price">Цена</label>
        <S.ModalInputPrice onChange={(event) => {setPrice(event.target.value)}} value={price}/>
        <S.ModalInputPriceCover></S.ModalInputPriceCover>
      </S.ModalBlockPrice>
      <S.ModalPublishButton onClick={() => {
        updateAd({id: ad.id, token: token, title: title, description: description, price: price}).then((item) => {
            if (item?.access_token){
                console.log("update token");
                updateAd({id: ad.id, token: token, title: ad.title, description: ad.description, price: ad.price}).then(() => {
                    getAllAds().then((ads) => {
                        dispatch(setAllAds(ads))
                        navigate(`/`)
                    })
                })
            } else {
                getAllAds().then((ads) => {
                    dispatch(setAllAds(ads))
                    navigate(`/`)
                })
            }
        })
      }}>Сохранить</S.ModalPublishButton>
      </>
    );
    
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


    return(
        <S.Container>
            <Header page={"my-adv"}/>
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
                                    <S.ArticDate>{ad ? dateFormat(ad.created_on) : null}</S.ArticDate>
                                    <S.ArticCity>{ad?.user.city}</S.ArticCity>
                                    <S.ArticLink href="#" onClick={openModalReview}>4 отзыва</S.ArticLink>
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
                                <S.ArticPrice>{ad ? priceFormat(ad.price) : null} ₽</S.ArticPrice>
                                <S.ArticleBtnBlock>
                                    <S.BtnEdit onClick={openModalEdit}>Редактировать</S.BtnEdit>
                                    <Modal isOpen={modalIsOpenEdit} onRequestClose={closeModalEdit} style={
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
                                        {modalContentEdit}
                                     </Modal>
                                    <S.BtnRemove onClick={() => 
                                        deleteAd({id: ad.id, token: token}).then((item) => {
                                            if (item?.access_token){
                                                console.log("update token");
                                                deleteAd({id: ad.id, token: item}).then(() => {
                                                    getAllAds().then((ads) => {
                                                        dispatch(setAllAds(ads))
                                                        navigate(`/`)
                                                    })
                                                })
                                            } else {
                                                getAllAds().then((ads) => {
                                                    dispatch(setAllAds(ads))
                                                    navigate(`/`)
                                                })
                                            }
                                        })}>Снять с публикации</S.BtnRemove>
                                </S.ArticleBtnBlock>
                                <S.ArticleAuthor onClick={() => {
                                    localStorage.setItem("userId", JSON.stringify(ad.user.id))
                                    navigate(`../seller`);
                                    }}>
                                    <S.AuthorImg>
                                        <S.AuthorImgPicture                       
                                            src={`http://localhost:8090/${ad?.user.avatar}`}
                                            alt="" />
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
                    <S.MainTitle>
                        Описание товара
                    </S.MainTitle>
                    <S.MainContent>
                        <S.MainText>{ad?.description}</S.MainText>
                    </S.MainContent>
                </S.MainContainerBlock>
            </main>
        </S.Container>
    )
}