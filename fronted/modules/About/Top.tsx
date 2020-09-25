import styled from 'styled-components';

const BannerBlock = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    background-color: #1d2b53;

    &:before {
        content: " ";
    }
`;

const BannerBlockUl = styled.ul`
    display: flex;
    align-items: center;
    list-style-type: none;
    width: 100%;
    justify-content: space-around;
`;

const BannerBlockLi = styled.li`
    padding: 0;
    margin: 0;
    font-family: 'Noto Sans TC',Roboto;
    line-height: 2;
`;

const BannerBlockA = styled.a`
    font-size: 18px;
    margin-right: 40px;
    padding: 4px 5px;
    color: #fff;
    text-decoration: none;
    letter-spacing: .6px;
    cursor: pointer;
`;

const TopBanner = () => {
    return (
        <BannerBlock>
            <BannerBlockUl>
                <BannerBlockLi>
                    <BannerBlockA href="/about">計畫簡介</BannerBlockA>
                </BannerBlockLi>
                <BannerBlockLi>
                    <BannerBlockA href="/member">歷屆名單</BannerBlockA>
                </BannerBlockLi>
                <BannerBlockLi>
                    <BannerBlockA href="/organize">組織架構</BannerBlockA>
                </BannerBlockLi>
            </BannerBlockUl>
        </BannerBlock>
    );
}

const TopTitleDiv = styled.div`
    display: block;
    clear: both;
    font-size: 48px;
    margin: 28px 0;
    margin-bottom: 10%;
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
    const { title } = props;
    return (
        <TopTitleDiv>
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

const TopBlock = (props) => {
    const { title } = props;
    return (
        <>
        <TopBanner />
        <TopTitle title={title} />
        </>
    )
}

export default TopBlock;
