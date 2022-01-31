import PokeList from './pokelist/pokelist'
import { useState ,useEffect, useContext} from 'react';
import {fetchAll} from '../helpers'
import PagingBar from '../PagingBar/PagingPar';
import { FilterContext } from '../Provider/filter';

const PokePage =()=>{
    const [data,setData]=useState([]);
    const [offset,setOffSet] =useState(0);
    const [count,setCount]=useState(0);
    const filterCtx=useContext(FilterContext);
    console.log(filterCtx.filterType);
    useEffect(()=>{
        fetchAll(offset).then((data)=>{
            
            console.log(data);
            //  if(filterCtx.filterType=='none'){
                 setData(data.results);
            //  }
             setCount(data.count);
        })
    },[offset])
    const updateOffset=(val)=>{
        setOffSet(val)
    }
    return (
        <>
       {data.length>0 && (
       <>
       <PokeList data={data}>
  
  </PokeList>
   <PagingBar updateOffset={updateOffset} offsetValue={offset} count={count}/ >
       </>
       )
   
   }
       </>
    )
}
export default PokePage;