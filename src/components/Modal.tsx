import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../redux/store";
import { closeModal } from '../redux/modalSlice';
import closebutton from '../assets/close_button.png';
import dart from '../assets/dart_logo.svg'

const Modal: React.FC = () => {

    const dispatch = useDispatch();
    const { isOpen, title } = useSelector((state: RootState) => state.modal);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center z-50 bg-black bg-opacity-50">
            <div className=" bg-primary p-3 rounded-t-[20px] w-[743px] h-[138px]">
                <div className="flex justify-end">
                    <button onClick={() => dispatch(closeModal())} className="w-[25px] h-[23px]">
                        <img src={closebutton} alt="close_button" />
                    </button>
                </div>
                <div className="font-pre font-bold text-[30px] ">
                    {title}
                </div>
                <div className="font-pre text-[15px] mt-3">
                    {renderPeriod(title)}
                </div>
            </div>
            <div className="text-start bg-white p-5 rounded-b-[20px] w-[743px] h-[529px]">
                 {renderContent(title)}
            </div>
        </div>
    );
}
const renderPeriod=(title:string)=>{
    switch(title){
        case "에브리뷰":
            return(
                <div>
                    기간: 2023.011~2023.12  팀 구성: 프론트엔드2명, 백엔드 1명, 데이터처리 1명
                </div>
            )
        
        default:
            return null;
    }
}

const renderContent=(title:string)=>{
    switch(title){
        case "에브리뷰":
            return(
                <div>
                    <div className="font-semibold font-black font-pre text-xl">
                        tool(click link)
                    </div>
                    <div className="w-[25px] felx flex-row">
                        <img src={dart} alt="dart_logo"/>
                        dart
                    </div>
                    <div>
                        
                    </div>
                </div>
            )
        
        default:
            return null;
    }
}

export default Modal;