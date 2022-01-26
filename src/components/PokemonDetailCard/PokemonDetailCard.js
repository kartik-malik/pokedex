import { useEffect, useState } from "react"
import {fetchOne} from '../../helpers'
const PokemonDetailCard=({name})=>{
    const [loading,setLoading]=useState(false);
    const [data,setData]=useState(null);
     useEffect(()=>{
      fetchOne(name).then((data)=>{
        console.log(data);
      })
     },[])
    return <div>
    hi
    </div>
}
export default PokemonDetailCard;