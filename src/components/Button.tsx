import React from "react";
import {useNavigate} from "react-router-dom";

interface ButtonProps{
    title: string;
    navigate_page: string;
}
const Button: React.FC<ButtonProps>=({title, navigate_page})=>{
    const navigate=useNavigate();
    const onClickMenu=()=>{
        navigate(navigate_page);
    };
    return(
        <button className="bg-transparent text-secondary font-mabeop text-4xl" onClick={onClickMenu}>{title}</button>
    );
};

export default Button;