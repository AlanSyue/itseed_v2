import styled from 'styled-components';

const ProjectBlockDiv = styled.div`
    padding: 0;
    margin: 0;
    font-family: 'Noto Sans TC',Roboto;
    line-height: 2;
    box-sizing: border-box;
    display: block;

    &:before {
        display: table;
        content: " ";
        box-sizing: border-box;
    }

    h3 {
        text-align-last: left;
        width: auto;
        border: 0;
        color: #00a0e8;
        margin: 32px 0;
        font-size: 20px;
        line-height: 54px;
        text-align: center;
        font-family: inherit;
        font-weight: 500;
    }

    img {
        width: 100%;
    }

    .content {
        padding: 0 40px;
        font-size: 18px;
        line-height: 2;
        color: #333;
        text-align: left;
    }
`;

const ProjectBlock = () => {
    return (
        <ProjectBlockDiv>
            <h3>| 戀愛軍情局</h3>
            <img src="/assets/projects/sixproject-tuv1-1.png" />
            <h3>專案介紹</h3>
            <div className="content">
                在大學三大必修之愛情中，我們時常因為缺乏自信而無法跨出第一步，如此的沒自信可能會影響到其他生活層面上，
                因此我們希望能為現今在愛情上缺乏自信的大學生們做些什麼。我們藉由聊天機器人的主動推播功能，分享有意義的文章幫助建立信心，
                並透過被動回復吸引目標受眾，提升使用率，同時透過網路社群平台擴散以及KOL合作進行推廣，達成我們的專案目標，為大學生提升信心的目的。
            </div>
            <h3>執行成果</h3>
            <div className="content">
                專案影片及懶人包上傳粉專僅一週內，我們就得到了以下迴響：
                <ul>
                    <li>聊天機器人使用人數超過 6000 人</li>
                    <li>根據後測問卷有28.6%的使用者理解專案用意並能因次建立信心</li>
                    <li>根據後側問卷有42.9%的使用者在使用後了解該如何嘗試或行動</li>
                    <li>轉載文章連結平均點擊率為570.6次</li>
                    <li>平均每個使用者傳送了25.47則訊息</li>
                </ul>
            </div>
        </ProjectBlockDiv>
    )
}
export default ProjectBlock;
