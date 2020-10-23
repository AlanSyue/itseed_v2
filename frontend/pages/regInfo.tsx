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
            </RegInfoDiv>
        <TemplateFooter />
        </>
    );
}
export default RegInfo;
