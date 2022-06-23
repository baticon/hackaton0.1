import style from "./registrationParticipants.module.css";
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
      <div style={{overflowY:"scroll"}}>

        <div className="background">
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
        <form_reg>
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
          <button id="regButton" className="button" type="submit" onClick={() => {createParticipant(inputTournamentID, inputLogin, inputEmail)}}>
            Register
          </button>
        </form_reg>

        <form_tournament_started>
          <h3>Tournaments sterted</h3>
          <div className="container">
            <table>
              <thead>
              <tr>
                <th>Tournament ID</th>
                <th>Game</th>
                <th>Type</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>Cell 1</td>
                <td>Cell 2</td>
                <td>Cell 3</td>

              </tr>


              </tbody>
            </table>
          </div>
        </form_tournament_started>
        <form_tournament_will_start>
          <h3>Tournaments Soon</h3>
          <div className="container">
            <table>
              <thead>
              <tr>
                <th>Tournament ID</th>
                <th>Game</th>
                <th>Type</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>Cell 1</td>
                <td>Cell 2</td>
                <td>Cell 3</td>
              </tr>
              <tr>
                <td>Cell 1</td>
                <td>Cell 2</td>
                <td>Cell 3</td>

              </tr>
              <tr>
                <td>Cell 1</td>
                <td>Cell 2</td>
                <td>Cell 3</td>

              </tr>


              </tbody>
            </table>
          </div>
        </form_tournament_will_start>
      </div>
  );
};

export default RegistrationParticipants;