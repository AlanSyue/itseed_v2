import Head from 'next/head'
import styled from 'styled-components';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const Logo = styled.div`
  height: 5em;
  margin: 0 auto;
`;

const LogoImg = styled.img`
  float: left;
  margin-left: 4em;
  width: 50%;
`;

const Menu = styled.ul`
  list-style: none;
  margin-right: 50px;
  float: right;
`;

const MenuLi = styled.li`
  padding: 10px 20px;
  float: left;
`;

const Btn = styled.button`
  color: #1d2b53;
  margin: 0 22px;
  padding: 7px 22px;
  background-color: #fbc711;
  border: 0;
  border-radius: 38.5px;
  box-shadow: 1px 1px 4px 0 rgba(0,0,0,.5);
  text-align: center;
  transition: 3s;
`;

interface IProps {
  className?: string;
}

const TopHeader = ({ }: IProps) => {
  return (
    <div>
      <Head>
        <title>資訊種子培訓計畫</title>
        <link rel="icon" href="/assets/layout/logo.png" />
      </Head>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">
          <LogoImg src="/assets/layout/logo1.png" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <NavDropdown title="計畫緣起" id="basic-nav-dropdown">
              <NavDropdown.Item href="/about">計劃簡介</NavDropdown.Item>
              <NavDropdown.Item href="/member">歷屆名單</NavDropdown.Item>
              <NavDropdown.Item href="/organize">組織架構</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/program">計畫內容</Nav.Link>
            <Nav.Link href="#link">校友評價</Nav.Link>
            <Nav.Link href="#link">實習心得</Nav.Link>
            <Nav.Link href="#link">招生訊息</Nav.Link>
            <Nav.Link href="#link">常見問題</Nav.Link>
            <Nav.Link href="#link">
              <Btn>馬上報名</Btn>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default TopHeader
