import React from "react";
import * as S from "./styles/Auth-style";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllUsers, logIn, signUp } from "../api/api";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../store/slices/userSlice";

export function Authorization() {
    const [error, setError] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [city, setCity] = useState("");
    const [isLoginMode, setIsLoginMode] = useState(true);
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const handleLogin = async ({ email, password }) => {
      setLoading(true)
      if (email === ""){
        setError("Укажите почту")
        setLoading(false)
        return
      }
      if (password === ""){
        setError("Укажите пароль")
        setLoading(false)
        return
      }
      
      logIn({email, password})
      .then((userToken) => {
        if (userToken?.detail === "Incorrect password"){
          setError("Неверный пароль")
          setLoading(false)
          return
        }
        getAllUsers().then((users) => {
          // eslint-disable-next-line
          users.map((user) => {
            if (user.email === email){
              localStorage.setItem("authData", JSON.stringify(user))
              dispatch(setUser(user))
            }
          })
        })
        localStorage.setItem("token", JSON.stringify(userToken))
        localStorage.setItem("password", JSON.stringify(password))
        dispatch(setToken(userToken))
        navigate("/")
        })
        .catch((item) => {
          console.log(item)
          setError(item.message)
        })
        .finally(() => {
          setLoading(false)
        })
    };
  
    const handleRegister = async ({email, password, repeatPassword, name, surname, city}) => {
      setLoading(true)
      if (email === ""){
        setError("Укажите почту")
        setLoading(false)
        return
      }
      if (password === ""){
        setError("Укажите пароль")
        setLoading(false)
        return
      }
      if (password !== repeatPassword){
        setError("Пароли не совпадают")
        setLoading(false)
        return
      }
      signUp({email, password, name, surname, city})
      .then((user) => {
        console.log(user)
        dispatch(setUser(user))
        navigate("/")
      })
      .catch((item) => {
        setError(item.message)
      })
      .finally(() => {
        setLoading(false)
      })
    };
  
    // Сбрасываем ошибку если пользователь меняет данные на форме или меняется режим формы
    useEffect(() => {
      setError(null);
    }, [isLoginMode, email, password, repeatPassword]);
  

    return (
        <S.PageContainer>
        <S.ModalForm>
          <Link to="/" onClick={() => setIsLoginMode(true)}>
            <S.ModalLogo>
              <S.ModalLogoImage src="/img/logo_modal.png" alt="logo" />
            </S.ModalLogo>
          </Link>
          {isLoginMode ? (
            <>
              <S.Inputs>
                <S.ModalInput
                  type="text"
                  name="login"
                  placeholder="Email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
                <S.ModalInput
                  type="password"
                  name="password"
                  placeholder="Пароль"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              </S.Inputs>
              {error && <S.Error>{error}</S.Error>}
              <S.Buttons>
                <S.PrimaryButton disabled={loading} onClick={() => handleLogin({ email, password })}>
                  <S.PrimaryButtonLink>Войти</S.PrimaryButtonLink>
                </S.PrimaryButton>
                <S.SecondaryButton disabled={loading} onClick={() => setIsLoginMode(!isLoginMode)}>
                    <S.SecondaryButtonLink>Зарегистрироваться</S.SecondaryButtonLink>
                </S.SecondaryButton>
              </S.Buttons>
            </>
          ) : (
            <>
              <S.Inputs>
                <S.ModalInput
                  type="text"
                  name="login"
                  placeholder="Email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
                <S.ModalInput
                  type="password"
                  name="password"
                  placeholder="Пароль"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
                <S.ModalInput
                  type="password"
                  name="repeat-password"
                  placeholder="Повторите пароль"
                  value={repeatPassword}
                  onChange={(event) => {
                    setRepeatPassword(event.target.value);
                  }}
                />
                <S.ModalInput
                  type="text"
                  name="name"
                  placeholder="Имя (необязательно)"
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
                <S.ModalInput
                  type="text"
                  name="surname"
                  placeholder="Фамилия (необязательно)"
                  value={surname}
                  onChange={(event) => {
                    setSurname(event.target.value);
                  }}
                />
                <S.ModalInput
                  type="text"
                  name="city"
                  placeholder="Город (необязательно)"
                  value={city}
                  onChange={(event) => {
                    setCity(event.target.value);
                  }}
                />
              </S.Inputs>
              {error && <S.Error>{error}</S.Error>}
              <S.Buttons>
                <S.PrimaryButton disabled={loading} onClick={() => handleRegister({email, password, repeatPassword, name, surname, city})}>
                  Зарегистрироваться
                </S.PrimaryButton>
              </S.Buttons>
            </>
          )}
        </S.ModalForm>
      </S.PageContainer>
      );
}