import React from "react";
// import { useDispatch } from "react-redux";
// import { openModal } from "../redux/modalSlice";

interface ModalButtonProps{
    title: string;
    type: string;
    detail:string;
    color:string;
    url:string;
}

const ModalButton: React.FC<ModalButtonProps> = ({ title, type, detail, color, url}) => {
    // const dispatch=useDispatch();

    return (
        <button 
        onClick={()=>window.open(url)}
        className={`bg-${color} hover:bg-${color} text-black hover:text-black w-[300px] h-100 p-5 border-transparent hover:border-transparent rounded-[20px] m-5 max-2xl:m-2`}
        >
            <div className="flex flex-col items-start text-left">
                <div className="flex flex-row items-center">
                    <div className="font-mango font-bold text-[45%] mr-3">
                        {title}
                    </div>
                    <div className="font-mango font-light text-[40%]">
                        {type}
                    </div>
                </div>
                <div className="font-mango font-light text-[45%]">
                    {detail}
                </div>
            </div>
        </button>
    );
};
export default ModalButton;