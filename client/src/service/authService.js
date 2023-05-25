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

export default loginHandler;
