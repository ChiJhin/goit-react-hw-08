import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/user/selector";

import css from "./Home.module.css"

const HomePage = () => {
  const isLogged = useSelector(selectIsLoggedIn);
  const greeting = <><h1>Greetings, dear user! This site will help you save all your contacts.</h1></>
  const signIn = <><h1>Please, login or register to get your contacts!</h1></>

  return (
    
    <div className={css.title}>
      {isLogged ? greeting : signIn}
      <p className={css.description}>Sincerely, Administrator</p>
    </div>
  );
};
export default HomePage;
