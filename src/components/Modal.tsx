import React from "react";

interface ModalProps{
    isOpen: boolean;
    // closeModal:()=>void;
    title:string;
}

const Modal:React.FC<ModalProps>=({isOpen,title})=>{
    if (!isOpen) return null;

    return(
        <div className="m-20 h-screen flex justify-center items-center z-50 bg-white bg-opacity-50">
            <div className="bg-primary p-8 rounded-[20px] h-[138px]">
                <h2>{title}</h2>


            </div>
        </div>
    );
};
export default Modal;