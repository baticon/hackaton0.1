import style from "./registrationParticipants.module.css";
import Logo from "../../backgrounds/logo";
import createParticipant from "../../services/createParticipant"
import { useState } from "react";

const RegistrationParticipants = () => {
  const [inputEmail, setInputEmail] = useState("");
  const handleChangeEmail = ({target}) => {
    setInputEmail(target.value);

    console.log("Email value is:", target.value);
  };

  const [inputLogin, setInputLogin] = useState("");
  const handleChangeLogin = ({target}) => {
    setInputLogin(target.value);

    console.log("Login value is:", target.value);
  };

  const [inputTournamentID, setInputTournamentID] = useState("");
  const handleChangeTournamentID = ({target}) => {
    setInputTournamentID(target.value);

    console.log("TournamentID value is:", target.value);
  };

  return (
      <div className={style.formPadding}>
        <form id="registration-form" className={style.registerForm}>
          <h2>Registration</h2>
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
              id="tournamentID"
              className={style.inputField}
              placeholder="tournamentID"
              onChange={handleChangeTournamentID}
              value={inputTournamentID}
              pattern="^[0-9]*$"
              title="tournamentID"
          />


          <button id="regButton" className="button" type="submit" onClick={() => {createParticipant(inputTournamentID, inputLogin, inputEmail)}}>
            Register
          </button>
          <span></span>
        </form>
        <Logo />
      </div>
  );
};

export default RegistrationParticipants;
