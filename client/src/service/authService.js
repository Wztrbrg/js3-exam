async function registerHandler(e, credentials) {
  e.preventDefault();
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: credentials.username,
      password: credentials.password,
    }),
  };

  const res = await fetch("http://127.0.0.1:3000/auth/register", options);

  if (res.status === 201) {
    return true;
  } else {
    return await res.text();
  }
}

async function loginHandler(e, credentials) {
  e.preventDefault();
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: credentials.username,
      password: credentials.password,
    }),
  };

  const res = await fetch("http://127.0.0.1:3000/auth/login", options);

  if (res.status === 200) {
    const data = await res.json();
    sessionStorage.setItem("JWT_TOKEN", data.accessToken);
    return true;
  } else {
    return await res.text();
  }
}

async function fetchUser() {
  const options = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + sessionStorage.getItem("JWT_TOKEN"),
    },
  };

  let result = await fetch("http://127.0.0.1:3000/library/profile", options);

  if (result.status === 200) {
    result = await result.json();
    return result.user;
  }
}

const authService = { loginHandler, registerHandler, fetchUser };
export default authService;
