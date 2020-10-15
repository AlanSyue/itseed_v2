import TopHeader from '../modules/common/Header'
import TemplateFooter from '../modules/common/Footer'
import TopTitle from '../modules/common/Title'
import styled from 'styled-components';

const SharingContainer = styled.div`
    width: 100%;
    height: 1500px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 10%;
    display: block;
    box-sizing: border-box;
    padding: 0;
    margin: 0 auto;
    font-family: 'Noto Sans TC',Roboto;
    line-height: 2;

    .sharing-switch-button {
        margin: 40px auto;
        width: 60%;
        display: flex;
        justify-content: space-around;
        padding: 0;
        font-family: 'Noto Sans TC',Roboto;
        line-height: 2;
    }

    .sharing-switch-button .yellow {
        color: black;
        background-color: #f9ee23;
        border: 2px solid #f9ee23;
        height: 40px;
        padding: 0 16px;
        margin: 0 16px;
        font-size: 20px;
        line-height: 40px;
        text-align: center;
        border-radius: 20px;
        cursor: pointer;
    }

    .sharing-switch-button .blue {
        color: white;
        background-color: #68b1df;
        border: 2px solid #68b1df;
        height: 40px;
        padding: 0 16px;
        margin: 0 16px;
        font-size: 20px;
        line-height: 40px;
        text-align: center;
        border-radius: 20px;
        cursor: pointer;
    }

    .sharing-switch-button .green {
        color: white;
        background-color: #8fc31f;
        border: 2px solid #8fc31f;
        height: 40px;
        padding: 0 16px;
        margin: 0 16px;
        font-size: 20px;
        line-height: 40px;
        text-align: center;
        border-radius: 20px;
        cursor: pointer;
    }

    .sharing-list {
        margin: 0 5%;
        margin-bottom: 50px;
        padding: 0;
        font-family: 'Noto Sans TC',Roboto;
        line-height: 2;
        width: 100%;
        height: 100%;
    }

    .sharing-list span {
        display: block;
        text-align: center;
        width: 100%;
    }

    .sharing-list h3 {
        font-size: 24px;
    }

    .sharing-list .block {
        text-align: center;
        padding: 10px;
        position: relative;
        width: 33.33333333%;
        float: left;
    }

    .block img {
        width: 60%;
    }
`

const Sharing = () => {
    return (
        <>
        <TopHeader />
            <TopTitle title="經驗分享" />
            <SharingContainer>
                <div className="sharing-switch-button">
                    <button className="yellow">學長姐怎麼看</button>
                    <button className="blue">領導者怎麼看</button>
                    <button className="green">學員怎麼看</button>
                </div>
                <div className="sharing-list">
                    <span>
                        <h3>學長姐怎麼看</h3>
                    </span>
                    <div className="block">
                        <a href="/sharing">
                            <img src="/assets/sharing/17da2dd9-10da-46e4-856f-da0755b4fcaf.jpg" />
                        </a>
                    </div>
                    <div className="block">
                        <a href="/sharing">
                            <img src="/assets/sharing/17da2dd9-10da-46e4-856f-da0755b4fcaf.jpg" />
                        </a>
                    </div>
                    <div className="block">
                        <a href="/sharing">
                            <img src="/assets/sharing/17da2dd9-10da-46e4-856f-da0755b4fcaf.jpg" />
                        </a>
                    </div>
                    <div className="block">
                        <a href="/sharing">
                            <img src="/assets/sharing/17da2dd9-10da-46e4-856f-da0755b4fcaf.jpg" />
                        </a>
                    </div>
                    <div className="block">
                        <a href="/sharing">
                            <img src="/assets/sharing/17da2dd9-10da-46e4-856f-da0755b4fcaf.jpg" />
                        </a>
                    </div>
                    <div className="block">
                        <a href="/sharing">
                            <img src="/assets/sharing/17da2dd9-10da-46e4-856f-da0755b4fcaf.jpg" />
                        </a>
                    </div>
                    <span>
                        <h3>領導者怎麼看</h3>
                    </span>
                    <div className="block">
                        <a href="/sharing">
                            <img src="/assets/sharing/17da2dd9-10da-46e4-856f-da0755b4fcaf.jpg" />
                        </a>
                    </div>
                    <div className="block">
                        <a href="/sharing">
                            <img src="/assets/sharing/17da2dd9-10da-46e4-856f-da0755b4fcaf.jpg" />
                        </a>
                    </div>
                    <div className="block">
                        <a href="/sharing">
                            <img src="/assets/sharing/17da2dd9-10da-46e4-856f-da0755b4fcaf.jpg" />
                        </a>
                    </div>
                    <span>
                        <h3>學員怎麼看</h3>
                    </span>
                    <div className="block">
                        <a href="/sharing">
                            <img src="/assets/sharing/17da2dd9-10da-46e4-856f-da0755b4fcaf.jpg" />
                        </a>
                    </div>
                    <div className="block">
                        <a href="/sharing">
                            <img src="/assets/sharing/17da2dd9-10da-46e4-856f-da0755b4fcaf.jpg" />
                        </a>
                    </div>
                    <div className="block">
                        <a href="/sharing">
                            <img src="/assets/sharing/17da2dd9-10da-46e4-856f-da0755b4fcaf.jpg" />
                        </a>
                    </div>
                </div>
            </SharingContainer>
        <TemplateFooter />
        </>
    );
}
export default Sharing;
