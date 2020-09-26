import styled from 'styled-components';

const ListChainDiv = styled.div`
    height: 100%;
    padding: 20px 5%;
    margin: 0;
    font-family: 'Noto Sans TC',Roboto;
    line-height: 2;

    ul {
        width: 100%;
        margin: 0;
        padding: 0;
        font-weight: 700;
    }

    .row:before {
        display: table;
        content: " ";
        box-sizing: border-box;
    }

    li {
        display: list-item;
        list-style: none;
        cursor: pointer;
        padding: 0 20px;
        width: 50%;
        margin-bottom: 20px;
        min-width: 360px;
        float: left;
    }
`;

const CompanyContent = styled.div`
    padding: 0;
    margin: 0;
    font-family: 'Noto Sans TC',Roboto;
    line-height: 2;
    box-sizing: border-box;
    display: block;
`;

const CompanyTitle = styled.p`
    background-color: #ffffff;
    padding: 10px;
    width: 100%;
    height: 100%;
    display: block;
    border-radius: 3px;
    box-shadow: 0 3px 5px rgba(0,0,0,0.2);
    margin: 0;
    font-family: 'Noto Sans TC',Roboto;
    line-height: 2;
    box-sizing: border-box;
    text-align: center;

    img {
        width: 40%;
        height: 120px;
        max-height: 120px;
        padding: 0;
        font-family: 'Noto Sans TC',Roboto;
        line-height: 2;
        box-sizing: border-box;
    }
`;

const Company = () => {
    return (
        <CompanyContent>
            <CompanyTitle>
                <img src="/assets/trainning/google.jpg" />
            </CompanyTitle>
        </CompanyContent>
    );
};

const CompanyB = () => {
    return (
        <CompanyContent>
            <CompanyTitle>
                <img src="/assets/trainning/ogilvy.png" />
            </CompanyTitle>
        </CompanyContent>
    );
};


const CompanyChain = () => {
    return (
        <ListChainDiv>
            <ul className="row">
                <li>
                    <Company />
                </li>
                <li>
                    <CompanyB />
                </li>
            </ul>
        </ListChainDiv>
    );
};
export default CompanyChain;
