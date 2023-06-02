import { useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import authService from "../service/authService";
import { UserContext } from "../context/UserContext";
import "../style/mainHeader.css";

/*
Header-komponent som renderas efter login/register-skärm,
här hanteras även själva kontrollen av vilken roll en användare har så att rätt komponent
renderas på bookPage
*/

function MainHeader() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUser() {
      const result = await authService.fetchUser();
      setUser(result);
    }

    fetchUser();
  }, []);

  function logout() {
    sessionStorage.removeItem("JWT_TOKEN");
    setUser({});
    navigate(-1);
  }

  return (
    <header className="main-header">
      <h1 className="main-heading">Booksters website</h1>
      <section className="user-info-container">
        {user && user.role && (
          <>
            <p className="user-info-p">
              Browsing as {user.role.toLowerCase()}: {user.username}
            </p>
            <button className="role-btn" onClick={logout}>
              Sign out
            </button>
          </>
        )}
        {(!user || !user.role) && (
          <>
            <p className="user-info-p">Browsing as guest...</p>
            <button className="role-btn">
              <Link to={"/"}>Sign in</Link>
            </button>
          </>
        )}
      </section>
    </header>
  );
}

export default MainHeader;
