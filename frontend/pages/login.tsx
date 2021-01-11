import TopHeader from '../modules/common/Header'
import TemplateFooter from '../modules/common/Footer'
import styled from 'styled-components';;

const LoginContainer = styled.div`
    margin-top: 5%;
    min-height: 60vh;
    padding: 0;
    font-family: 'Noto Sans TC', 'Roboto';
    line-height: 2;

    .title-button {
        text-align: center;
        margin: 36px 0;
    }

    .title-button span {
        padding: 8px 40px;
        color: #1d2b53;
        border-color: #1d2b53;
        border-width: 1px;
        border-style: solid;
        font-size: 28px;
    }

    .login-main {
        border-radius: 20px;
        padding: 40px 30px;
        margin: 30px auto;
        max-width: 100%;
        width: 350px;
        background-color: #CAE7D6;
    }

    .form-input {
        padding: 10px 0;
        text-align: center;
        margin: 0;
        font-family: 'Noto Sans TC', 'Roboto';
        line-height: 2;
    }

    .form-input span {
        display: inline-block;
        width: 30%;
        padding: 0;
        margin: 0;
        font-family: 'Noto Sans TC', 'Roboto';
        line-height: 2;
    }

    .form-input img {
        vertical-align: top;
        width: 15px;
    }

    .form-input input {
        display: inline-block;
        width: 65%;
    }

    .submit-btn {
        width: 120px;
        background-color: white;
        border-radius: 20px;
        display: inline-block;
        cursor: pointer;
    }

    .sign-in-div {
        padding: 10px 0;
        text-align: center;
        margin: 0;
        font-family: 'Noto Sans TC', 'Roboto';
        line-height: 2;
        height: 36px;
        width: 180px;
        background-color: #fff;
        color: #757575;
    }

    .sign-in-info {
        color: #333;
        padding-bottom: 0;
        padding: 0;
        margin: 0;
        font-family: 'Noto Sans TC', 'Roboto';
        line-height: 2;
        font-size: 14px;
    }

    .sign-in-forget-password {
        color: #333;
        padding-bottom: 0;
        padding: 0;
        margin-top: 15%;
        font-family: 'Noto Sans TC', 'Roboto';
        line-height: 2;
        font-size: 14px;
    }
`;

const LoginBottomNote = styled.div`
    text-align: center;
    margin-bottom: 30px;
    padding: 0;
    font-family: 'Noto Sans TC','Roboto';
    line-height: 2;
    font-size: 14px;
    color: #333;

    p {
        margin-top: 0;
        margin-bottom: 1rem;
    }
`;

const Login = () => {
    return (
        <>
            <TopHeader />
                <LoginContainer>
                    <div className="title-button">
                        <span>- 登入 -</span>
                    </div>
                    <div className="login-main">
                        <div className="form-input">
                            <span>
                                <img src="/assets/layout/ACCOUNT.png" />
                                 帳號：
                            </span>
                            <input
                                placeholder="電子信箱"
                                type="email"
                            />
                        </div>
                        <div className="form-input">
                            <span>
                                <img src="/assets/layout/LOCK.png" />
                                 密碼：
                            </span>
                            <input
                                placeholder="密碼"
                                type="password"
                            />
                        </div>
                        <div className="form-input">
                            <input
                                className="submit-btn"
                                value="登入"
                                type="submit"
                            />
                        </div>
                        <div className="sign-in-div">
                            <div>
                                <span>Sign in with Google</span>
                            </div>
                        </div>
                        <div className="sign-in-info">
                            <span>尚未註冊嗎？</span>
                            <a href="/register">立即註冊新帳號</a>
                        </div>
                        <div className="sign-in-forget-password">
                            <a href="/resetPassword">忘記密碼</a>
                        </div>
                    </div>
                    <LoginBottomNote>
                        <p>如有遇到無法登入官網，或無法上傳資料等問題，</p>
                        <p>請私訊粉專或來信告知，</p>
                        <p>我們會盡快回覆並協助您完成報名程序，謝謝！</p>
                    </LoginBottomNote>
                </LoginContainer>
            <TemplateFooter />
        </>
    );
}
export default Login;
