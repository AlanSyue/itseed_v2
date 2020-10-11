import TopHeader from '../modules/common/Header'
import TemplateFooter from '../modules/common/Footer'
import ProjectBanner from '../modules/common/Project/ProjectBanner';
import TopTitle from "../modules/common/Title";
import styled from 'styled-components';

const CorpContainer = styled.div`
    width: 60%;
    margin: 0 auto;
    padding: 10px 0;

    .main-concept {
        max-width: 100%;
        padding: 25px;
        margin: 0 auto;
        margin-bottom: 30px;
        border-width: 2px;
        border-style: solid;      
        border-color: #00a0e8;  
    }

    .main-concept h2 {
        font-size: 20px;
        color: #00a0e8;
        font-family: inherit;
        font-weight: 500;
        line-height: 1.1;
    }

    .main-concept p {
        font-size: 18px;
        color: #00a0e8;
        padding: 0;
        margin: 0;
        font-family: 'Noto Sans TC',Roboto;
        line-height: 2;
        color: #333;
    }
`;

const CorpVisit = () => {
    const bannerList = [
        '企業參訪',
        'Google',
        'ogilvy'
    ];
    return (
        <>
            <TopHeader />
                <ProjectBanner bannerList={bannerList}/>
                <TopTitle title="企業參訪" marginBottom="8%" />
                <CorpContainer>
                    <div className="main-concept">
                        <h2>參訪宗旨</h2>
                    <p>
                        透過不同產業的企業參訪，了解各產業的趨勢，並藉此深入接觸企業文化、職場環境、公司發展與未來規劃。讓學員能更貼近職場，
                        也更能增進對未來職涯探索的規劃。
                    </p>
                    </div>
                </CorpContainer>
            <TemplateFooter />
        </>
    )
}
export default CorpVisit;
