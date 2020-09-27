import styled from 'styled-components';

const Footer = styled.footer`
  background-color: #262E3D;
`;

const FooterDiv = styled.div`
  text-align: center;
  padding-top: 2%;
  color: #fff;
`;

const FooterIconDiv = styled.div`
  text-align: center;
  padding-top: 2%;
  color: #fff;
  padding-top: 4%;
`;

const FooterIconImg = styled.img`
  margin-left: 2%;
  margin-right: 2%;
`;

interface IProps {
    className?: string;
}

const TemplateFooter = ({ }: IProps) => {
    return (
        <div>
            <Footer>
                <FooterIconDiv>
                    <a href="https://www.facebook.com/iloveitseed/?fref=ts">
                        <FooterIconImg src="/assets/layout/footer-fb.png" />
                    </a>
                    <a href="mailto:itseed18th@gmail.com">
                        <FooterIconImg src="/assets/layout/footer-email.png" />
                    </a>
                    <a href="https://medium.com/itseed">
                        <FooterIconImg src="/assets/layout/medium.png" />
                    </a>
                </FooterIconDiv>
                <FooterDiv>
                    <a href="http://www.ntca.org.tw">
                    主辦單位：新北市電腦商業同業公會
                    </a>
                    <img src="/assets/layout/footer-ntca.png" style={{ width: '6%'}} />
                </FooterDiv>
                <FooterDiv style={{ paddingTop: "1%" }}>
                    Copyright © 2020 - 資訊種子培訓計畫
                </FooterDiv>
            </Footer>
        </div>
    )
}

export default TemplateFooter
