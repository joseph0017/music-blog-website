import React from 'react'
import {motion} from "framer-motion/dist/framer-motion"

const modalVariant = {
    hidden: {
        opacity: 0,
        y: '-100vw'
    },
    visible: {
        opacity: 1,
        y: 1,
    
    transition: {
        type: 'tween',
        delay: 0.5,
        duration: 1.1
        }
    }
}

const Modal = ({onHide, modalPicture}) => {

    return (
        <motion.div className = "backdrop z-40 cursor-pointer" onClick = {onHide} 
        variants = {modalVariant} 
        initial = "hidden"
        animate = "visible"
        >
            <img src = {modalPicture} alt = "modal pic" />
      
        </motion.div>
    )
}

export default Modal
