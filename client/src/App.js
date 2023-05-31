import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./page/LoginPage";
import RegisterPage from "./page/RegisterPage";
import BookPage from "./page/BookPage";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="books" element={<BookPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
