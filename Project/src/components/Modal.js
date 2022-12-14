import React, { useEffect, useState } from "react";

const Modal = (data) => {

    const [isOpen, setModalStatus] = useState(data.isOpen);

    const modalCSSClass = isOpen ? 'active' : '';

    const closeModal = () => {
        setModalStatus(false);
    };

    const closeModalOS = (e) => {
        if(e.target.classList.contains('custom-modal')){
            setModalStatus(false);
        }
    };

    useEffect(() => {
        setModalStatus(true);
    }, [data.modalData]);
    
    return (
        <div className={'custom-modal '+modalCSSClass} onClick={closeModalOS}>
            <div className="inner">
                <span className="close" onClick={closeModal}>x</span>
                <div className="image">
                    <img alt={data.modalData.image_alt} src={data.modalData.image_big} />
                </div>
            </div>
        </div>
    );

}

export default Modal;