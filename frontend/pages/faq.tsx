import TopHeader from '../modules/common/Header'
import TemplateFooter from '../modules/common/Footer'
import styled from 'styled-components';
import { Button } from "react-bootstrap";

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
                    </div>
                </FaqContainer>
            <TemplateFooter />
        </>
    )
}
export default Faq;
