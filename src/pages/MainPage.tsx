import React from "react";
import { SectionsContainer, Section } from 'react-fullpage';
import ListPage from "./ListPage";
import AboutMe from "./AboutMe";
import SkillPage from "./SkillPage";
import Portfolio from "./Portfolio";
import ContactMe from "./ContactMe";

const FullPage:React.FC=()=>{
    const options={
        anchors:['1','2','3','4','5'],
        arrowNavigation: true,
        delay:1500,
        navigation:false,
        scrollBar:false,
        
    };
    return(
        <SectionsContainer {...options}>
            <Section>
                <ListPage/>
            </Section>
            <Section>
                <AboutMe/>
            </Section>
            <Section>
                <SkillPage/>
            </Section>
            <Section>
                <Portfolio/>
            </Section>
            <Section>
                <ContactMe/>
            </Section>
        </SectionsContainer>
    );
}
export default FullPage;