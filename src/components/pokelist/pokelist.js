import PokeCard from '../pokecard/pokecard';
import classes from '../pokecard/pokecard.module.css'

const generateImageUrl=()=>{

}
const PokeList=({data})=>{
    console.log(data)
     return <>
    <section className={`${classes.adcontainer}`}>
        {data.map((ad) => {
          return (
            <PokeCard
              key={ad.name}
              title={ad.name}
              // id={ad.name}
              imageUrl={ad.url}
            />
          );
        })}
      </section>
     </>
    
}
export default PokeList