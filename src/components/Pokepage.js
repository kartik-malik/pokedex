import PokeList from "./pokelist/pokelist";
import { useState, useEffect, useContext } from "react";
import { fetchAll } from "../helpers";
import PagingBar from "../PagingBar/PagingPar";

const PokePage = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  const updateOffset = (val) => {
    setOffSet(val);
  };
  return <PokeList />;
};
export default PokePage;
