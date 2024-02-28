import React, { useEffect, useState } from "react";
import * as S from "./styles/profile-styles";
import Header from "../components/Header/Header";
import MainMenu from "../components/MainMenu/MainMenu";
import Advertisement from "../components/Advertisement/Advertisement";
import { useDispatch, useSelector } from "react-redux";
import { getAllAds, updateUserData } from "../api/api";
import { setAllAds } from "../store/slices/adSlice";
import { setToken, setUser } from "../store/slices/userSlice";

export const Profile = () => {
  const user = useSelector((state) => state.user.user);
  const allAds = useSelector((state) => state.advertisement.all);
  const token = useSelector((state) => state.user.token);
  const [dataProfile, setDataProfile] = useState({
    name: "",
    surname: "",
    city: "",
    phone: "",
    email: "",
  });
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
      dispatch(setUser(item));
      dispatch(setToken(JSON.parse(localStorage.getItem("token"))));
    });
  }

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
                    <S.SettingsChangePhoto>Заменить</S.SettingsChangePhoto>
                  ) : (
                    <S.SettingsChangePhoto>Добавить</S.SettingsChangePhoto>
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
