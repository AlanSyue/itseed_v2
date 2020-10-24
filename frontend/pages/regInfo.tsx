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
    width: 90%;
    height: 840px;
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

    .title-block-center {
        text-align: center;
        margin: 0 auto;
        width: 33.33333333%;
        height: auto;
    }

    .title-block-center span {
        padding: 5px 10px;
        border: 1px solid #145488;
        font-size: 16pt;
        color: #145488;
        margin: 0;
        font-family: 'Noto Sans TC',Roboto;
        line-height: 2;
    }

    .reg-info-step {
        width: 100%;
        margin: 40px;
    }
`;

const RegInfoStep = styled.div`
    color: ${props => props.color || '#00a7ba'};
    border: #00a7ba;
    text-align: center;
    width: ${props => props.borderWidth || ''};
    float: left;
    min-height: 1px;
    padding-right: 0;
    padding-left: 0;

    p {
        width: 100%;
        font-size: 14pt;
        margin-bottom: 0;
        line-height: 33px;
        color: #000;
        text-align: center;
    }

    .icon-block {
        position: relative;
        height: 180px;
        margin-bottom: 20px;
    }

    .icon {
        background-color: ${props => props.color || '#00a7ba'};
        display: inline-block;
        width: 80px;
        height: 80px;
        border-radius: 100%;
    }

    .icon img {
        margin-top: 15px;
        width: 50px;
        vertical-align: middle;
        border: 0;
    }

    .wording {
        padding: 50px 0 20px;
        top: 30px;
        left: 10%;
        display: inline-block;
        width: 80%;
        position: absolute;
        border-width: 2px;
        border-style: solid;
        z-index: -1;
        font-size: 14pt;
        font-weight: 500;
    }

    .wording p {
        width: 100%;
        margin-bottom: 5px;
        text-align: center;
        color: ${props => props.color || '#00a7ba'};
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
                        <div className="title-block-center">
                            <span>- 報名資格 -</span>
                        </div>
                        <div className="reg-info-step">
                            <RegInfoStep>
                                <div className="icon-block">
                                    <div className="icon">
                                        <img src="/assets/regInfo/01.png" />
                                    </div>
                                    <div className="wording">
                                        <p>【 STEP 1 】</p>
                                        <p>官網線上報名</p>
                                    </div>
                                </div>
                                <p>註冊並填寫基本資料</p>
                                <p>將所需資料上傳</p>
                            </RegInfoStep>
                        </div>
                        <div className="reg-info-step">
                            <RegInfoStep
                                borderWidth="30%"
                                color="#145488"
                            >
                                <div className="icon-block">
                                    <div className="icon">
                                        <img src="/assets/regInfo/02.png" />
                                    </div>
                                    <div className="wording">
                                        <p>【 STEP 2 】</p>
                                        <p>繳交報名費</p>
                                    </div>
                                </div>
                                <p>透過貝殼集器繳交報名費 100 元</p>
                                <p>至 7/20（日） 23:59 繳交完畢</p>
                            </RegInfoStep>
                        </div>
                        <div className="reg-info-step">
                            <RegInfoStep
                                color="#efb61e"
                            >
                                <div className="icon-block">
                                    <div className="icon">
                                        <img src="/assets/regInfo/02.png" />
                                    </div>
                                    <div className="wording">
                                        <p>【 STEP 3 】</p>
                                        <p>確認信件</p>
                                    </div>
                                </div>
                                <p>確認是否於繳費完</p>
                                <p>3 天內收到信件</p>
                            </RegInfoStep>
                        </div>
                </RegInfoDetailDiv>
            </RegInfoDiv>
        <TemplateFooter />
        </>
    );
}
export default RegInfo;
