import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import * as S from "./styles/profile-styles";
import Header from "../components/Header/Header";
import MainMenu from "../components/MainMenu/MainMenu";
import Advertisement from "../components/Advertisement/Advertisement";
import { useDispatch, useSelector } from "react-redux";
import { getAllAds, postAvatar, updatePassword, updateUserData } from "../api/api";
import { setAllAds } from "../store/slices/adSlice";
import { setToken, setUser } from "../store/slices/userSlice";

export const Profile = () => {
  const user = useSelector((state) => state.user.user);
  const allAds = useSelector((state) => state.advertisement.all);
  const token = useSelector((state) => state.user.token);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [dataProfile, setDataProfile] = useState({
    name: "",
    surname: "",
    city: "",
    phone: "",
    email: "",
  });
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    setDataProfile({
      name: user?.name,
      surname: user?.surname,
      city: user?.city,
      phone: user?.phone,
      email: user?.email,
    });
  }, [user]);

  useEffect(() => {
    (async () => {
      await getAllAds().then((ads) => {
        dispatch(setAllAds(ads));
      });
    })();
    // eslint-disable-next-line
  }, []);
  function onChangeInput(e) {
    setDataProfile({ ...dataProfile, [e.name]: e.value });
  }
  function openChangePassword(event){
    event.preventDefault();
    openModal()
  }
  function updateData(event) {
    event.preventDefault();
    console.log(dataProfile);
    updateUserData(
      dataProfile.email,
      dataProfile.name,
      dataProfile.surname,
      dataProfile.city,
      dataProfile.phone,
      token,
      user
    ).then((item) => {
      console.log(item);
      if (item?.id !== JSON.parse(localStorage.getItem("authData")).id) {
        console.log("recall works");
        dispatch(setToken(item));
        updateUserData(
          dataProfile.email,
          dataProfile.name,
          dataProfile.surname,
          dataProfile.city,
          dataProfile.phone,
          item,
          user
        ).then((newItem) => {
          dispatch(setUser(newItem));
        });
      } else {
        dispatch(setUser(item));
        dispatch(setToken(JSON.parse(localStorage.getItem("token"))));
      }
    });
  }
  const UploadAvatar = (event) => {
    event.preventDefault();
    console.log(event);
    if (event.target.files[0]) {
      //отправить фото на сервер
      console.log(event.target.files[0]);
      postAvatar({avatar: event.target.files[0], token: token}).then((item) => {
        console.log(item);
        if (item?.id !== JSON.parse(localStorage.getItem("authData")).id){
          console.log("recall works");
          dispatch(setToken(item))
          postAvatar({avatar: event.target.files[0], token: item}).then((newItem) => {
            dispatch(setUser(newItem))
          })
        }
        else {
          localStorage.setItem("authData", JSON.stringify(item))
          dispatch(setUser(item))
        }
      })
    }
  };

  const changePassword = (

      <S.Inputs>
        <S.ModalHeaderClose src="/img/close_modal.png" alt="close" onClick={closeModal} />
        <S.ModalInput
          type="password"
          name="password"
          placeholder="Текущий пароль"
          value={currentPassword}
          onChange={(event) => {
            setCurrentPassword(event.target.value)
          }}
        />
        <S.ModalInput
          type="password"
          name="password"
          placeholder="Новый пароль"
          value={newPassword}
          onChange={(event) => {
            setNewPassword(event.target.value)
          }}
        />
        <S.ModalUploadPassword onClick={() => {
          updatePassword({password: currentPassword, repeat: newPassword, token: token}).then((item) => {
            if (item?.access_token){
              setToken(item);
              updatePassword({password: currentPassword, repeat: newPassword, token: item}).then((item) => {
                console.log(item, "from update token");
              })
            }
            console.log(item);
            console.log("changed");
            closeModal();
          })
        }}>Сохранить</S.ModalUploadPassword>
        </S.Inputs>

  );

  return (
    <S.Container>
      <Header page={"profile"} />
      <main>
        <S.MainContainer>
          <MainMenu />

          {user?.name ? (
            <S.MainHeader>Здравствуйте, {user?.name}!</S.MainHeader>
          ) : null}

          <S.MainProfile>
            <S.ProfileContent>
              <S.ProfileTitle>Настройки профиля</S.ProfileTitle>
              <S.ProfileSettings>
                <S.SettingsLeft>
                  <S.SettingsImg>
                    <S.SettingImgLink>
                      <S.SettingImgPhoto
                        src={`http://localhost:8090/${user?.avatar}`}
                      />
                    </S.SettingImgLink>
                  </S.SettingsImg>
                  {user?.avatar ? (

                    //заменить
                    <S.AddAvatarBlock>
                      <S.AddAvatarInput type="file" onChange={UploadAvatar} id="input__file" multiple/>
                      <S.SettingsChangePhoto for="input__file">Заменить</S.SettingsChangePhoto>
                    </S.AddAvatarBlock>

                  ) : (

                    //добавить
                    <S.AddAvatarBlock>
                      <S.AddAvatarInput type="file" onChange={UploadAvatar} multiple/>
                      <S.SettingsChangePhoto>Добавить</S.SettingsChangePhoto>
                    </S.AddAvatarBlock>
                  )}
                </S.SettingsLeft>
                <S.SettingsRight>
                  <S.SettingsForm>
                    <S.SettingsDiv>
                      <S.SettingsLabel for="fname">Имя</S.SettingsLabel>
                      <S.SettingsOption
                        value={dataProfile.name}
                        name="name"
                        onChange={(e) => onChangeInput(e.target)}
                      />
                    </S.SettingsDiv>
                    <S.SettingsDiv>
                      <S.SettingsLabel for="lname">Фамилия</S.SettingsLabel>
                      <S.SettingsOption
                        value={dataProfile.surname}
                        name="surname"
                        onChange={(e) => onChangeInput(e.target)}
                      />
                    </S.SettingsDiv>
                    <S.SettingsDiv>
                      <S.SettingsLabel for="city">Город</S.SettingsLabel>
                      <S.SettingsOption
                        value={dataProfile.city}
                        name="city"
                        onChange={(e) => onChangeInput(e.target)}
                      />
                    </S.SettingsDiv>
                    <S.SettingsDiv>
                      <S.SettingsLabel for="email">Почта</S.SettingsLabel>
                      <S.SettingsOption
                        value={dataProfile.email}
                        name="email"
                        onChange={(e) => onChangeInput(e.target)}
                      />
                    </S.SettingsDiv>
                    <S.SettingsDiv>
                      <S.SettingsLabel for="phone">Телефон</S.SettingsLabel>
                      <S.SettingsOptionPhone
                        value={dataProfile.phone}
                        name="phone"
                        onChange={(e) => onChangeInput(e.target)}
                      />
                    </S.SettingsDiv>

                    <S.SettingsBtn onClick={updateData}>
                      Сохранить
                    </S.SettingsBtn>
                    <S.SettingsBtn onClick={openChangePassword}>
                      Сменить пароль
                    </S.SettingsBtn>
                    <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={
                        {
                            content: {
                                width: "300px",
                                height: "300px",
                                inset: "unset"
                            },
                            overlay: {
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }
                        }
                        }>
                          {changePassword}
                    </Modal>
                  </S.SettingsForm>
                </S.SettingsRight>
              </S.ProfileSettings>
            </S.ProfileContent>
          </S.MainProfile>

          <S.MainTitle>Мои товары</S.MainTitle>
          <S.MainContent>
            <S.MainCards>
              {
                // eslint-disable-next-line
                allAds.map((ad) => {
                  if (user?.id === ad?.user.id) {
                    return (
                      <Advertisement
                        images={ad.images}
                        title={ad.title}
                        price={ad.price}
                        city={ad.city}
                        released={ad.created_on}
                        id={ad.id}
                        userId={ad.user_id}
                      />
                    );
                  }
                })
              }
            </S.MainCards>
          </S.MainContent>
        </S.MainContainer>
      </main>
    </S.Container>
  );
};
