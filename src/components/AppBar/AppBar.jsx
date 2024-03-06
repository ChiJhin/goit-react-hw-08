import { useSelector } from "react-redux";
import RegistrationNav from "../RegistrationNav/RegistrationNav";
import Navigation from "../Navigation/Navigation";
import css from "./AppBar.module.css";
import Logout from "../Logout/Logout";

import { selectIsLoggedIn } from "../../redux/user/selector";

 const AppBar = () => {
      const isLogged = useSelector(selectIsLoggedIn);
   
  return (
    <header className={css.header}>
        <Navigation />
      {isLogged ? <Logout/> : <RegistrationNav />}
    </header>
  );
};

export default AppBar