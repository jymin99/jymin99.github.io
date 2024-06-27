import React from "react";
import { useNavigate } from "react-router-dom";

interface ButtonProps {
    title: string;
    navigate_page: string;
}
const Button: React.FC<ButtonProps> = ({ title, navigate_page }) => {
    const navigate = useNavigate();
    const onClickMenu = () => {
        navigate(navigate_page);
    };
    return (
        <div className="relative m-auto">
            <button className="relative inline-block z-10 top-2 bg-transparent font-mabeop text-4xl w-max m-5 whitespace-nowrap active:outline-none hover:border-primary" onClick={onClickMenu}>
                <div className="absolute">
                    <span className="absolute text-white">
                        {title}
                    </span>
                    <span className="absolute text-black" style={{top:'0.5rem', left:'0.5rem'}}>
                        {title}
                    </span>
                </div>
            </button>
        </div>
    );
};

export default Button;