import PokeList from './pokelist/pokelist'
import { useState ,useEffect} from 'react';
import {fetchAll} from '../helpers'
import PagingBar from '../PagingBar/PagingPar';

const PokePage =()=>{
    const [data,setData]=useState([]);
    const [offset,setOffSet] =useState(20);
    useEffect(()=>{
        fetchAll(offset).then((data)=>{
             setData(data.results);
        })
    },[offset])
    const updateOffset=(val)=>{
        setOffSet(val)
    }
    return (
        <>
       <PokeList data={data}>
  
       </PokeList>
        <PagingBar updateOffset={updateOffset} offsetValue={offset}/ >
       </>
    )
}
export default PokePage;