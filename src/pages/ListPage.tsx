import React from "react";
import Button from "../components/Button";

const ListPage: React.FC=()=>{
    return(
        <div>
            {/* 왼쪽 목록 버튼들 */}
            <div className="flex flex-col flex-start">
                <Button title="about me" navigate_page="/about"/>
                <Button title="skills & studing" navigate_page="/skill"/>
                <Button title="portfolio" navigate_page="/portfolio"/>
                <Button title="contact" navigate_page="/contact"/>

            </div>
        </div>
    );
};

export default ListPage;