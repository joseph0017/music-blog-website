import React from 'react'

const Modal = ({onHide, modalPicture}) => {

    return (
        <div className = "backdrop" onClick = {onHide}>
            <img src = {modalPicture} alt = "modal pic" />
      
        </div>
    )
}

export default Modal
