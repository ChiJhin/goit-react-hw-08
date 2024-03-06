import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/user/selector";
import { selectUser } from "../../redux/user/selector";

const Navigation = () => {
  const isActive = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  const isLoggin = useSelector(selectIsLoggedIn);
   const user = useSelector(selectUser)

  return (
   
      <>
        <nav className={css.nav}>
          <NavLink to="/" className={isActive}>
            Home
          </NavLink>
          {isLoggin && <NavLink to="/tasks" className={isActive}>Contacts</NavLink>} 
        </nav>
        {isLoggin && <p className={css.welcome}>Welcome: <span className={css.login}>{user.name}</span></p>}
      </>

  );
};

export default Navigation