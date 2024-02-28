import * as S from "./Header-styles";
import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setUser } from "../../store/slices/userSlice";

function Header({page}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const dispatch=  useDispatch();
  const user = useSelector((state) => state.user.user);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const modalContent = (
    <>
    <S.ModalHeader>
        <S.ModalHeaderTitle>Новое объявление</S.ModalHeaderTitle>
        <S.ModalHeaderClose src="/img/close_modal.png" alt="close" onClick={closeModal}/>
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
    <S.ModalPublishButton>Опубликовать</S.ModalPublishButton>
    </>
  );

  return (
    <S.Header>
      <S.HeaderNav>
        {
          user !== null ? 
        <>
        <S.HeaderBtnMainEnter onClick={openModal}>
          Разместить объявление
        </S.HeaderBtnMainEnter>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={
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
          {modalContent}
        </Modal>
        {page === "profile" ? 
        <S.HeaderBtnMainEnter onClick={() => {
          localStorage.removeItem("authData")
          dispatch(setUser(null))
          localStorage.removeItem("token")
          dispatch(setToken(null))
          window.location.href = "/register"
        }}>Выйти</S.HeaderBtnMainEnter>
        :
        <S.HeaderBtnMainEnter onClick={() => (window.location.href = "/profile")}>Личный кабинет</S.HeaderBtnMainEnter>
        }
        </>
         :           
        <S.HeaderBtnMainEnter
        onClick={() => (window.location.href = "/register")}
      >
        Вход в личный кабинет
      </S.HeaderBtnMainEnter>
        }
        
      </S.HeaderNav>
    </S.Header>
  );
}
export default Header;
