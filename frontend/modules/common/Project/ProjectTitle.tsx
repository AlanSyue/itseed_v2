import styled from 'styled-components';

const TopTitleDiv = styled.div`
    display: block;
    clear: both;
    font-size: 48px;
    margin: 28px 0;
    margin-bottom: ${props => props.marginBottom || '10%'};
    width : 100%;
    height : 100%;
    box-sizing: border-box;

    &:before {
        display: table;
        content: " ";
    }

    &:after {
        display: table;
        content: " ";
    }
`;

const TopTitleText = styled.div`
    color: #fff;
    opacity: 1;
    line-height: 78px;
    text-align: center!important;
    padding: 0 30px;
    float: left;
    background: #83B9D5;
    height: 78px;
`;

const ProjectTitle = (props) => {
    const { title, marginBottom } = props;
    return (
        <TopTitleDiv marginBottom={marginBottom}>
            <TopTitleText>{title}</TopTitleText>
        </TopTitleDiv>
    );
}
export default ProjectTitle;
