import { useEffect, useState } from "react"
import {fetchOne} from '../../helpers'
import StatBar from "../UI/statbar/statbar";
import classes from './PokemonDetailCard.module.css'
const PokemonDetailCard=({name,imageUrl})=>{
    const [loading,setLoading]=useState(false);
    const [data,setData]=useState(null);
     useEffect(()=>{
      fetchOne(name).then((data)=>{
        console.log(data);
        setData(data);
      })
     },[])
    return (
        <>
        {data && <div className={classes.Detail__grid}>
    <div className={classes.Detail__1}><img src={imageUrl} className={classes.detail__img}/></div>
    <div className={classes.Detail__2}>
        {
            data.stats.map((item)=>{
                return <li className={classes.Stats__list} key={item.stat.name}><span className={classes.stat__name}>{item.stat.name}</span><StatBar basestat={item.base_stat}/></li>
            })
        }
    </div>

    </div>}
    </>
    )
}
export default PokemonDetailCard;