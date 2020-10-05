import TopHeader from '../modules/common/Header'
import TemplateFooter from '../modules/common/Footer'
import TopTitle from "../modules/common/Title";
import CourseBlock from "../modules/Course/CourseBlock";
import styled from 'styled-components';

const CourseSubTitle = styled.h3`
    margin-left: 10vw;
    font-size: 24px;
    font-family: inherit;
    line-height: 1.1;
    display: block;
`;

const courseInfo = () => {
    return (
        <>
        <TopHeader />
            <TopTitle title="資種人的二三事" marginBottom="7%" />
            <CourseSubTitle>
                「挫勇的循環：接受失敗、面對不足、不斷修正」
            </CourseSubTitle>
            <CourseBlock />
        <TemplateFooter />
        </>
    )
}
export default courseInfo;
