import React, { useState } from "react";
import Modal from "react-modal";
import * as S from "./styles/my-adv-styles";
import Header from "../components/Header/Header";
import MainMenu from "../components/MainMenu/MainMenu";
import { useSelector } from "react-redux";

export const MyAdvertisement = () => {
    const [modalIsOpenEdit, setModalIsOpenEdit] = useState(false);
    const [modalIsOpenReview, setModalIsOpenReview] = useState(false);
    const user = useSelector((state) => state.user.user)

    const openModalEdit = () => {
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
          <S.ModalTitleInput placeholder="Введите название" />
      </S.ModalTitle>
      <S.ModalDescription>
          <S.ModalDescritionHeader>Описание</S.ModalDescritionHeader>
          <S.ModalDescriptionInput placeholder="Введите описание"/>
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
        <S.ModalInputPrice />
        <S.ModalInputPriceCover></S.ModalInputPriceCover>
      </S.ModalBlockPrice>
      <S.ModalPublishButton>Сохранить</S.ModalPublishButton>
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
                                    <img src="" alt="" /> 
                                </S.ArticImgBlock>
                                <S.ArticImgBar>
                                    <S.ArticImgBarDiv>
                                        <S.ArticImgBarDivPicture />
                                    </S.ArticImgBarDiv>
                                    <S.ArticImgBarDiv>
                                        <S.ArticImgBarDivPicture />
                                    </S.ArticImgBarDiv>
                                    <S.ArticImgBarDiv>
                                        <S.ArticImgBarDivPicture />
                                    </S.ArticImgBarDiv>
                                    <S.ArticImgBarDiv>
                                        <S.ArticImgBarDivPicture />
                                    </S.ArticImgBarDiv>
                                    <S.ArticImgBarDiv>
                                        <S.ArticImgBarDivPicture />
                                    </S.ArticImgBarDiv>
                                    <S.ArticImgBarDiv>
                                        <S.ArticImgBarDivPicture />
                                    </S.ArticImgBarDiv>
                                </S.ArticImgBar>

                            </S.ArticFillImg>
                        </S.ArticLeft>
                        <S.ArticRight>
                            <S.ArticBlock>
                                <S.ArticTitle>Ракетка для большого тенниса Triumph Pro STС Б/У</S.ArticTitle>
                                <S.ArticInfo>
                                    <S.ArticDate>Сегодня в 10:45</S.ArticDate>
                                    <S.ArticCity>Санкт-Петербург</S.ArticCity>
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
                                <S.ArticPrice>2 200 ₽</S.ArticPrice>
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
                                    <S.BtnRemove>Снять с публикации</S.BtnRemove>
                                </S.ArticleBtnBlock>
                                <S.ArticleAuthor>
                                    <S.AuthorImg>
                                        <S.AuthorImgPicture src="" alt="" />
                                    </S.AuthorImg>
                                    <S.AuthorContent>
                                        <S.AuthorName>Максим</S.AuthorName>
                                        <S.AuthorAbout>Продает товары с августа 2021</S.AuthorAbout>
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
                        <S.MainText>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere eveniet, praesentium iusto veniam amet velit atque aliquam delectus cumque illo dignissimos, ipsam minus quibusdam dolores, debitis aspernatur incidunt blanditiis et.
                            Veritatis ipsum suscipit voluptatibus maxime veniam, eum doloremque tempora soluta illum error harum vitae asperiores, sed autem eligendi consectetur quam dolorum amet magni at commodi. Ad hic adipisci cum ea.
                            Pariatur, obcaecati non at similique saepe soluta corporis aliquam odio consectetur suscipit labore neque, commodi maiores ratione quibusdam placeat libero odit velit sit. Quo voluptatem debitis consequatur reiciendis maiores sapiente?
                            Autem, quibusdam est. Vitae exercitationem id assumenda ipsam odio dolorem doloremque repellendus dolor minus, quod quas corporis explicabo quis molestias odit deleniti? Harum commodi quae illum est beatae rem modi.
                            Accusantium dicta, soluta doloremque possimus error perferendis voluptas deleniti inventore exercitationem adipisci enim, suscipit tenetur quasi officia temporibus vero iste quisquam voluptatibus. Eligendi, rem veniam ipsam laborum fugiat nisi obcaecati.
                            Tenetur et magnam porro voluptate facere adipisci exercitationem vel, pariatur unde sint sit necessitatibus numquam. Unde expedita ab earum, asperiores placeat quod odio alias, qui maiores nisi mollitia quidem voluptate.
                            Eius esse fugit odit, blanditiis fugiat necessitatibus laudantium ratione accusamus quidem reprehenderit a harum architecto nisi perferendis consectetur asperiores sequi vero quasi nobis cupiditate excepturi? Consequatur fugiat magnam necessitatibus minus!
                            Odio ut dicta reiciendis consequatur, atque illum earum quia impedit quod iusto enim mollitia recusandae sed est veniam omnis deleniti cum commodi repudiandae. Quidem, perferendis dolores accusamus hic similique impedit.
                            Dolore adipisci vero quaerat cum corrupti veritatis consequatur. Error sint nostrum ut atque perferendis laboriosam sit eaque officia unde consequatur magni autem, provident culpa dignissimos accusantium. Magni tempore cupiditate repudiandae.
                            Ducimus molestias vero quaerat cum error, nesciunt voluptate omnis odio sint labore autem reiciendis quasi quis libero mollitia velit. Sed perferendis iste aliquid laboriosam modi blanditiis eos maiores molestias nulla.
                            Architecto ducimus voluptates dolore beatae possimus quis repudiandae esse ut quaerat rem reprehenderit qui, quia accusantium deleniti doloribus cupiditate totam. Porro itaque voluptatem, doloribus aut sint vel modi atque voluptas.
                            Sit dicta deleniti fuga illum quae eos ipsam at, qui minus voluptate iusto corrupti numquam facere, officiis ad repudiandae iste aut debitis natus repellat nulla asperiores. Provident obcaecati saepe repellendus!
                            Eius, itaque enim eveniet numquam excepturi nesciunt minus, aliquid quas quae sapiente maxime at quam debitis minima laboriosam adipisci illo suscipit rerum consequuntur veritatis. Eum facilis quisquam quia beatae laborum.
                            Totam, perspiciatis placeat voluptate praesentium aliquid dolores sint ipsa expedita fugit doloribus eligendi quaerat accusamus ratione saepe. Enim, possimus? Magni ipsa labore cum ea quis. Quas ad quam eligendi veniam?
                            Sed natus, obcaecati atque numquam dolorum laborum ducimus error molestias illo officiis, neque blanditiis impedit maxime cupiditate saepe eligendi reprehenderit necessitatibus! Quisquam provident omnis voluptatem magnam modi quas commodi dolorum.
                        </S.MainText>
                    </S.MainContent>
                </S.MainContainerBlock>
            </main>
        </S.Container>
    )
}