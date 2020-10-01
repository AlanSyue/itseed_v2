import TopHeader from '../modules/common/Header'
import TemplateFooter from '../modules/common/Footer'
import ProjectBanner from '../modules/common/Project/ProjectBanner';
import ProjectTitle from '../modules/common/Project/ProjectTitle';
import ContentBlock from '../modules/common/Content';
import ProjectContentTitle from '../modules/common/Project/ProjectContent';
import styled from 'styled-components';

const ProjectContainer = styled.div`
    width: 60%;
    margin: 74px auto 150px;
`;

const ProjectContentDiv = styled.div`
    padding: 0 40px;
    font-size: 18px;
    line-height: 2;
    letter-spacing: .6px;
    margin: 0;
    font-family: 'Noto Sans TC',Roboto;
    box-sizing: border-box;
    display: block;
`;

const Project = () => {
    return (
        <>
        <TopHeader />
            <ProjectBanner />
            <ProjectTitle title="TUV 專案" marginBottom="5%" />
            <ContentBlock align="center" fontSize="29.5">
                「不把手弄髒，怎麼知道一群人的力量可以多強大？」
            </ContentBlock>
            <ProjectContainer>
                <ProjectContentTitle>
                    專案宗旨
                </ProjectContentTitle>
                <ProjectContentDiv>
                    <p>
                        專案全名 — Top Up the Value <br />
                        各小組透過觀察生活周遭及社會現象，從生活中感觸最深的社會議題找出待解決的問題。 <br />
                        在有限的時間與資源下，各組的夥伴齊心透過社會創新的方式， 突破舊有思維，融入資訊、科 <br />
                        技、人脈，並結合現有的資源， 不僅僅是從零到一，而是從一到一百， 設計出一個可行的解決 <br />
                        方案， 實際執行並推廣其蘊含的價值理念。 <br />
                        ※18屆此專案將從解決社會議題延伸調為解決企業問題※
                    </p>
                </ProjectContentDiv>
                <ProjectContentTitle>
                    專案內容
                </ProjectContentTitle>
            </ProjectContainer>
        <TemplateFooter />
        
        </>
    );
}
export default Project;
