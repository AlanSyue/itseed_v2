import TopHeader from '../modules/common/Header'
import TemplateFooter from '../modules/common/Footer'
import TopTitle from "../modules/common/Title";
import ContentBlock from "../modules/common/Content";
import styled from 'styled-components';
import { Button } from "react-bootstrap";

const InternContainer = styled.div`
    width: 65%;
    padding-right: 15px;
    padding-left: 15px;
    padding: 0;
    margin: 0 auto;
    margin-top: 2%;
    font-family: 'Noto Sans TC',Roboto;
    line-height: 2;
    box-sizing: border-box;
    display: block;
    font-size: 14px;
    color: #333;

    .select-button-block {
        text-align: center;
    }

    .intern-block {
        padding: 5%;
        background-color: #fff;
        margin: 18px auto;
        transition: all .2s;
        cursor: pointer;
        box-shadow: 2px 3px 6px 0 #9b9b9b;
    }

    .intern-block a {
        color: #000000; 
        text-decoration: none
    }

    .inter-block-img-div {
        padding-right: 40px;
        overflow: hidden;
        min-height: 150px;
        width: 33.33333333%;
        float: left;
    }

    .inter-block-img-div img {
        width: auto;
        height: auto;
    }

    .inter-block-text-div {
        padding-left: 28px;
        width: 100%;
    }

    .inter-block-text-div h2 {
        line-height: 36px;
        font-size: 20px;
        font-weight: 700;
        letter-spacing: .7px;
        padding: 0;
        margin: 0;
    }

    .inter-block-text-div p {
        font-size: 14px;
        line-height: 1.71;
        letter-spacing: .5px;
        color: #4a4a4a;
        padding: 7px 0;
        margin: 0;
        font-family: 'Noto Sans TC',Roboto;
    }
`;

const SelectButton = styled(Button)`
    padding-left: 1vw;
    padding-right: 1vw;
    border: solid 1px;
    font-size: 15px;
    margin-bottom: 5vh;
    margin-right: 1%;
    margin-left: 1%;
    padding: 10px 16px;
    line-height: 1.3333333;
    border-radius: 6px;
    color: #333;
    background-color: #fff;
    cursor: pointer;
`;

const Intern = () => {
    return (
        <>
            <TopHeader />
                <TopTitle title="實習心得" marginBottom="5%" />
                <ContentBlock>
                    <p>
                        由業界不同產業的學長姐提供實習職缺，讓學員進公司實習及體驗公司文化， 亦有學長姐提供個人指導機會，利用下班後時間指導學員，
                        透過 Mentor 帶領的制度，提升學員職場軟硬實力，同時增進跨屆交流。
                    </p>
                </ContentBlock>
                <InternContainer>
                        <div className="select-button-block">
                            <SelectButton variant="outline-dark">
                                公司實習
                            </SelectButton>
                            <SelectButton variant="outline-dark">
                                個人指導
                            </SelectButton>
                        </div>
                        <div className="intern-block">
                            <a href="/internSharing">
                                <div className="inter-block-img-div">
                                    <img src="/assets/career/0084340f-8d31-4511-bcb7-0bf2a4f5fbd2.png" />
                                </div>
                                <div className="inter-block-text-div">
                                    <h2>蔡珮歆 | Mixxin 群眾集資顧問專員</h2>
                                    <p>
                                        每當在後台看到自己用心寫的文字觸及到幾千人、開信率和 CPL（Cost-Per-Lead） 又有多少，都在在體認到行銷是非常真槍實彈的歷程，
                                        文字的運用、操作的策略是否奏效都會直接反映在數字上。
                                    </p>
                                </div>
                            </a>
                        </div>
                        <div className="intern-block">
                            <div className="inter-block-img-div">
                                <img src="/assets/career/0084340f-8d31-4511-bcb7-0bf2a4f5fbd2.png" />
                            </div>
                            <div className="inter-block-text-div">
                                <h2>蔡珮歆 | Mixxin 群眾集資顧問專員</h2>
                                <p>
                                    每當在後台看到自己用心寫的文字觸及到幾千人、開信率和 CPL（Cost-Per-Lead） 又有多少，都在在體認到行銷是非常真槍實彈的歷程，
                                    文字的運用、操作的策略是否奏效都會直接反映在數字上。
                                    </p>
                            </div>
                        </div>
                        <div className="intern-block">
                            <div className="inter-block-img-div">
                                <img src="/assets/career/0084340f-8d31-4511-bcb7-0bf2a4f5fbd2.png" />
                            </div>
                            <div className="inter-block-text-div">
                                <h2>蔡珮歆 | Mixxin 群眾集資顧問專員</h2>
                                <p>
                                    每當在後台看到自己用心寫的文字觸及到幾千人、開信率和 CPL（Cost-Per-Lead） 又有多少，都在在體認到行銷是非常真槍實彈的歷程，
                                    文字的運用、操作的策略是否奏效都會直接反映在數字上。
                                        </p>
                            </div>
                        </div>
                        <div className="intern-block">
                            <div className="inter-block-img-div">
                                <img src="/assets/career/0084340f-8d31-4511-bcb7-0bf2a4f5fbd2.png" />
                            </div>
                            <div className="inter-block-text-div">
                                <h2>蔡珮歆 | Mixxin 群眾集資顧問專員</h2>
                                <p>
                                    每當在後台看到自己用心寫的文字觸及到幾千人、開信率和 CPL（Cost-Per-Lead） 又有多少，都在在體認到行銷是非常真槍實彈的歷程，
                                    文字的運用、操作的策略是否奏效都會直接反映在數字上。
                                            </p>
                            </div>
                        </div>
                        <div className="intern-block">
                            <div className="inter-block-img-div">
                                <img src="/assets/career/0084340f-8d31-4511-bcb7-0bf2a4f5fbd2.png" />
                            </div>
                            <div className="inter-block-text-div">
                                <h2>蔡珮歆 | Mixxin 群眾集資顧問專員</h2>
                                <p>
                                    每當在後台看到自己用心寫的文字觸及到幾千人、開信率和 CPL（Cost-Per-Lead） 又有多少，都在在體認到行銷是非常真槍實彈的歷程，
                                    文字的運用、操作的策略是否奏效都會直接反映在數字上。
                                    </p>
                            </div>
                        </div>
                        <div className="intern-block">
                            <div className="inter-block-img-div">
                                <img src="/assets/career/0084340f-8d31-4511-bcb7-0bf2a4f5fbd2.png" />
                            </div>
                            <div className="inter-block-text-div">
                                <h2>蔡珮歆 | Mixxin 群眾集資顧問專員</h2>
                                <p>
                                    每當在後台看到自己用心寫的文字觸及到幾千人、開信率和 CPL（Cost-Per-Lead） 又有多少，都在在體認到行銷是非常真槍實彈的歷程，
                                    文字的運用、操作的策略是否奏效都會直接反映在數字上。
                                        </p>
                            </div>
                        </div>
                        <div className="intern-block">
                            <div className="inter-block-img-div">
                                <img src="/assets/career/0084340f-8d31-4511-bcb7-0bf2a4f5fbd2.png" />
                            </div>
                            <div className="inter-block-text-div">
                                <h2>蔡珮歆 | Mixxin 群眾集資顧問專員</h2>
                                <p>
                                    每當在後台看到自己用心寫的文字觸及到幾千人、開信率和 CPL（Cost-Per-Lead） 又有多少，都在在體認到行銷是非常真槍實彈的歷程，
                                    文字的運用、操作的策略是否奏效都會直接反映在數字上。
                                            </p>
                            </div>
                        </div>
                        <div className="intern-block">
                            <div className="inter-block-img-div">
                                <img src="/assets/career/0084340f-8d31-4511-bcb7-0bf2a4f5fbd2.png" />
                            </div>
                            <div className="inter-block-text-div">
                                <h2>蔡珮歆 | Mixxin 群眾集資顧問專員</h2>
                                <p>
                                    每當在後台看到自己用心寫的文字觸及到幾千人、開信率和 CPL（Cost-Per-Lead） 又有多少，都在在體認到行銷是非常真槍實彈的歷程，
                                    文字的運用、操作的策略是否奏效都會直接反映在數字上。
                                                </p>
                            </div>
                        </div>
                </InternContainer>
            <TemplateFooter />
        </>
    );
}
export default Intern;
