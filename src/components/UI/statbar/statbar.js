import classes from './statbar.module.css'
const StatBar=({basestat})=>{
    return (
        <span className={classes.statbar__main}>
        <span className={classes.statbar__value} style={{width:`${basestat}%`}}></span>
    </span>
    )
}
export default StatBar;