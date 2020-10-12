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

    .detail {
        max-width: 1000px;
        padding: 8px 0;
        margin: 20px auto;
        border-width: 2px;
        font-family: 'Noto Sans TC',Roboto;
        line-height: 2;
    }

    .detail h3 {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        color: #00a0e8;
        font-size: 48px;
        line-height: 67px;
        font-weight: 700;
    }

    h4 {
        color: #00a0e8;
        font-size: 18px;
        margin-top: 10px;
        margin-bottom: 10px;
        font-family: inherit;
        font-weight: 500;
        line-height: 1.1;
        padding: 0;
        margin: 0;
    }

    .img {
        text-align: center;
    }

    img {
        width: 60%;
        margin: 20px auto;
        vertical-align: middle;
    }

    ul {
        margin: 16px 0;
        padding: 0;
        font-family: 'Noto Sans TC',Roboto;
        line-height: 2;
    }

    li {
        font-size: 18px;
        list-style-type: none;
        margin: 0;
    }

    li:nth-child(odd):before {
        content: '';
        display: inline-block;
        margin-right: 36px;
        height: 9px;
        width: 9px;
        background-color: #00a0e8;
        transform: rotate(45deg);
    }

    li:nth-child(even):before {
        content: '';
        display: inline-block;
        margin-right: 36px;
        height: 9px;
        width: 9px;
        border: 1px solid #00a0e8;
        transform: rotate(45deg);
    }

    p {
        text-indent: 2em;
        margin: 16px 0;
        font-size: 18px;
        letter-spacing: .6px;
        padding: 0;
        font-family: 'Noto Sans TC',Roboto;
        line-height: 2;
    }
`;

const RightBlock = styled.span`
    margin-left: 30px;
    background-color: #00a0e8;
    display: block;
    width: 16px;
    height: 40px;
    margin: 5px 0;
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
                    <div className="detail">
                        <h3>Google台灣<RightBlock /></h3>
                    </div>
                    <div className="introduction">
                        <h4>參訪簡介</h4>
                        <p>
                            Google 在公布今年 3 月的「Google 台灣智慧計劃」，持續朝人才、 經濟、生態系三大面向邁進，並同時釋出大量職缺，
                            預計將Google 台灣打造成亞洲最大的研發基地。 這次企參前往位於台北101的Google台灣總部，除了一探Google 舒適宜人的工作環境，
                            更把握與 內部職員互動的機會，更加了解Google 的企業文化及項目發展。
                        </p>
                    </div>
                    <div className="img">
                        <img src="/assets/layout/businessVisit_google.jpg" />
                    </div>
                    <h4>參訪筆記</h4>
                    <ul>
                        <li>可以當成目標，但不是完全夢幻</li>
                        <li>沒有約束性的上班打卡機制，考驗員工的自律能力</li>
                        <li>現在世界各地的資訊產業都很缺資管人才，資管人才一方面要理解技術層面的程式運作，一方面要懂得跟企業及客戶溝通</li>
                    </ul>
                    <div className="detail">
                        <h3>奧美<RightBlock /></h3>
                    </div>
                    <div className="introduction">
                        <h4>參訪簡介</h4>
                        <p>
                            前身為國泰建業廣告，1981 年後開始與國外奧美合作， 奧美致力於讓品牌在任何時候、與每一個消費者、在每一個相遇點，
                            都能做出溝通。 在參訪的過程中，我們了解到何謂行銷，以及在行銷過程中所必備的每一步， 
                            過程中，我們得以接觸以往未曾在課堂上遇見的產業知識，讓即使是非相關科系的資種學員們都能增添對行銷的了解。
                        </p>
                    </div>
                    <div className="img">
                        <img src="/assets/layout/businessVisit_ogilvy.jpg" />
                    </div>
                    <h4>參訪筆記</h4>
                    <p>歷年來台灣奧美一直致力於三件事：</p>
                    <ul>
                        <li>We sell or else ，幫助客戶創造銷售</li>
                        <li>提供客戶的最大價值–建立品牌</li>
                        <li>人、知識與創造力</li>
                    </ul>
                </CorpContainer>
            <TemplateFooter />
        </>
    )
}
export default CorpVisit;
