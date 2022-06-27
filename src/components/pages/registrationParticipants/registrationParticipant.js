import style from "./registrationParticipants.module.css";
import createParticipant from "../../services/createParticipant";
import fetchTournaments from "../../services/tournaments";
import ReturnTournamentList from "./returnTournamentList";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RegistrationParticipants = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const res = await fetchTournaments();
      setData(res);
    }
    getData();
  }, [data]);

  const [inputEmail, setInputEmail] = useState("");
  const handleChangeEmail = ({ target }) => {
    setInputEmail(target.value);
  };

  const [inputLogin, setInputLogin] = useState("");
  const handleChangeLogin = ({ target }) => {
    setInputLogin(target.value);
  };

  const [inputTournamentID, setInputTournamentID] = useState("");
  const handleChangeTournamentID = ({ target }) => {
    setInputTournamentID(target.value);
  };

  return (

    <div className={style.body}>
      <div className={style.background}>
        <div className={style.shape}></div>
        <div className={style.shape}></div>

      </div>
      <div className={style.form_reg}>
        <h3>Register Here</h3>

        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Username"
          id="username"
          onChange={handleChangeLogin}
          value={inputLogin}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Email"
          id="email"
          onChange={handleChangeEmail}
          value={inputEmail}
        />

        <label htmlFor="tournament_id">Tournament ID</label>
        <input
          type="text"
          placeholder="Tournament ID"
          id="tournament_id"
          onChange={handleChangeTournamentID}
          value={inputTournamentID}
        />
        <button
          id="regButton"
          className={style.button}
          type="submit"
          onClick={() => {
            createParticipant(inputTournamentID, inputLogin, inputEmail);
          }}
        >
          Register
        </button>
        <button
          className={style.button}
          type="submit"
          onClick={() => navigate("/scoresubmit")}
        >
          Back to mainpage
        </button>
      </div>

      <ReturnTournamentList tournamentData={data}></ReturnTournamentList>
    </div>
  );
};

export default RegistrationParticipants;
