import React from "react";
import Button from "../components/Button";
import ScrollEmp from '../assets/scroll_emp.png';

const ListPage: React.FC= () => {
  return (
    <div className="relative p-10 sm:p-5 w-screen h-screen justify-between bg-primary">
      {/* 왼쪽 목록 버튼-좌측 상단 배치 */}
      <div className="absolute top-0 left-0 flex flex-col space-y-4 ">
        <Button title="about me" navigate_page="/about" />
        <Button title="skills & studing" navigate_page="/skill" />
        <Button title="portfolio" navigate_page="/portfolio" />
        <Button title="contact" navigate_page="/contact" />
      </div>
      {/* 이름-우측하단 배치 */}
      <div className="absolute right-0 top-0">
        <div className="relative h-screen flex flex-col font-mabeop justify-end text-[170px] max-2xl:text-[110px] text-end">
          <span
            className="z-0 absolute text-white"
            style={{ right: "4rem", bottom: "7rem" }}
          >
            <div>JAE</div>
            <div>YEON</div>
            <div>MIN</div>
          </span>
          <span
            className="z-10 absolute text-black"
            style={{ right: "3rem", bottom: "6rem" }}>
            <div>JAE</div>
            <div>YEON</div>
            <div>MIN</div>
          </span>
          <div
            className="font-leferi text-white text-[60px] absolute max-sm:text-[50px]" style={{right:"3rem", bottom:"5rem", whiteSpace:"nowrap"}}>
            Frontend Developer
          </div>
        </div>
      </div>
      <div className="animate-actSlideTop flex flex-col absolute bottom-1 left-1/2">
        <div className="font-mabeop text-[25px] text-[#BDB899]">scroll</div>
        <img src={ScrollEmp} alt="scroll_emp" className="h-[44.44px] w-[69px]"/>
      </div>
    </div>
  );
};

export default ListPage;
