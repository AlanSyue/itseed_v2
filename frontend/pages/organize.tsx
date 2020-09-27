import TopHeader from '../modules/common/Header'
import TemplateFooter from '../modules/common/Footer'
import TopBlock from "../modules/About/Top";
import styled from 'styled-components';

const OrganizeListDiv = styled.div`
    width: 90%;
    margin: 0 auto;
    margin-bottom: 5%;

    .organize-img {
        width: 50%;
        margin: auto;
    }

    .organize-img img {
        width: 80%;
        height: 80%;
        vertical-align: middle;
        border-radius: 999em;
        border: solid 1px #CCC;
        box-shadow: 1px 1px 5px #999;
    }

    .organize-info {
        margin-right: 10%;
        margin-left: 10%;
        display: table-cell;
        vertical-align: top;
    }

    .organize-info h3 {
        color: #144989;
        font-size: 18px;
        line-height: 2em;
        margin-top: 1.5vh;
    }
    
    .organize-info p {
        color: #999;
        font-size: 16px;
        margin-left: 32px;
    }

    .student-lead-info h3 {
        background: #00a0e8;
        border: 1px solid #00a0e8;
        border-radius: 17.5px;
        color: #fff;
        font-size: 16px;
        height: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20%;
    }

    .student-lead-info p {
        color: #999;
        font-size: 16px;
        margin-left: 32px;
    }

    .student-lead-info span {
        color: #999;
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 2%;
    }
`;

const OrganizeInfo = () => {
    return (
        <div className="organize-info">
            <h3>校友會</h3>
            <p>
                從2003年至今已累積 500 多位校友，整合公會與校友資源，指引學員執行專案時突破自我，並傳承資訊種子分享與回饋的精神。
                    </p>
            <h3>校友會培訓部</h3>
            <p>
                負責協助當屆專案的進行及年度課程規劃，為學員與公會、校友會溝通的橋樑。
                    </p>
            <h3>學員幹部</h3>
            <p>
                由當屆學員選舉產生，主要負責凝聚學員情感，以及團隊溝通協調。第十七屆幹部團隊包含：
            </p>
        </div>
    );
}


const StudentLeadInfo = () => {
    return (
        <div className="student-lead-info">
            <h3>正/副學員長</h3>
            <p>帶領幹部團隊進行年度規劃，與培訓部溝通合作，凝聚當屆的向心力。</p>
            <h3>資訊長</h3>
            <p>帶領資訊組負責當屆官網前後端資料的維護、整合，並開創工作坊以累積學員資訊能力。</p>
            <h3>設計長</h3>
            <p>帶領設計組設計當屆主視覺，產出周邊產品，留下獨一無二的紀念。</p>
            <h3>行銷長</h3>
            <p>帶領行銷組建立對外的傳播形象，與紀錄學員一年培訓過程，經手管道如粉絲專頁 Medium 等。</p>
            <span>（＊每一屆幹部團隊職位依當屆培訓部規劃而有所不同＊）</span>
        </div>
    );
}

const OrganizePage = () => {
    return (
        <>
            <TopHeader />
            <TopBlock title="組織架構" />
            <OrganizeListDiv>
                <div className="organize-img">
                    <img src="/assets/layout/organize-structure.jpg" />
                </div>
                <OrganizeInfo />
                <StudentLeadInfo />
            </OrganizeListDiv>
            <TemplateFooter />
        </>
    );
}

export default OrganizePage;
