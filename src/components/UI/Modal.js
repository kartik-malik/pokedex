import classes from './Modal.module.css'
const ModalContainer=({children})=>{
return <div className={`${classes.modal__main}`}>
    {children}
</div>
}
const ModalBackground=({toggleModal})=>{
    console.log(toggleModal);
      return <div className={`${classes.modal__background}`} onClick={()=>{console.log("hi");toggleModal(false)}}></div>
}
const Modal=({children,toggleModal})=>{
    console.log(toggleModal);
        return (
            <div className={`${classes.modal}`}>
               
            <ModalBackground toggleModal={toggleModal}>
            </ModalBackground >
            <ModalContainer >
                    {children}
                </ModalContainer>
            </div>
        )
}
export default Modal;