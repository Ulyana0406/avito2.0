import React, { useEffect, useState } from "react";
import * as S from "./styles/seller-styles";
import Header from "../components/Header/Header";
import MainMenu from "../components/MainMenu/MainMenu";
import Advertisement from "../components/Advertisement/Advertisement";
import { getAllAds, getAllUsers } from "../api/api";
import { sellsFrom } from "../usefulFunctions";
import { useDispatch, useSelector } from "react-redux";
import { setAllAds } from "../store/slices/adSlice";

export const Seller = () => {
  const [user, setUser] = useState(null);
  const [show, setShow] = useState(false);
  const allAds = useSelector((state) => state.advertisement.all);
  const dispatch = useDispatch();

  useEffect(() => {
    getAllUsers()
      .then((items) => {
        // eslint-disable-next-line
        items.map((item) => {
          if (item.id === JSON.parse(localStorage.getItem("userId"))) {
            setUser(item);
          }
        });
      })
      .then(() => {
        (async () => {
          await getAllAds().then((ads) => {
            dispatch(setAllAds(ads));
          });
        })();
      });
    // eslint-disable-next-line
  }, []);

  return (
    <S.Container>
      <Header page={"seller"}/>
      <main>
        <S.MainContainer>
          <MainMenu />

          <S.MainHeader>Профиль продавца</S.MainHeader>
          <S.MainProfile>
            <S.ProfileSeller>
              <S.SellerLeft>
                <S.SellerImg>
                  <S.SellerImgLink>
                    <S.SellerImgPhoto src={`http://localhost:8090/${user?.avatar}`}/>
                  </S.SellerImgLink>
                </S.SellerImg>
              </S.SellerLeft>
              <S.SellerRight>
                <S.SellerTitle>
                  {user?.name ? user.name : null}{" "}
                  {user?.surname ? user.surname : null}
                </S.SellerTitle>
                <S.SellerCity_Inf>
                  {user?.city ? user.city : null}
                </S.SellerCity_Inf>
                <S.SellerCity_Inf>
                  {user?.sells_from ? sellsFrom(user?.sells_from) : null}
                </S.SellerCity_Inf>

                <S.SellerButton
                  onClick={() => {
                    setShow(!show);
                  }}
                >
                  {show ? `Скрыть   телефон` : `Показать    телефон`}
                  <S.SellerButtonSpan>
                    {show ? user?.phone : "X XXX XXX XX XX"}
                  </S.SellerButtonSpan>
                </S.SellerButton>
              </S.SellerRight>
            </S.ProfileSeller>
          </S.MainProfile>

          <S.MainTitle>Товары продавца</S.MainTitle>
          <S.MainContent>
            <S.MainCards>
              {
              // eslint-disable-next-line
              allAds.map((ad) => {
                if (user?.id === ad?.user.id){
                  return <Advertisement 
                  images={ad.images} 
                  title={ad.title} 
                  price={ad.price} 
                  city={ad.city} 
                  released={ad.created_on} 
                  id={ad.id}
                  />
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
