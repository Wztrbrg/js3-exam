import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import AdminView from "../components/AdminView";
import UserView from "../components/UserView";
import GuestView from "../components/GuestView";
import MainHeader from "../components/MainHeader";

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
