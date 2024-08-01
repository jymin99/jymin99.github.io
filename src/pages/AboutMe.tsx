import React from "react";

const AboutMe: React.FC = () => {
    return (
        <div className="w-screen h-screen bg-secondary flex justify between flex-col p-10">
            {/* 이름부분 */}
            <div className="flex flex-start flex-col text-end items-end justify-end text-primary text-[14vh]">
                <div className=" font-mabeop">
                    <div>ABOUT</div>
                    <div>ME</div>
                </div>
                <div className="max-w-[350px] break-word font-pre text-[#F6F0CF] text-[2.5vh] mb-10">
                    #협업에 자신있는 #팔로워성향 #유연한 사고 #계속해서 공부하는 #긍정적인
                </div>
            </div>
            {/* 설명부분*/}
            <div className="flex flex-col text-start flex-end mt-auto">
                <div className="text-primary font-pre font-bold text-[3vh] ">
                    프론트엔드 개발에 빠지다
                </div>
                <div className="max-w-[1000px] break-word text-[#F6F0CF] text-[2.3vh] mb-10 sm:mb-2">
                    관심있는 주제를 서비스로 구체화시키고 디자인한 것을 직접 개발을 통해 앱이나 웹같은 화면에 스스로 그려나가는 과정이 재밌어 프론트엔드를 공부하게 되었습니다.
                </div>
                <div className="text-primary font-pre font-bold text-[3vh]">
                    가치관은 책임감
                </div>
                <div className="max-w-[1000px] break-word text-[#F6F0CF] text-[2.3vh] mb-10 sm:mb-2">
                    가장 중요하게 생각하는 것은 책임감입니다. 협업에서의 모든 태도는 책임감의 정도에서 나온다고 생각합니다. 따라서 모두가 각자의 책임감을 다했을 때 원활한 협업이 이루어진다고 생각하기 때문에 제가 가장 중요시하는 가치관은 책임감입니다.
                </div>
                <div className="text-primary font-pre font-bold text-[3vh]">
                    팀의 조화와 분위기를 중요시하는 팔로워
                </div>
                <div className="max-w-[1000px] break-word text-[#F6F0CF] text-[2.3vh]">
                    협업에서 중요시하는 것은 서로를 향한 존중, 조화, 분위기라고 생각합니다. 저의 성향중 하나가 사람 하나하나의 성격을 파악해 적절한 대화와 유머감각으로 분위기를 만드는 것입니다. 이러한 성향이 팔로워로서 잘 부각돼 팀의 분위기를 좋게 이끌어간다고 생각합니다.
                </div>
            </div>
        </div>
    );
}
export default AboutMe;