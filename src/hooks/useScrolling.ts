import { fetchAll } from "helpers";
import { useEffect, useState } from "react";
const useScrolling = ({ offset }: { offset: number }) => {
    const [loading,setLoading] = useState(false);
    
  const [data, setData] = useState<any>([]);
  const [hasMore,setHasMore]= useState(false);
  console.log("run")
  useEffect(() => {
    setLoading(true)
    fetchAll(offset).then((data) => {
        setLoading(false);
      console.log(data);
      //  if(filterCtx.filterType=='none'){
        if(data.results.length>0){
            setHasMore(true);
        }
        else {
            setHasMore(false);
        }
      setData((prevData: any)=>[...prevData,...data.results]);
      //  }
    });
  }, [offset]);
  return {
    data,
    loading,
    hasMore
  }
};
export default useScrolling;