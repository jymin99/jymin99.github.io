import React from "react";
import ModalButton from "../components/ModalButton";

const Portfolio: React.FC = () => {
    return (
        <div className="w-screen h-screen bg-secondary flex flex-col p-10">
            <div>
                <div className="font-mabeop text-primary text-[80px] text-end mb-20">
                    PORTFOLIO
                </div>
                <div className="flex flex-row justify-center font-leferi text-white text-[40px] ">
                    <div className="flex flex-col items-center">
                        <div className="break-words max-w-[250px]">TEAM PROJECT</div>
                        <div className="flex flex-col">
                            <div className="flex justify-between">
                                <ModalButton title="그린패스" type="APP" detail="친환경 여행앱" color="white"></ModalButton>
                                <ModalButton title="에브리뷰" type="APP" detail="리뷰 통합앱" color="primary"></ModalButton>
                            </div>
                            <div className="flex justify-between flex-row">
                                <ModalButton title="쩨로" type="APP" detail="친환경 여행앱" color="primary"></ModalButton>
                                <ModalButton title="FIX IT" type="WEB" detail="이슈 트래커" color="white"></ModalButton>
                            </div>
                            <div className="flex justify-between flex-row">
                                <ModalButton title="MOO" type="APP" detail="대체육 정보 제공 앱" color="white"></ModalButton>
                                <ModalButton title="FIX IT" type="WEB" detail="반복학습 도움앱" color="primary"></ModalButton>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="break-words max-w-[250px] text-center">SINGLE PROJECT</div>
                        <div className="flex flex-col">
                            <ModalButton title="럭키 디저트" type="WEB" detail="가게 정보 링크 모음" color="white"></ModalButton>
                            <ModalButton title="포트폴리오" type="WEB" detail="자기소개 페이지" color="primary"></ModalButton>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Portfolio;