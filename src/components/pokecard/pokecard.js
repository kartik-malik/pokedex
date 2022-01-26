import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import PokemonDetailCard from "../PokemonDetailCard/PokemonDetailCard";
import Modal from "../UI/Modal";
import classes from "./pokecard.module.css";
const AdCard = ({ imageUrl, title, id, description, user }) => {
  const [showModal,setShowModal]=useState(false);
  const toggleModal=(val)=>{
    setShowModal(val);
  }
    const getImageUrl=()=>{
      
         if(id)
         return `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg`
         if(imageUrl==undefined)
         return "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/1.svg";
         const arr=imageUrl.split("/");
        console.log(arr);
        return `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${arr[arr.length-2]}.svg`
    }
  return (
    <div className={classes.adCardMain} >
        <div className={classes.adcardImageContainer} onClick={()=>{toggleModal(true)}}>
          <img
            className={classes.cardImage}
            src={
              
              getImageUrl(imageUrl)
            }
          ></img>
        </div>
        <div className={classes.adCardTextContainer}>
          <span className={classes.adCardTextContainer__text}>{title}</span>{" "}
        </div>
        {
          showModal && <Modal toggleModal={toggleModal}>
          <PokemonDetailCard name={title} imageUrl={getImageUrl(imageUrl)}/>
        </Modal>
        }
    </div>
  );
};
export default AdCard;
