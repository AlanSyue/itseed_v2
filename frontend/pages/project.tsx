import TopHeader from '../modules/common/Header'
import TemplateFooter from '../modules/common/Footer'
import ProjectBanner from '../modules/common/Project/ProjectBanner';
import ProjectTitle from '../modules/common/Project/ProjectTitle';
import ContentBlock from '../modules/common/Content';
import ProjectContentTitle from '../modules/common/Project/ProjectContent';
import ProjectTuvImg from '../modules/common/Project/ProjectTuvImg';
import ProjectBlock from '../modules/common/Project/ProjectBlock';
import styled from 'styled-components';
import { Button } from "react-bootstrap";

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

const ProjectListDiv = styled.div`
    text-align: center;
    padding: 0;
    margin: 0;
    font-family: 'Noto Sans TC',Roboto;
    line-height: 2;
    box-sizing: border-box;
    display: block;
`;

const ProjectBtn = styled(Button)`
    padding-left: 1vw;
    padding-right: 1vw;
    border: solid 1px;
    margin-left: 4vh;
    font-size: 15px;
    margin-bottom: 5vh;
    padding: 10px 16px;
    line-height: 1.3333333;
    border-radius: 6px;
    color: #333;
    background-color: #fff;
    font-family: inherit;
    text-transform: none;
    overflow: visible;
`;

const Project = () => {
    const bannerList = [
        'TUV',
        '職涯',
        '招生'
    ];
    return (
        <>
        <TopHeader />
            <ProjectBanner bannerList={bannerList} />
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
                <ProjectTuvImg />
                <ProjectContentTitle>
                    成果展現
                </ProjectContentTitle>
                <ProjectListDiv>
                    <ProjectBtn variant="outline-dark">
                        戀愛軍情局
                    </ProjectBtn>
                    <ProjectBtn variant="outline-dark">
                        談心說愛
                    </ProjectBtn>
                    <ProjectBtn variant="outline-dark">
                        新聞標題，你太誇張了喔！
                    </ProjectBtn>
                    <ProjectBtn variant="outline-dark">
                        眾獨
                    </ProjectBtn>
                    <ProjectBtn variant="outline-dark">
                        傾盆大語
                    </ProjectBtn>
                    <ProjectBlock />
                </ProjectListDiv>
            </ProjectContainer>
        <TemplateFooter />
        
        </>
    );
}
export default Project;
