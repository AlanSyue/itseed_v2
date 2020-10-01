import styled from 'styled-components';

const ContentBlock = styled.div`
    width: 100%;
    padding: 20px;
    line-height: 2;
    font-size: calc(${props => props.fontSize || "19.5"}px);
    font-weight: 400;
    text-align: ${props => props.align || "left"};
    background-color: #D4F0FF;
    padding-left: 10vw;
`;

export default ContentBlock;
