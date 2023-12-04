import { HashRouter, Route, Routes, Switch } from "react-router-dom";
import LoginPage from "./page/LoginPage";
import RegisterPage from "./page/RegisterPage";
import BookPage from "./page/BookPage";
import { UserContext } from "./context/UserContext";
import { useState } from "react";

function App() {
  const [user, setUser] = useState("");
  const value = { user, setUser };

  return (
    <div className="wrapper">
      <HashRouter>
        <UserContext.Provider value={value}>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="books" element={<BookPage />} />
          </Routes>
        </UserContext.Provider>
      </HashRouter>
    </div>
  );
}

export default App;
