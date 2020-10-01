import styled from 'styled-components';

const BannerBlock = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    background-color: #1d2b53;
    padding: 0;
    margin: 0;
    font-family: 'Noto Sans TC',Roboto;
    line-height: 2;
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
    font-size: 16px;
    padding: 4px 6px;
    margin-right: 44px;
    margin-bottom: -100px;
    color: #fff;
    letter-spacing: .6px;
`;

const BackButton = styled.a`
    font-size: 18px;
    margin-right: 40px;
    padding: 4px 5px;
    color: #fff;
    text-decoration: none;
    letter-spacing: .6px;
    cursor: pointer;
    background-color: #3075b1;
    border: 1px solid #fff;
    border-radius: 3px;
    width: 100px;
    text-align: center;
    margin: 0;
    font-family: 'Noto Sans TC',Roboto;
    line-height: 2;
`;

const ProjectBanner = () => {
    return (
        <BannerBlock>
            <BannerBlockUl>
                <BannerBlockLi>
                    <BackButton>
                        <span>{"<"}</span> 返回
                    </BackButton>
                </BannerBlockLi>
                <BannerBlockLi>
                    <BannerBlockA href="/about">TUV</BannerBlockA>
                </BannerBlockLi>
                <BannerBlockLi>
                    <BannerBlockA href="/member">職涯</BannerBlockA>
                </BannerBlockLi>
                <BannerBlockLi>
                    <BannerBlockA href="/organize">招生</BannerBlockA>
                </BannerBlockLi>
            </BannerBlockUl>
        </BannerBlock>
    );
}

export default ProjectBanner;
