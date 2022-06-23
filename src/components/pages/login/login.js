import style from "./login.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
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
      <div className={style.background}>
        <div className={style.shape}></div>
        <div className={style.shape}></div>
      </div>
      <form id="login-form" className={style.form_reg}>
        <h3>Login</h3>
        <input
          type="text"
          id="login"
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
          placeholder="Password"
          onChange={handleChangePassword}
          value={inputPassword}
          pattern="^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}"
          title="Пароль — от 8 до 30 символов, обязательно хотя бы один спецсимвол и цифра."
        />
        <br></br>
        <br></br>
        <br></br>
        <button id="loginButton" className={style.button}>
          Login
        </button>
        <button
          onClick={console.log("test")}
          id="loginForgotButton"
          className={style.button}
          style={{ marginBottom: "50px" }}
        >
          Forgot password
        </button>
        <Link
          className={style.button}
          style={{
            marginLeft: "100px",
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
          to="/registration"
        >
          No account? Register!
        </Link>
      </form>
    </div>
  );
};

export default Login;
