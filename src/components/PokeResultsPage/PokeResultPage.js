
import { useStat,useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {fetchOne} from "../../helpers"
import PokeCard from '../pokecard/pokecard';

const PokeResultPage=()=>{
    const [searchParams,setSearchParams]=useSearchParams();
    const [data,setData]=useState(null);
    const searchQuery=searchParams.get("r");
    useEffect(()=>{
       fetchOne(searchQuery).then((data)=>{
        console.log(data);   
        setData(data);
       })
    },[searchQuery])
    return (
        <>
       { data && <PokeCard title={data.name} id={data.id}/>}
        </>
    )
}
export default PokeResultPage;