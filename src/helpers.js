import axios from 'axios';

export const fetchAll=async(offset) => {
    const response =await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=10&offset=${offset}`);
    return response.data 
}
export const fetchOne=async(val,url)=>{
 const response= await axios.get(val?`https://pokeapi.co/api/v2/pokemon/${val}`:url)
 return response.data;
}
export const checkFilterType=(arr,filterType)=>{
    console.log(arr);
    for(let i=0;i<arr.length;i++){
        console.log(arr[i].type.name)
        if(arr[i].type.name==filterType){
            return true;
        }
    }
    return false;
}
// export const fetchAll;
// export const fetchStats=(val)=>{
//   const response=await axios.get(val?`https://pokeapi.co/api/v2/pokemon/${val}`)
// }