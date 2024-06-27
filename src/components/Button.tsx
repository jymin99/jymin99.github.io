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
        <div className="relative m-5">
            <button className="relative inline-block z-10 top-2 bg-transparent font-mabeop text-[36px] w-max m-5 whitespace-nowrap ring-transparent" onClick={onClickMenu}>
                <div className="relative">
                    <span className="absolute text-white">
                        {title}
                    </span>
                    <span className="absolute text-secondary" style={{top:'0.375rem', left:'0.375rem'}}>
                        {title}
                    </span>
                </div>
            </button>
        </div>
    );
};

export default Button;