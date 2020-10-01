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

export default TopBanner;
