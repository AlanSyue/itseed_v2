import TopHeader from '../modules/common/Header';
import TemplateFooter from '../modules/common/Footer';
import TopTitle from "../modules/common/Title";
import styled from 'styled-components';
import { Button } from "react-bootstrap";

const SharingContent = styled.div`
    width: 80%;
    margin: 0 auto;
    color: #000;
    padding: 0;
    font-family: 'Noto Sans TC',Roboto;
    line-height: 2;

    h2 {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        color: rgb(51, 51, 51);
        font-size: 32px;
        line-height: 2;
    }

    h4 {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        color: rgb(51, 51, 51);
        font-size: 18px;
        margin-top: 10px;
        margin-bottom: 10px;
        font-weight: 500;
        line-height: 1.1;
    }

    .content {
        width: 80%;
        margin: 0 auto;
        margin-bottom: 100px;
    }

    .content p {
        margin: 48px 0;
        font-size: 24px;
        line-height: 1.71;
        letter-spacing: .7px;
        color: #00a0e8;
    }

    .sharing-part {
        margin: 28px 0;
    }

    .sharing-part h3 {
        font-size: 20px;
        font-weight: 700;
        line-height: 2;
        letter-spacing: .7px;
        margin: 28px 0;
    }

    .sharing-part p {
        font-size: 18px;
        line-height: 2;
        letter-spacing: .6px;
        margin: 20px 0;
    }

    .sharing-part li {
        font-family: "Courier New";
        font-size: 18px;
    }
`;

const BackButtonBlock = styled.div`
    margin-bottom: 10%;
    text-align: center;
    padding: 0;
    margin: 0;
    font-family: 'Noto Sans TC',Roboto;
    line-height: 2;
`;

const BackButton = styled(Button)`
    padding: 10px 16px;
    font-size: 18px;
    line-height: 1.3333333;
    border-radius: 6px;
    color: #333;
    background-color: #fff;
    border-color: #ccc;
`;

const InternSharing = () => {
    return (
        <>
            <TopHeader />
                <TopTitle title="實習心得" marginBottom="8%" />
                <SharingContent>
                    <h2>蔡珮歆 | Mixxin 群眾集資顧問專員</h2>
                    <h4>Mentor ：7th 王大皓 學長</h4>
                    <div className="content">
                        <p>
                            「每當在後台看到自己用心寫的文字觸及到幾千人、開信率和 CPL 又有多少，都在在體認到行銷是非常真槍實彈的歷程，文字的運用、
                            操作的策略是否奏效都會直接反映在數字上。」
                        </p>
                    </div>
                    <div className="sharing-part">
                        <h3>
                            ｜體驗內容｜
                        </h3>
                        <p>
                            <ol>
                                <li>每週 20 小時進公司工作</li>
                                <li>廣告投放</li>
                                <li>文案撰寫</li>
                                <li>協助部分客服了解消費者需求</li>
                                <li>顧問前期養成訓練</li>
                            </ol>
                        </p>
                        <h3>
                            ｜成長與收穫｜
                        </h3>
                        <p>
                            我申請的職涯體驗是 Mixxin 一起實驗 的群眾集資顧問專員，其實這個職位也算是種 PM（Project Manager），每人身上同時會有好幾個集資專案在進行，每個專案有不同的時程。專案感覺就像自己的孩子，從懷孕、出生到長大對應到集資前、中、後，都是由同個 PM 一手孕育、拉拔長大，看見自己負責的產品得到不錯的集資成績，一定也會感到快樂和欣慰。
                        </p>
                        <p>
                            ＊本文節錄自 Judy Tsai 部落格
                        </p>
                    </div>
                </SharingContent>
                <BackButtonBlock>
                    <BackButton 
                        variant="outline-secondary"
                        href="/intern"
                    >
                        Back
                    </BackButton>
                </BackButtonBlock>
            <TemplateFooter />    
        </>
    );
}
export default InternSharing;
