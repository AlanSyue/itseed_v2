import TopHeader from '../modules/common/Header';
import TemplateFooter from '../modules/common/Footer';
import TopTitle from "../modules/common/Title";
import ContentBlock from "../modules/common/Content";
import styled from 'styled-components';

const RegInfoDiv = styled.div`
    display: block;
    padding: 0;
    margin: 0;
    font-family: 'Noto Sans TC',Roboto;
    line-height: 2;
    color: #333;
`;

const RegCounter = styled.div`
    padding: 50px 0;
    width: 100%;
    display: block;
    font-weight: 100;
    text-align: center;
    background-color: #145488;
    font-size: 30px;
    margin: 0;
    font-family: 'Noto Sans TC',Roboto;
    line-height: 2;

    h1 {
        color: white;
        font-family: '微軟正黑體';
        font-size: 36px;
        font-weight: 500;
        line-height: 1.1;
        margin: .67em 0;
        padding: 0;
    }

    .counter-block {
        padding: 10px;
        border-radius: 3px;
        background: #145488;
        display: inline-block;
        width: 23%;
    }

    .counter-block span {
        padding: 15px;
        border-radius: 3px;
        color: #fff;
        font-weight: 700;
        font-size: 48pt;
        display: inline-block;
        margin: 0;
        font-family: 'Noto Sans TC',Roboto;
        line-height: 2;
        box-sizing: border-box;
        text-align: center;
    }

    .counter-text {
        padding-top: 5px;
        font-size: 26px;
        color: #fff;
        text-align: center;
        font-weight: 700;
    }
`;

const ContentBlockCenter = styled(ContentBlock)`
    text-align: center;
`;

const RegInfoDetailDiv = styled.div`
    width: 750px;
    height: 1000px;
    margin-top: 60px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: 10%;
    margin-left: 15%;
    text-align: center;
    padding: 0;
    font-family: 'Noto Sans TC',Roboto;
    line-height: 2;

    .title-block {
        text-align: center;
        margin: 15px 0;
        width: 33.33333333%;
        float: left;
    }

    .title-block span {
        padding: 5px 10px;
        border: 1px solid #145488;
        font-size: 16pt;
        color: #145488;
        margin: 0;
        font-family: 'Noto Sans TC',Roboto;
        line-height: 2;
    }

    p {
        text-align: left;
        margin: 15px 0;
        font-size: 16pt;
        width: 66.66666667%;
        float: left;
    }
`;

const RegInfo = () => {
    return (
        <>
        <TopHeader />
            <RegInfoDiv>
                <RegCounter>
                    <h1>報名已經截止</h1>
                    <div className="counter-block">
                        <span>0</span>
                        <div className="counter-text">Days</div>
                    </div>
                    <div className="counter-block">
                        <span>0</span>
                        <div className="counter-text">Hours</div>
                    </div>
                    <div className="counter-block">
                        <span>0</span>
                        <div className="counter-text">Minutes</div>
                    </div>
                    <div className="counter-block">
                        <span>0</span>
                        <div className="counter-text">Seconds</div>
                    </div>
                </RegCounter>
                <TopTitle title="招生訊息" marginBottom="5%" />
                <ContentBlockCenter>
                    <h2>「勇敢成就平凡的自己！ 」</h2>
                </ContentBlockCenter>
                <RegInfoDetailDiv>
                    
                        <div className="title-block">
                            <span>- 培訓時間 -</span>
                        </div>
                        <p>2020 年 9 月 ~ 2021 年 8 月</p>
                        <div className="title-block">
                            <span>- 培訓地點 -</span>
                        </div>
                        <p>新北市電腦商業同業公會</p>
                        <div className="title-block">
                            <span>- 培訓費用 -</span>
                        </div>
                        <p>一年 2000 元</p>
                        <div className="title-block">
                            <span>- 報名資格 -</span>
                        </div>
                        <p>升大二至升碩一之全台大專院校學生，不限科系</p>
                        <div className="title-block">
                            <span>- 報名時間 -</span>
                        </div>
                        <p>2020/06/06（六）00:00   至   2020/07/17（五）23:59</p>
                        <div className="title-block">
                            <span>- 甄選流程 -</span>
                        </div>
                        <p>資料初審 → 公布面試名單（7/24） → 團體面試（8/2） → 公布錄取（8/8）</p>
                    
                </RegInfoDetailDiv>
            </RegInfoDiv>
        <TemplateFooter />
        </>
    );
}
export default RegInfo;
