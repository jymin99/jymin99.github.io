import React from "react";
// import { useDispatch } from "react-redux";
// import { openModal } from "../redux/modalSlice";

interface ModalButtonProps{
    title: string;
    type: string;
    detail:string;
    color:string;
}

const ModalButton: React.FC<ModalButtonProps> = ({ title, type, detail, color }) => {
    // const dispatch=useDispatch();

    return (
        <button 
        // onClick={()=>dispatch(openModal(title))}
        className={`bg-${color} hover:bg-${color} text-black hover:text-black w-[300px] h-100 p-5 border-transparent hover:border-transparent rounded-[20px] m-5 max-2xl:m-2`}
        >
            <div className="flex flex-col items-start text-left">
                <div className="flex flex-row items-center">
                    <div className="font-mango font-bold text-[30px] mr-3">
                        {title}
                    </div>
                    <div className="font-mango font-light text-[15px]">
                        {type}
                    </div>
                </div>
                <div className="font-mango font-light text-[25px]">
                    {detail}
                </div>
            </div>
        </button>
    );
};
export default ModalButton;