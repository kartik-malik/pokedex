import { Link, useNavigate } from "react-router-dom";
import PokeForm from "../PokeSearchForm/PokeSearchForm";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const navigate = useNavigate();
  
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>Pokedex</div>
      </Link>
      <nav>
        <ul>
         <PokeForm/>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
