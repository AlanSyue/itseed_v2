import styled from 'styled-components';
import { Button } from "react-bootstrap";

const CourseContainer = styled.div`
    width: 55%;
    margin: 0 auto;
    padding: 0;
    font-family: 'Noto Sans TC',Roboto;
    line-height: 2;
    box-sizing: border-box;
    display: block;
    
    img {
        margin: 20px 0;
        width: 100%;
        vertical-align: middle;
        border: 0;
    }

    h3 {
        font-family: NotoSansCJKtc, Roboto;
        color: rgb(51, 51, 51);
        display: inline-block;
        padding: 10px 40px;
        border: 1px solid #00a0e8;
        font-size: 20px;
        margin: 20px 0;
        transform: translateX(-50%);
    }

    ul {
        margin: 16px 0;
        padding: 0;
        font-family: 'Noto Sans TC',Roboto;
        line-height: 2;
    }

    li {
        font-size: 18px;
        list-style-type: none;
        margin: 0;
    }

    li:nth-child(odd):before {
        content: '';
        display: inline-block;
        margin-right: 36px;
        height: 9px;
        width: 9px;
        background-color: #00a0e8;
        transform: rotate(45deg);
    }

    li:nth-child(even):before {
        content: '';
        display: inline-block;
        margin-right: 36px;
        height: 9px;
        width: 9px;
        border: 1px solid #00a0e8;
        transform: rotate(45deg);
    }

    p {
        text-indent: 2em;
        margin: 16px 0;
        font-size: 18px;
        letter-spacing: .6px;
        padding: 0;
        font-family: 'Noto Sans TC',Roboto;
        line-height: 2;
    }
`;

const BackBtnDiv = styled.div`
    margin: 30px auto;
    text-align: center;
    padding: 0;
    font-family: 'Noto Sans TC',Roboto;
    line-height: 2;
`;

const CourseBlock = () => {
    return (
        <CourseContainer>
            <img src="/assets/courseInfo/d2887429-bb7c-40c3-b5bd-9815ae28333b.jpg" />
            <h3>講師介紹</h3>
            <ul>
                <li>
                    陳芬玉 總幹事 新北市電腦商業同業公會
                </li>
                <li>
                    潘怡安 學姊 資訊種子 現任校友會會長
                </li>
                <li>
                    蘇尉池 學長 資訊種子 現任培訓部總監
                </li>
            </ul>
            <h3>課程介紹</h3>
            <p>
                資訊種子培訓始業式，透過陳芬玉總幹事及學長姊們的分享，讓即將開始資種旅程的我更加了解新北市電腦同業公會、資訊種子培訓計畫的前世今生，
                以及進入資種的學習方式與心態建立。課堂最後以分享活動「世界咖啡館」與感性反思「願望銀行」讓我們在這裡展開屬於我們新的旅程。
            </p>
            <h3>課程筆記</h3>
            <ul>
                <li>
                    練習具體表達、數字佐證、有意識地感受及行動。
                </li>
                <li>
                    多一份用心，凡事都比別人多想一點、多做一點。
                </li>
                <li>
                    簡單的事每天做就不簡單。
                </li>
                <li>
                    遇到錯誤就不斷的修改，每次都是在調整自己！
                </li>
            </ul>
            <h3>學員心得</h3>
            <p>
                一群人因為不同原因而來到這裡，也許我們都對未來感到害怕、不安，但我們勇敢跨出了一步，在這裡相遇，即將一起走一段漫長的路，
                我們一起學習、一起成長，一起努力成為更好的人，成為他人安心依靠地存在。未來可能會一起經歷風風雨雨，但我擁有一群會陪伴我面對挫折、接受挑戰的朋友，
                我們會是一輩子的摯友，謝謝資種這個機會讓我們變得更好。
            </p>
            <p>
                朱庭儀／國立臺灣師範大學體育學系
            </p>
            <BackBtnDiv>
                <Button variant="outline-primary">
                    Back
                </Button>
            </BackBtnDiv>
        </CourseContainer>
    );
};
export default CourseBlock;
