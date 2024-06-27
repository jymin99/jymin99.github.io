import React from "react";
import Button from "../components/Button";

const ListPage: React.FC = () => {
    return (
        <div className="relative p-10 w-screen h-screen justify-between bg-primary">
            {/* 왼쪽 목록 버튼-좌측 상단 배치 */}
            <div className="absolute top-0 left-0 flex flex-col space-y-4">
                <Button title="about me" navigate_page="/about" />
                <Button title="skills & studing" navigate_page="/skill" />
                <Button title="portfolio" navigate_page="/portfolio" />
                <Button title="contact" navigate_page="/contact" />
            </div>
            {/* 이름-우측하단 배치 */}

            <div className="absolute right-0">
                <div className="relative flex flex-col font-mabeop text-[60px] text-end">
                    <span className="z-0 absolute text-white" >
                        <h1>JAE</h1>
                        <h1>YEON</h1>
                        <h1>MIN</h1>
                    </span>
                    <span className=" z-10 absolute text-secondary " style={{ top: '1rem', left: '1rem' }}>
                        <h1>JAE</h1>
                        <h1>YEON</h1>
                        <h1>MIN</h1>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ListPage;