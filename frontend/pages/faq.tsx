import TopHeader from '../modules/common/Header'
import TemplateFooter from '../modules/common/Footer'
import styled from 'styled-components';

const FaqContainer = styled.div`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-top: 10%;
    padding: 0;
    font-family: 'Noto Sans TC',Roboto;
    line-height: 2;

    .title-button {
        text-align: center;
        margin: 36px 0;
    }

    .title-button span {
        text-align: center;
        margin: 36px 0;
        padding: 8px 40px;
        color: #1d2b53;
        border-color: #1d2b53;
        border-width: 1px;
        border-style: solid;
        font-size: 28px;
    }

    .faq-container {
        margin-left: 16.66666667%;
        width: 66.66666667%;
        display: block;
        padding: 6px 15px;
        color: #205686;
        font-size: 20px;
        border-left-style: solid;
        border-left-color: #205686;
        border-left-width: 7px;
    }

    .faq-container .arrow {
        display: inline;
        float: right;
        transform: rotate(0deg);
        transition: transform .5s;
    }

    .arrow img {
        height: 10px;
    }

    .faq-contet {
        display: block;
        visibility: visible;
        padding: 20px 24px 20px 32px;
        color: #222;
        background-color: #fff;
        font-size: 20px;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,.5);
        margin: 0;
        font-family: 'Noto Sans TC',Roboto;
        line-height: 2;
    }

    .faq-contet p {
        font-size: 18px;
        color: rgb(0, 0, 0);
        transform: rotate(0deg);
        transition: transform .5s;
        padding: 0;
        margin: 0;
        font-family: 'Noto Sans TC',Roboto;
        line-height: 2;
    }

    .faq-contet ul {
        margin: 0;
        padding: 0;
        font-family: 'Noto Sans TC',Roboto;
        line-height: 2;
    }

    .faq-contet li {
        font-size: 18px;
        color: rgb(8, 82, 148);
        transform: rotate(0deg);
        transition: transform .5s;
        margin-left: 50px;
    }

    .faq-contet li:marker {
        unicode-bidi: isolate;
        font-variant-numeric: tabular-nums;
        text-transform: none;
    }
`;

const FaqAskMethod = styled.div`
    border: 2px solid #205686;
    padding: 15px 20px;
    margin: 40px auto;
    max-width: 600px;
    font-size: 18px;
    background-color: #fff;
    font-family: 'Noto Sans TC',Roboto;
    line-height: 2;

    p {
        padding: 0;
        margin: 0;
        font-family: 'Noto Sans TC',Roboto;
        line-height: 2;
    }
`;

const Faq = () => {
    return (
        <>
            <TopHeader />
                <FaqContainer>
                    <div className="title-button">
                        <span>常見問題</span>
                    </div>
                    <div className="faq-container">
                        <span>Q1. 為什麼會有資訊種子培訓計畫的出現？</span>
                        <span className="arrow">
                            <img src="/assets/layout/triangle.png" />
                        </span>
                        <div className="faq-contet">
                            <p>
                                資訊種子培訓計劃是由新北市電腦商業同業公會所籌劃，以公會豐富的業界資源，包括具寶貴實務經驗的講師以及直接到業界實習的機會等，
                                讓有興趣投入 IT 產業的青年學子成為業界所需的資訊精英人才。培訓計劃透過
                            </p>
                            <ul>
                                <li>接觸多元人才彼此相互學習</li>
                                <li>實作專案激發自己的潛力</li>
                                <li>經歷海外參訪連結夥伴情誼開拓視野</li>
                                <li>找到未來創業就業夥伴</li>
                                <li>走訪企業實地了解連結學界與業界</li>
                            </ul>
                        </div>
                    </div>
                </FaqContainer>
                <FaqAskMethod>
                    <p>
                        如有任何其他相關問題，請私訊
                        <a href="https://www.facebook.com/iloveitseed" target="_blank"> 資訊種子粉絲專頁</a>，
                        或寄信至ITseed信箱(itseed18th@gmail.com)，將由專人為您解答
                    </p>
                </FaqAskMethod>
            <TemplateFooter />
        </>
    )
}
export default Faq;
