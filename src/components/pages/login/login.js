import style from "./login.module.css";
import Logo from "../../backgrounds/logo";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <form id="login-form" className={style.loginForm}>
        <h2>Login</h2>
        <input
          type="text"
          id="login"
          className={style.inputField}
          placeholder="Login"
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
          pattern="^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}"
          title="Пароль — от 8 до 30 символов, обязательно хотя бы один спецсимвол и цифра."
        />
        <button id="loginButton" className={style.button}>
          Login
        </button>
        <button id="loginForgotButton" className={style.button}>
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

export default Login;
