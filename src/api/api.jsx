const baseURL = "http://localhost:8090";

export async function getAllAds() {
  const response = await fetch(`${baseURL}/ads`);
  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }
  const data = await response.json();
  return data;
}
export async function signUp({ email, password, name, surname, city }) {
  const response = await fetch(`${baseURL}/auth/register`, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
      name: name,
      surname: surname,
      city: city,
      role: "user",
    }),
    headers: {
      "content-type": "application/json",
    },
  });
  if (response.status === 500) {
    throw new Error("Сервер не отвечает");
  }
  const user = await response.json();
  return user;
}
export async function logIn({ email, password }) {
  const response = await fetch(`${baseURL}/auth/login`, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
      "content-type": "application/json",
    },
  });
  if (response.status === 500) {
    throw new Error("Сервер не отвечает");
  }
  const user = await response.json();
  return user;
}
export async function getAllUsers() {
  const response = await fetch(`${baseURL}/user/all`);
  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }
  const data = await response.json();
  return data;
}
export async function getAd(id) {
  const response = await fetch(`${baseURL}/ads/${id}`);
  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }
  const ad = await response.json();
  return ad;
}
export async function getUser(token) {
  const response = await fetch(`${baseURL}/user`, {
    headers: { Authorization: `Bearer ${token.access_token}` },
  });
  if (!response.ok) {
    console.log(response);
    throw new Error("Ошибка сервера");
  }
  const user = await response.json();
  return user;
}
async function updateToken({access, refresh}){
  console.log(access, refresh)
  const response = await fetch(`${baseURL}/auth/login`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
   },
    body: JSON.stringify({
      access_token: access,
      refresh_token: refresh
    })
  });
  if (response.status === 201) {
    const tokens = await response.json();
    localStorage.setItem("token", JSON.stringify(tokens))
    return tokens;
  }
  else if (response.status === 401) {
    throw new Error("Токен устарел");
  }
  else {
    console.log(response);
    throw new Error("Ошибка сервера");
  }

}
export async function updateUserData(email, name, surname, city, phone, token, currentUser) {
  console.log(email, name, surname, city, token);
  const response = await fetch(`${baseURL}/user`, {
    method: "PATCH",
    body: JSON.stringify({
      email: email,
      name: name,
      surname: surname,
      city: city,
      phone: phone,
      role: "user",
    }),
    headers: {
      Authorization: `Bearer ${token.access_token}`,
      "content-type": "application/json",
    },
  });
  console.log(response);
  if (response.status === 500) {
    throw new Error("Сервер не отвечает");
  }
   if (response.status === 401){
     console.log(token.access_token, token.refresh_token);
     const newToken = await updateToken({access: token.access_token, refresh: token.refresh_token})
     await updateUserData(email, name, surname, city, phone, newToken, currentUser)
   }
  const user = await response.json();
  return user;
}
export async function getComments() {
  const response = await fetch(`${baseURL}/comments`);
  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }
  const data = await response.json();
  return data;
}
