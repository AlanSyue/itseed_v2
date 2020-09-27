import styled from 'styled-components';

const ListChainDiv = styled.div`
    padding: 0;
    margin: 0;
    font-family: 'Noto Sans TC',Roboto;
    line-height: 2;
    margin-top: 20px;
    margin-left: 5%;
    margin-right: 5%;

    ul {
        margin: 0;
        padding: 10px;
        margin-top: 36px;
    }

    .row:before {
        display: table;
        content: " ";
    }

    li {
        list-style: none;
        cursor: pointer;
        padding: 10px;
        margin-top: 36px;
        width: 25%;
        float: left;
    }
`;

const CourseNum = styled.div`
    padding: 0;
    margin: 0;
    font-family: 'Noto Sans TC',Roboto;
    line-height: 2;

    &:before {
        display: table;
        content: " ";
        box-sizing: border-box;
    }

    .course-class {
        color: #8DC5E4;
        opacity: 0.3;
        font-size: 2.8vw;
        font-weight: normal;
        margin-left: 10px;
    }

    .course-number {
        position: absolute;
        right: 0;
        font-size: 12vw;
        padding-top: 0;
        color: #8DC5E4;
        line-height: 1;
        z-index: -999;
        top: 0px;
        opacity: 0.3;
    }

    &:after {
        padding: 0;
        margin: 0;
        font-family: 'Noto Sans TC',Roboto;
        line-height: 2;
    }
`;

const CourseContent = styled.div`
    width: 100%;
    height: 0;
    padding-bottom: 60%;
    font-size: 2px;
    border: 1px solid #48697C;
    position: relative;
    border-radius: 3px;
`;

const CourseTitle = styled.p`
    font-size: 22px;
    width: 100%;
    text-align: left;
    padding-left: 5px;
    margin-top: -5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0;
    margin: 0;
    font-family: 'Noto Sans TC',Roboto;
    line-height: 2;
`;

const CourseOrganize = styled.p`
    font-size: 12px;
    position: absolute;
    font-weight: normal;
    bottom: 24px;
    left: 8px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0;
    margin: 0;
    font-family: 'Noto Sans TC',Roboto;
    line-height: 2;
`;

const CourseLecturer = styled.p`
    font-size: 16px;
    position: absolute;
    font-weight: normal;
    bottom: 0;
    left: 8px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 0px;
`;

const Courses = () => {
    return (
        <CourseContent>
            <CourseNum>
                <div className="course-class">class</div>
                <div className="course-number">01</div>
            </CourseNum>
            <CourseTitle>
                「資種人的二三事」 
            </CourseTitle>
            <CourseOrganize>
                新北市電腦同業公會
            </CourseOrganize>
            <CourseLecturer>
                陳芬玉 總幹事、蘇尉池 學長、潘怡安 學姐
            </CourseLecturer>
        </CourseContent>
    );
};

const CoursesB = () => {
    return (
        <CourseContent>
            <CourseNum>
                <div className="course-class">class</div>
                <div className="course-number">02</div>
            </CourseNum>
            <CourseTitle>
                「設計思考：改變世界的力量」 
            </CourseTitle>
            <CourseOrganize>
                ExLearn 課外通 事業發展經理
            </CourseOrganize>
            <CourseLecturer>
                林紹偉 講師  
            </CourseLecturer>
        </CourseContent>
    );
};

const CoursesC = () => {
    return (
        <CourseContent>
            <CourseNum>
                <div className="course-class">class</div>
                <div className="course-number">03</div>
            </CourseNum>
            <CourseTitle>
                「積極的迷惘人」 
            </CourseTitle>
            <CourseOrganize>
                Uspace 停停圈  營運長
            </CourseOrganize>
            <CourseLecturer>
                王佑哲 學長 
            </CourseLecturer>
        </CourseContent>
    );
};

const CoursesD = () => {
    return (
        <CourseContent>
            <CourseNum>
                <div className="course-class">class</div>
                <div className="course-number">04</div>
            </CourseNum>
            <CourseTitle>
                「認識自我與團體動力學」 
            </CourseTitle>
            <CourseOrganize>
                自由作家／國泰人壽 通訊處經理
            </CourseOrganize>
            <CourseLecturer>
                蘇尉池學長／張肯維學長  
            </CourseLecturer>
        </CourseContent>
    );
};

const CourseChain = () => {
    return (
        <ListChainDiv>
            <ul className="row">
                <li>
                    <Courses />
                </li>
                <li>
                    <CoursesB />
                </li>
                <li>
                    <CoursesC />
                </li>
                <li>
                    <CoursesD />
                </li>
            </ul>
        </ListChainDiv>
    );
};
export default CourseChain;
