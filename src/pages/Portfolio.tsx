import React from "react";
import ModalButton from "../components/ModalButton";
// import Modal from "../components/Modal";




const Portfolio: React.FC = () => {
    return (
        <div className="w-screen h-screen bg-secondary flex flex-col p-10">
            {/* <Modal /> */}
            <div>
                <div className="font-mabeop text-primary text-end mb-20 sm:mb-2">
                    <div className=" text-[80px]">PORTFOLIO</div>
                    <a href="https://slender-silicon-607.notion.site/5849754feb0444b6a975c5c7ec9dc477" className="text-primary font-sans text-[25px] underline" target="_blank" rel="noopener noreferrer">
                        프로젝트 정리 링크 바로가기(Click Me)
                    </a>
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
                                <ModalButton title="해커톤" type="APP" detail="친환경 정보제공 앱" color="primary"></ModalButton>
                                <ModalButton title="FIX IT" type="WEB" detail="이슈 트래커" color="white"></ModalButton>
                            </div>
                            <div className="flex justify-between flex-row">
                                <ModalButton title="WAAAM" type="APP" detail="반복학습 도움앱" color="white"></ModalButton>
                                {/* <ModalButton title="" type="WEB" detail="" color="primary"></ModalButton> */}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="break-words max-w-[250px] text-center">SINGLE PROJECT</div>
                        <div className="flex flex-col">
                            <ModalButton title="럭키 디저트" type="WEB" detail="가게 정보 링크 모음" color="white"></ModalButton>
                            <ModalButton title="포트폴리오" type="WEB" detail="자기소개 페이지" color="primary"></ModalButton>
                            {/* <ModalButton title="" type="APP" detail="" color="white"></ModalButton> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Portfolio;