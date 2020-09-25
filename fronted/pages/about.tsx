import TopHeader from '../modules/common/Header'
import TemplateFooter from '../modules/common/Footer'
import TopBlock from "../modules/About/Top";
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    display: block;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    padding: 0;
    font-family: 'Noto Sans TC',Roboto;
    line-height: 2;

    .row {
        padding: 0;
        margin: 0;
        font-family: 'Noto Sans TC',Roboto;
        line-height: 2;
    }

    .col {
        margin-left: 15%;
        margin-right: 15%;
        margin-top: 20px;
        margin-bottom: 10%;
    }

    p {
        font-family: PingFangTC-Regular;
        font-size: 22px;
        color: #000000;
    }
`;
const Description = () => {
    return (
        <Container>
            <div className="row">
                <div className="col">
                    <p>
                        資訊種子培訓計畫是<b>為期一年的「資訊素養、跨領域人才養成計畫」</b>，由新北市電腦商業同業公會於 2003 年創建。
                        主要培訓對象為不限科系的大二至碩一的各大專院校學生，學員通過書審與面試後，即可加入之培訓計畫。
                    </p>
                    <p>
                        透過<b>系統性的培訓課程、實務專案經驗累積，以及連結業界和校友社群</b>，期許結業學員從中摸索職涯、養成思維能力和熟稔科技趨勢，
                        並具備正確職場態度與累積產業人脈存摺，成為具資訊素養的跨領域人才。
                    </p>
                    <p>
                        目前培訓計畫即將邁入第十八屆，已廣納超過 500 位不同科系背景之學員，皆已投身各產業服務及創業，期待共同回歸資訊種子傳承經驗與所學，
                        <b>進而推動善意的累積與循環，創造樂於分享的世界</b>。
                    </p>
                </div>
            </div>
        </Container>
    );
}

const About = () => {
    return (
        <div>
            <TopHeader />
            <div>
                <TopBlock title="計畫簡介" />
                <Description />
            </div>
            <TemplateFooter />
        </div>
    )
}

export default About
