import React from "react";
import mypicture from "../assets/jym.png"

const ContactMe: React.FC = () => {
    return (
        <div className="h-screen w-screen bg-[#202020] flex flex-col pl-10 justify-between">
            <div>
                <div className="font-leferi text-[#F6F0CF] text-[100px] text-start">
                    contact
                </div>
                <div className="flex flex-row">
                    <div className="w-[250px] mr-5">
                        <img src={mypicture} alt="jym" />
                    </div>
                    <div>
                        <div className="font-leferi text-white text-[30px] text-start mb-1">
                            EMAIL
                        </div>
                        <div className="font-pre text-white text-[20px] mb-8 text-start">
                            min10909@naver.com
                        </div>
                        <div className="font-leferi text-white text-[30px] text-start mb-1">
                            GITHUB
                        </div>
                        <a href="https://github.com/jymin99  " target="_blanck " className="font-pre text-white text-[20px] text-start hover:text-white">
                            https://github.com/jymin99
                        </a>
                        <div className="font-leferi text-white text-[30px] text-start mt-8 mb-1">
                            PHONE
                        </div>
                        <div className="font-pre text-white text-[20px] mb-8 text-start">
                            010-5910-7237
                        </div>
                    </div>
                </div>
            </div>
            <div className="font-leferi text-white text-[20px] text-end justify-end mb-10 mr-10">
                THANK YOU FOR WATCHING
            </div>
        </div>
    );
};
export default ContactMe;