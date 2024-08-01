import React from "react";
import ModalButton from "../components/ModalButton";
// import Modal from "../components/Modal";




const Portfolio: React.FC = () => {
    return (
        <div className="w-screen h-screen bg-secondary flex flex-col p-10">
            {/* <Modal /> */}
            <div>
                <div className="font-mabeop text-primary text-end mb-20 sm:mb-2">
                    <div className=" text-[12vh]">PORTFOLIO</div>
                </div>
                <div className="flex flex-row justify-center font-leferi text-white text-[6vh] ">
                    <div className="flex flex-col items-center">
                        <div className="break-words">TEAM <br/> PROJECT</div>
                        <div className="flex flex-col">
                            <div className="flex justify-between">
                                <ModalButton title="그린패스" type="APP" detail="친환경 여행앱" color="white" url="https://www.notion.so/Green-Path-997fe13c87ac4b0cb50116970ae12e51?pvs=4"></ModalButton>
                                <ModalButton title="에브리뷰" type="APP" detail="리뷰 통합앱" color="primary" url="https://www.notion.so/e5eabdf744824a53a7f6eff68108a9fb?pvs=4"></ModalButton>
                            </div>
                            <div className="flex justify-between flex-row">
                                <ModalButton title="해커톤" type="APP" detail="친환경 정보제공 앱" color="primary" url="https://www.notion.so/MOO-3b584fbc4e2b4cfcbc232b16a05153bb?pvs=4"></ModalButton>
                                <ModalButton title="FIX IT" type="WEB" detail="이슈 트래커" color="white" url="https://www.notion.so/FIX-IT-2658104341d84f60a96a9508aaf57da6?pvs=4"></ModalButton>
                            </div>
                            <div className="flex justify-between flex-row">
                                <ModalButton title="WAAAM" type="APP" detail="반복학습 도움앱" color="white" url="https://www.notion.so/waaam-652cf90ffa704384bf87e6359c43d0cf?pvs=4"></ModalButton>
                                <ModalButton title="openCV 프로젝트" type="program" detail="색약인을 위한 프로그램" color="primary" url="https://slender-silicon-607.notion.site/8251737b8a5b48eaba225088042e8b6a?pvs=4"></ModalButton>
                                {/* <ModalButton title="" type="WEB" detail="" color="primary"></ModalButton> */}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="break-words text-center">SINGLE<br/>PROJECT</div>
                        <div className="flex flex-col">
                            <ModalButton title="럭키 디저트" type="WEB" detail="가게 정보 링크 모음" color="white" url="https://www.notion.so/lucky-dessert-0abeff419e484bf9adc8200c30feddd1?pvs=4"></ModalButton>
                            <ModalButton title="포트폴리오" type="WEB" detail="자기소개 페이지" color="primary" url="https://www.notion.so/ver-1-94cc5883a3aa40298dcbabc9ec2c17c8?pvs=4"></ModalButton>
                            {/* <ModalButton title="" type="APP" detail="" color="white"></ModalButton> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Portfolio;