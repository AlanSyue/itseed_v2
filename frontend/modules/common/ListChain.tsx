import styled from 'styled-components';

const ListChainDiv = styled.div`
    width: 100%;
    height: 300px;
    margin-left: 5%;
    margin-right: 5%;

    ul {
        display: block;
        list-style-type: disc;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 40px;
    }

    li {
        list-style: none;
        padding: 0 20px;
        width: 30%;
        float: left;
    }
`;

const ProjectContent = styled.div`
    border: 1px #9B9833 solid;
    border-radius: 1px;
    position: relative;
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 20px;
    margin-top: 50px;
    height: 230px;

    p {
        font-size: 24px;
        font-weight: normal;
        color: #000000;
        margin-top: 20px;
    }
`;

const ProjectTitle = styled.p`
    font-size: 32px;
    line-height: 45px;
    color: #A09D3E;

    &:before {
        content: "";
        display: block;
        background-color: #A09D3E;
        width: 4px;
        height: 30px;
        position: absolute;
        top: 28px;
        left: 10px;
    }
`;

const Project = () => {
    return (
        <a href="/project" style={{"textDecoration" : "none"}}>
            <ProjectContent>
                <ProjectTitle>
                    TUV 專案
                </ProjectTitle>
                <p>「Top Up Our Value，讓團隊價值最大化」</p>
            </ProjectContent>
        </a>
    );
};

const ProjectB = () => {
    return (
        <ProjectContent>
            <ProjectTitle>
                招生專案
        </ProjectTitle>
            <p>「探索職涯方向，提升職場軟硬實力」</p>
        </ProjectContent>
    );
}

const ProjectC = () => {
    return (
        <ProjectContent>
            <ProjectTitle>
                職涯專案
        </ProjectTitle>
            <p>「培養數位行銷、專案策劃、人力資源管理能力」</p>
        </ProjectContent>
    );
}

const ListChain = () => {
    return (
        <ListChainDiv>
            <ul>
                <li>
                    <Project />
                </li>
                <li>
                    <ProjectB />
                </li>
                <li>
                    <ProjectC />
                </li>
            </ul>
        </ListChainDiv>
    );
};
export default ListChain;
