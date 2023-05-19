import useScrolling from "hooks/useScrolling";
import { useCallback, useEffect, useRef, useState } from "react";
import PokeCard from "../pokecard/pokecard";
import classes from "../pokecard/pokecard.module.css";

const generateImageUrl = () => {};
const PokeList = () => {
  // const
  const [offset, setOffSet] = useState(0);
  const { data,hasMore,loading } = useScrolling({ offset });

  const observer = useRef();
  const lastElement = useCallback((node) => {
    if(!node)
    return;
    console.log("lll",node);
    //  if(!node)
    //  return;
    if(observer.current)
    {
      observer.current.disconnect();
      // return;
    }
    observer.current= new IntersectionObserver((entries)=>{
      console.log(entries[0]);
      if( entries[0] && entries[0].isIntersecting && hasMore){
        console.log("here") 
        setOffSet((prev)=>prev+10);
      }
    })
    observer.current.observe(node);
  }, [hasMore]);
  useEffect(()=>{
    console.log(offset);
  },[offset])
  console.log(data);
  return (
    <>
      <section className={`${classes.adcontainer}`}>
        { data && data.map((ad, index) => {
          if(index+1 == data.length)

        { console.log("kkk",data,index)
           return (
            <div ref={lastElement} key={ad.name}>
              <PokeCard
                key={ad.name}
                title={ad.name}
                // id={ad.name}
                imageUrl={ad.url}
              />
            </div>
          );
        }
          return <div key={ad.name} >
          <PokeCard
            key={ad.name+ad.url}
            title={ad.name}
            // id={ad.name}
            imageUrl={ad.url}
          />
        </div>
        })}
      </section>
    </>
  );
};
export default PokeList;
