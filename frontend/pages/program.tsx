import TopHeader from '../modules/common/Header'
import TemplateFooter from '../modules/common/Footer'
import TopTitle from "../modules/common/Title";
import ListChain from "../modules/common/ListChain"
import CourseChain from "../modules/common/CourseChain"
import CompanyChain from "../modules/common/CompanyChain";
import ContentBlock from "../modules/common/Content";

const Program = () => {
    return (
        <>
            <TopHeader />
                <div>
                    <TopTitle title="培訓計畫內容" marginBottom="5%" />
                    <ContentBlock>
                        <p>資訊種子培訓計畫一改原先大學的授課方式， 期許學員能夠成為擁有資訊思維的跨領域人才。</p>
                        <p>
                            學員將在培訓計畫中，實際參與、執行
                            <b>3 大專案</b>，
                            參與 <b>10 堂來自業界講師的課程</b>，
                            並進行<b>數次企業參訪</b>透過種種積累成為心目中更好的自己。
                        </p>
                    </ContentBlock>
                </div>
                <div>
                    <TopTitle title="三大專案" marginBottom="6%" />
                    <ListChain />
                </div>
                <div>
                    <TopTitle title="講座課程" marginBottom="6%" />
                    <CourseChain />
                </div>
                <div>
                    <TopTitle title="企業參訪" marginBottom="6%" />
                    <CompanyChain />
                </div>
            <TemplateFooter />
        </>
    );
}
export default Program;
