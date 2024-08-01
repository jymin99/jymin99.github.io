import React from "react";
import ReactIcon from "../assets/react.png";
import BootstrapIcon from "../assets/bootstrap.png";
import FlutterIcon from "../assets/flutter.png";
import SCIcon from "../assets/styled-component.png";
import TailwindIcon from "../assets/tailwind.png";

const SkillPage: React.FC = () => {
    return (
        <div className="w-screen h-screen bg-[#202020] justify-between pl-10 pr-10 flex flex-col text-start">
            {/* skills */}
            <div>
                <div className="font-leferi text-primary text-[10vh]">
                    Skills
                </div>
                <div className="font-leferi text-white text-[3.5vh]">
                    FRAMEWORK
                </div>
                {/* 이미지와 글씨 묶음 */}
                <div className="flex flex-row">
                    <img src={ReactIcon} alt="react" className="w-7 mr-2" />
                    <div className="font-pre text-white text-[2.8vh] mr-3">React</div>
                    <img src={FlutterIcon} alt="flutter" className="w-7 mr-2" />
                    <div className="font-pre text-white text-[2.8vh] mr-3">Flutter</div>
                    <img src={BootstrapIcon} alt="bootstrap" className="w-7 mr-2" />
                    <div className="font-pre text-white text-[2.8vh] mr-3">Bootstrap</div>
                    <img src={SCIcon} alt="styled" className="w-7 mr-2" />
                    <div className="font-pre text-white text-[2.8vh] mr-3">Styled-component</div>
                    <img src={TailwindIcon} alt="tailwind" className="w-7 mr-2" />
                    <div className="font-pre text-white text-[2.8vh] mr-3">Tailwind</div>
                </div>
                <div className="font-leferi text-white text-[25px]">
                    LANGUAGE
                </div>
                <div className="font-pre text-white text-[2.8vh] mb-3">
                    Dart, Typescript, Python
                </div>
                <div className="font-leferi text-white text-[3.5vh]">
                    CERTIFICATE
                </div>
                <div className="font-pre text-white text-[2.8vh]">
                    OPic IH, SQLD(SQL Developer)
                </div>
            </div>
            {/* studying */}
            <div className="text-end mb-10 justify-between">
                <div className="font-leferi text-primary text-[10vh] mt-10">
                    Studying
                </div>
                <div className="font-leferi text-white text-[3.5vh]">
                    FRAMEWORK
                </div>
                <div className="flex flex-row justify-end">
                    <div className="font-pre text-white mb-3 text-[2.8vh]">React,Vue</div>
                </div>
                <div className="font-leferi text-white text-[3.5vh]">
                    LANGUAGE
                </div>
                <div className="font-pre text-white text-[2.8vh] mb-3">
                    Javascript, Typescript
                </div>
            </div>
        </div>
    )
}
export default SkillPage;