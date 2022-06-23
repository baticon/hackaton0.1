import style from "./loginParticipants.module.css";
import Logo from "../../backgrounds/logo";
import { Link } from "react-router-dom";
import { useState } from "react";

const LoginParticipants = () => {
    const [inputLogin, setInputLogin] = useState("");
    const [inputPassword, setInputPassword] = useState("");

    const handleChangeLogin = (event) => {
        setInputLogin(event.target.value);

        console.log("Login value is:", event.target.value);
    };

    const handleChangePassword = (event) => {
        setInputPassword(event.target.value);

        console.log("Password value is:", event.target.value);
    };

    return (
        <div>
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <form_reg>
                <h3>Register Here</h3>

                <label htmlFor="username">Username</label>
                <input type="text" placeholder="Username" id="username"/>

                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Email" id="email"/>

                <label htmlFor="tournament_id">Tournament ID</label>
                <input type="text" placeholder="Tournament ID" id="tournament_id"/>
                <button>Log In</button>
            </form_reg>



            <form id="login-form" className={style.loginForm}>
                <h2>Login</h2>
                <input
                    type="text"
                    id="login"
                    className={style.inputField}
                    placeholder="Login"
                    onChange={handleChangeLogin}
                    value={inputLogin}
                    pattern="^(?=.*[A-Za-z0-9]$)[A-Za-z][A-Za-z\d.-]{3,15}$"
                    title="Логин — от 3 до 15 символов, только латиница. Без пробелов, без
      спецсимволов, кроме нижнего подчеркивания и дефиса. Может содержать
      числа, но не полностью состоять из них."
                />
                <input
                    type="password"
                    id="password"
                    className={style.inputField}
                    placeholder="Password"
                    onChange={handleChangePassword}
                    value={inputPassword}
                    pattern="^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}"
                    title="Пароль — от 8 до 30 символов, обязательно хотя бы один спецсимвол и цифра."
                />
                <button id="loginButton" className={style.button}>
                    Login
                </button>
                <button
                    onClick={console.log("test")}
                    id="loginForgotButton"
                    className={style.button}
                >
                    Forgot password
                </button>
                <Link className={style.noAccount} to="/registration">
                    No account? Register!
                </Link>
                {/* <a className={style.noAccount} href="/registration">
        No account? Register!
      </a> */}
            </form>
            <Logo />
        </div>
    );
};

export default LoginParticipants;
