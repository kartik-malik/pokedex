import React from "react";
import classes from './PagingBar.module.css'
const PagingBar=({updateOffset,offsetValue})=>{
   return <div className={`${classes.Paging__Container}`}>
           <button className="Paging__Button" onClick={()=>updateOffset(offsetValue-20)} disabled={offsetValue<=0}>
               Prev
           </button>
           <button className="Paging__Button" onClick={()=>updateOffset(offsetValue+20)}>Next</button>
   </div>
}
export default PagingBar;