import Head from 'next/head'
import styled from 'styled-components';

const Logo = styled.div`
  height: 5em;
  margin: 0 auto;
`;

const LogoImg = styled.img`
  float: left;
  margin-top: 1.5em;
  margin-left: 5em;
  width: 15%;
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

const TopHeader = ({}: IProps) => {
  return (
    <div>
      <Head>
        <title>資訊種子培訓計畫</title>
        <link rel="icon" href="/assets/layout/logo.png" />
      </Head>
      <Logo>
        <LogoImg src="/assets/layout/logo1.png" />
          <nav>
            <Menu>
              <MenuLi><a href="about">計畫緣起</a></MenuLi>
              <MenuLi><a href="program">計畫內容</a></MenuLi>
              <MenuLi><a href="#">校友評價</a></MenuLi>
              <MenuLi><a href="#">實習心得</a></MenuLi>
              <MenuLi><a href="#">招生訊息</a></MenuLi>
              <MenuLi><a href="#">常見問題</a></MenuLi>
              <MenuLi><Btn>馬上報名</Btn></MenuLi>
            </Menu>
          </nav>
      </Logo>
    </div>
  )
}

export default TopHeader
