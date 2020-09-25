import TopHeader from '../modules/common/Header'
import TemplateFooter from '../modules/common/Footer'
import TopBlock from "../modules/About/Top";
import styled from 'styled-components';
import { Dropdown, Table } from "react-bootstrap";

const DropDown = styled.div`
    width: 70px;
    margin: 0 auto;
    border-radius: 25%;
    display: flex;
    justify-content: flex-end;

    button {
        display: inline-block;
        padding: 6px 12px;
        margin-bottom: 0;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.42857143;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        touch-action: manipulation;
        cursor: pointer;
        user-select: none;
        background-image: none;
        border: 1px solid transparent;
        border-radius: 4px;
        color: #333;
        background-color: #fff;
        border-color: #ccc;
    }

    ul {
        width: 10%;
    }
`;

const SelectDropDown = () => {
    return (
        <>
        <DropDown>
            <Dropdown>
                <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                    屆數
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">17</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">16</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">15</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">14</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">13</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </DropDown>
        </>
    );
}

const MembersTableDiv = styled.div`
    width: 100%;
    padding: 20px 10%;

    span {
        text-align: left;
        display: block;
        margin: 0 0 10px;
        font-size: 14pt;
    }
`;

const MembersTable = () => {
    return (
        <MembersTableDiv>
            <span>-第 17 屆-</span>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>姓名</th>
                        <th>學校</th>
                        <th>學系</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>廖O軒</td>
                        <td>國立中央大學</td>
                        <td>資訊管理系</td>
                    </tr>
                    <tr>
                        <td>黃O琪</td>
                        <td>國立彰化師範大學</td>
                        <td>企業管理系</td>
                    </tr>
                </tbody>
            </Table>
        </MembersTableDiv>
    );
}

const MemberList = () => {
    return (
        <>
        <TopHeader />
            <TopBlock title="歷屆名單" />
            <SelectDropDown />
            <MembersTable />
        <TemplateFooter />
        </>
    );
}

export default MemberList;
