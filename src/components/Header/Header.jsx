import * as S from "./Header-styles";
import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setUser } from "../../store/slices/userSlice";
import { getAllAds, postAd, postAdWithPhoto } from "../../api/api";
import { setAllAds } from "../../store/slices/adSlice";

function Header({page}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [photos, setPhotos] = useState([]);
  const [writeTitle, setWriteTitle] = useState(false);
  const dispatch=  useDispatch();
  const user = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.user.token);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setPhotos([]);
  };

  const modalContent = (
    <>
    <S.ModalHeader>
        <S.ModalHeaderTitle>Новое объявление</S.ModalHeaderTitle>
        <S.ModalHeaderClose src="/img/close_modal.png" alt="close" onClick={closeModal}/>
    </S.ModalHeader>
    <S.ModalTitle>
        <S.ModalTitleHeader>Название</S.ModalTitleHeader>
        <S.ModalTitleInput placeholder="Введите название" onChange={(event) => {setTitle(event.target.value)}}/>
        {
          writeTitle ?
          <S.WriteTitle>Не заполнено</S.WriteTitle>
          :
          null
        }
    </S.ModalTitle>
    <S.ModalDescription>
        <S.ModalDescritionHeader>Описание</S.ModalDescritionHeader>
        <S.ModalDescriptionInput placeholder="Введите описание" onChange={(event) => {setDescription(event.target.value)}}/>
    </S.ModalDescription>
    <S.ModalPhotos>
        <S.ModalFormNewArtP>Фотографии товара <S.ModalFormNewArtSpan>не более 5 фотографий</S.ModalFormNewArtSpan></S.ModalFormNewArtP>
        <S.ModalAddPhotosBar>
          <S.ModalAddPhotos>
              {photos[0] === undefined 
              ?
              (<label for="add_photo1"><img src="/img/add_photo.png" alt="add_photo" /></label>)
              :
              (<S.Success src={URL.createObjectURL(photos[0])} alt="added_photo"/>)
              }
              <S.AddPhoto type="file" id="add_photo1" accept="image/*" onChange={(event) => {console.log(event);
                setPhotos([...photos.slice(0, 0), event.target.files[0], ...photos.slice(1)])}}/>
          </S.ModalAddPhotos>
          <S.ModalAddPhotos>
              {photos[1] === undefined 
              ?
              (<label for="add_photo2"><img src="/img/add_photo.png" alt="add_photo" /></label>)
              :
              (<S.Success src={URL.createObjectURL(photos[1])} alt="added_photo"/>)
              }
              <S.AddPhoto type="file" id="add_photo2" accept="image/*" onChange={(event) => {console.log(event);
                setPhotos([...photos.slice(0, 1), event.target.files[0], ...photos.slice(2)])}}/>
          </S.ModalAddPhotos>
          <S.ModalAddPhotos>
              {photos[2] === undefined 
              ?
              (<label for="add_photo3"><img src="/img/add_photo.png" alt="add_photo" /></label>)
              :
              (<S.Success src={URL.createObjectURL(photos[2])} alt="added_photo"/>)
              }
              <S.AddPhoto type="file" id="add_photo3" accept="image/*" onChange={(event) => {console.log(event);
                setPhotos([...photos.slice(0, 2), event.target.files[0], ...photos.slice(3)])}}/>
          </S.ModalAddPhotos>
          <S.ModalAddPhotos>
              {photos[3] === undefined 
              ?
              (<label for="add_photo4"><img src="/img/add_photo.png" alt="add_photo" /></label>)
              :
              (<S.Success src={URL.createObjectURL(photos[3])} alt="added_photo"/>)
              }
              <S.AddPhoto type="file" id="add_photo4" accept="image/*" onChange={(event) => {console.log(event);
                setPhotos([...photos.slice(0, 3), event.target.files[0], ...photos.slice(4)])}}/>
          </S.ModalAddPhotos>
          <S.ModalAddPhotos>
              {photos[4] === undefined 
              ?
              (<label for="add_photo5"><img src="/img/add_photo.png" alt="add_photo" /></label>)
              :
              (<S.Success src={URL.createObjectURL(photos[4])} alt="added_photo"/>)
              }
              <S.AddPhoto type="file" id="add_photo5" accept="image/*" onChange={(event) => {console.log(event);
                setPhotos([...photos.slice(0, 4), event.target.files[0], ...photos.slice(5)])}}/>
          </S.ModalAddPhotos>
        </S.ModalAddPhotosBar>
    </S.ModalPhotos>
    <S.ModalBlockPrice>
      <label for="price">Цена</label>
      <S.ModalInputPrice onChange={(event) => {setPrice(Number(event.target.value))}}/>
    </S.ModalBlockPrice>
    <S.ModalPublishButton onClick={() => {
      if (title === ""){
        setWriteTitle(true)
        return
      }
      setWriteTitle(false)
      if (photos.length === 0){
        postAd({title: title, description: description, price: price, token: token}).then((item) => {
          console.log(title, description, price, token);
          if (item?.title !== title){
            console.log("recall works");
            dispatch(setToken(item))
            console.log(item);
            postAd({title: title, description: description, price: price, token: item}).then(() => {
              console.log("postAd again");
              getAllAds().then((ads) => {
                function compare(a, b) {
                  var dateA = new Date(a.created_on);
                  var dateB = new Date(b.created_on);
                 
                  return dateB - dateA;
                }
                ads.sort(compare);
                dispatch(setAllAds(ads));
              });
            })
          }
          else{
            console.log("works normally");
            getAllAds().then((ads) => {
              console.log("got ads");
              function compare(a, b) {
                var dateA = new Date(a.created_on);
                var dateB = new Date(b.created_on);
               
                return dateB - dateA;
              }
              ads.sort(compare);
              dispatch(setAllAds(ads));
            });
            }
        })
      } else {
        console.log("works with pictures");
        console.log(title, description, price, photos, token);
        postAdWithPhoto({title: title, description: description, price: price, photos: photos, token: token}).then((item) => {
          if (item?.title !== title){
            console.log("got token");
            dispatch(setToken(item))
            postAdWithPhoto({title: title, description: description, price: price, photos: photos, token: item}).then(() => {
              getAllAds().then((ads) => {
                console.log("got ads");
                function compare(a, b) {
                  var dateA = new Date(a.created_on);
                  var dateB = new Date(b.created_on);
                 
                  return dateB - dateA;
                }
                ads.sort(compare);
                dispatch(setAllAds(ads));
                closeModal();
                setPhotos([]);
              });
            })
          }
          else{
            console.log("works normally with pictures");
            getAllAds().then((ads) => {
              console.log("got ads");
              function compare(a, b) {
                var dateA = new Date(a.created_on);
                var dateB = new Date(b.created_on);
               
                return dateB - dateA;
              }
              ads.sort(compare);
              dispatch(setAllAds(ads));
              closeModal();
              setPhotos([]);
            });}
        })
      }
    }
    //require title and price
    }>Опубликовать</S.ModalPublishButton>
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
                    width: "620px",
                    height: "550px",
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
