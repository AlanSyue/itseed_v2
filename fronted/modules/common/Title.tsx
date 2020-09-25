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

const TopTitleBlock = styled.div`
    margin-left: ${props => props.marginLeft || '0px'};
    width: ${props => props.width || '11px'};
    opacity: ${props => props.opacity || '.29'};
    float: left;
    background: #83B9D5;
    height: 78px;
`;

const TopTitleText = styled.div`
    color: #fff;
    margin-left: 5px;
    opacity: 1;
    line-height: 78px;
    text-align: center!important;
    padding: 0 30px;
    float: left;
    background: #83B9D5;
    height: 78px;
`;

const TopTitle = (props) => {
    const { title, marginBottom } = props;
    return (
        <TopTitleDiv marginBottom={marginBottom}>
            <TopTitleBlock />
            <TopTitleBlock
                marginLeft="5px"
                width="19px"
                opacity=".6"
            />
            <TopTitleBlock
                marginLeft="5px"
                width="27px"
                opacity=".9"
            />
            <TopTitleText>{title}</TopTitleText>
        </TopTitleDiv>
    );
}
export default TopTitle;
