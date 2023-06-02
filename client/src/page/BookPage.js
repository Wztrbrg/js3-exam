import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import AdminView from "../components/AdminView";
import UserView from "../components/UserView";
import GuestView from "../components/GuestView";
import MainHeader from "../components/MainHeader";
import "../style/bookPage.css";

/*
bookPage, landningssida efter inloggning
MainHeader-komponenten kollar vilken roll man har som lagras i userContext
om man inte är !user d.v.s gäst renderas GuestView osv
*/
function BookPage() {
  const { user, setUser } = useContext(UserContext);
  console.log(user);

  return (
    <>
      <MainHeader></MainHeader>
      <section className="book-section">
        {(() => {
          if (!user) {
            return <GuestView></GuestView>;
          } else if (user.role === "USER") {
            return <UserView></UserView>;
          } else if (user.role === "ADMIN") {
            return <AdminView></AdminView>;
          }
        })()}
      </section>
    </>
  );
}

export default BookPage;
