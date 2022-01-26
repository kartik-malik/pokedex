import axios from 'axios';

export const fetchAll=async(offset) => {
    const response =await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=10&offset=${offset}`);
    return response.data 
}
export const fetchOne=async(val,url)=>{
 const response= await axios.get(val?`https://pokeapi.co/api/v2/pokemon/${val}`:url)
 return response.data;
}
// export const fetchAll;
// export const fetchStats=(val)=>{
//   const response=await axios.get(val?`https://pokeapi.co/api/v2/pokemon/${val}`)
// }