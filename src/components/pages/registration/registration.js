import style from "./registration.module.css";
import { useState } from "react";

const Registration = () => {
  const [inputEmail, setInputEmail] = useState("");
  const handleChangeEmail = (event) => {
    setInputEmail(event.target.value);
  };

  const [inputLogin, setInputLogin] = useState("");
  const handleChangeLogin = (event) => {
    setInputLogin(event.target.value);
  };

  const [inputName, setInputName] = useState("");
  const handleChangeName = (event) => {
    setInputName(event.target.value);
  };

  const [inputSurname, setInputSurname] = useState("");
  const handleChangeSurname = (event) => {
    setInputSurname(event.target.value);
  };

  const [inputPhone, setInputPhone] = useState("");
  const handleChangePhone = (event) => {
    setInputPhone(event.target.value);
  };

  const [inputPassword, setInputPassword] = useState("");
  const handleChangePassword = (event) => {
    setInputPassword(event.target.value);
  };

  return (
    <div className={style.body}>
      <div className={style.background}>
        <div className={style.shape}></div>
        <div className={style.shape}></div>
      </div>
      <form id="registration-form" className={style.form_reg}>
        <h3>Registration</h3>
        <input
          type="text"
          id="email"
          className="input-field"
          placeholder="email"
          onChange={handleChangeEmail}
          value={inputEmail}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          title="Email — стандартная проверка: латиница, может содержать спецсимволы и
          цифры, обязательно должна быть «собачка» (@) и точка после неё, но
          перед точкой обязательно должны быть буквы"
        />

        <input
          type="text"
          id="login"
          className={style.inputField}
          placeholder="Login"
          onChange={handleChangeLogin}
          value={inputLogin}
          pattern="(?=.*[a-zA-Z-].*)[a-zA-Z0-9-_]+"
          title="Логин — от 3 до 15 символов, только латиница. Без пробелов, без
      спецсимволов, кроме нижнего подчеркивания и дефиса. Может содержать
      числа, но не полностью состоять из них."
        />

        <input
          type="text"
          id="name"
          className={style.inputField}
          placeholder="Name"
          onChange={handleChangeName}
          value={inputName}
          pattern="^[а-яА-ЯёЁa-zA-Z-]{0,}$"
          title="Имя/Фамилия - латиница или кириллица, не должно быть пробелов и цифр.
          Из спецсимволов допускается только дефис."
        />

        <input
          type="text"
          id="surname"
          className={style.inputField}
          placeholder="Surname"
          onChange={handleChangeSurname}
          value={inputSurname}
          pattern="^[а-яА-ЯёЁa-zA-Z-]{3,15}$"
          title="Имя/Фамилия - латиница или кириллица, не должно быть пробелов и цифр.
          Из спецсимволов допускается только дефис."
        />

        <input
          type="text"
          id="phone"
          className={style.inputField}
          placeholder="Phone"
          onChange={handleChangePhone}
          value={inputPhone}
          pattern="[+]?[0-9]{8,15}"
          title="Телефон — от 8 до 15 символов, состоит из цифр, может начинаться с плюса."
        />

        <input
          type="text"
          id="password"
          className={style.inputField}
          placeholder="Password"
          onChange={handleChangePassword}
          value={inputPassword}
          pattern="^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}"
          title="Пароль — от 8 до 30 символов, обязательно хотя бы один спецсимвол и цифра."
        />

        <input
          type="text"
          id="repeat-password"
          className={style.inputField}
          placeholder="Repeat password"
          pattern="^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}"
          title="Пароль — от 8 до 30 символов, обязательно хотя бы один спецсимвол и цифра."
        />

        <button id="regButton" className="button" type="submit">
          Register
        </button>
        <span></span>
      </form>
    </div>
  );
};

export default Registration;
