import { Link, useNavigate } from "react-router-dom";
import PokeForm from "../PokeSearchForm/PokeSearchForm";
import { fetchAll, fetchOne } from "../helpers";
import classes from "./MainNavigation.module.css";
import { useEffect,useState,useContext } from "react";
import { FilterContext } from "../Provider/filter";
const MainNavigation = () => {
  const navigate = useNavigate();
  const [filterList,setFilterList]=useState([]);
  const filterCtx=useContext(FilterContext);
  useEffect(()=>{
     fetchOne(null,"https://pokeapi.co/api/v2/type").then((data)=>{
         setFilterList(data.results);

     })
  },[])
  const handleListChange=(e)=>{
    // console.log(e.target.value);
    filterCtx.updateFilter(e.target.value)
  }
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>Pokedex</div>
      </Link>
      <nav>
        <ul>
         <PokeForm/>
         <select onChange={handleListChange}>
          <option value="none"></option>
          {filterList.map((item)=><option value={item.name}>{item.name}</option>)}
        </select>  
        </ul>
        
      </nav>
    </header>
  );
};

export default MainNavigation;
