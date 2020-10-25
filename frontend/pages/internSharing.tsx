import TopHeader from '../modules/common/Header';
import TemplateFooter from '../modules/common/Footer';
import TopTitle from "../modules/common/Title";
import styled from 'styled-components';

const SharingContent = styled.div`
    width: 80%;
    margin: 0 auto;
    color: #000;
    padding: 0;
    font-family: 'Noto Sans TC',Roboto;
    line-height: 2;

    h2 {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        color: rgb(51, 51, 51);
        font-size: 32px;
        line-height: 2;
    }

    h4 {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        color: rgb(51, 51, 51);
        font-size: 18px;
        margin-top: 10px;
        margin-bottom: 10px;
        font-weight: 500;
        line-height: 1.1;
    }

    .content {
        width: 80%;
        margin: 0 auto;
        margin-bottom: 100px;
    }

    .content p {
        margin: 48px 0;
        font-size: 24px;
        line-height: 1.71;
        letter-spacing: .7px;
        color: #00a0e8;
    }
`;

const InternSharing = () => {
    return (
        <>
            <TopHeader />
                <TopTitle title="實習心得" marginBottom="8%" />
                <SharingContent>
                    <h2>蔡珮歆 | Mixxin 群眾集資顧問專員</h2>
                    <h4>Mentor ：7th 王大皓 學長</h4>
                    <div className="content">
                        <p>
                            「每當在後台看到自己用心寫的文字觸及到幾千人、開信率和 CPL 又有多少，都在在體認到行銷是非常真槍實彈的歷程，文字的運用、
                            操作的策略是否奏效都會直接反映在數字上。」
                        </p>
                    </div>
                </SharingContent>
            <TemplateFooter />    
        </>
    );
}
export default InternSharing;
