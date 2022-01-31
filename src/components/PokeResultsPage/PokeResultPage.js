
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
       }).catch((err)=>{
         console.log(err.response.data.status);
         
         if(err.response.data.status==404)
         setData(null);
       })
    },[searchQuery])
    return (
        <>
       { data ?<PokeCard title={data.name} id={data.id} imageUrl={data.species.url}/> : "No result found"}
        </>
    )
}
export default PokeResultPage;