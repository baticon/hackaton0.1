import { useState, useEffect } from "react";
import fetchTournaments from "../../services/tournaments";
import TournamentsList from "../adminHome/tournamentsList";
import updateMatch from "../../services/updateMatch";
import Header from "../header/header";
import style from "./scoreSubmit.module.css";

function ScoreSubmit() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const res = await fetchTournaments();
      setData(res);
    }
    getData();
  }, [data]);

  const [map, setMap] = useState();
  const [url, setUrl] = useState("");

  function handleMapClick(url) {
    setUrl(url);
    console.log(url);
  }

  const [inputTournamentID, setInputTournamentID] = useState("");
  const handleChangeTournamentID = ({ target }) => {
    setInputTournamentID(target.value);
    console.log("TournamentID value is:", target.value);
  };

  const [inputPlayerWinner, setInputPlayerWinner] = useState();
  const handleChangePlayerWinner = ({ target }) => {
    setInputPlayerWinner(target.value);
    console.log("TournamentID value is:", target.value);
  };

  const [inputPlayerLooser, setInputPlayerLooser] = useState();
  const handleChangePlayerLooser = ({ target }) => {
    setInputPlayerLooser(target.value);
    console.log("TournamentID value is:", target.value);
  };

  return (
    <div>
      <Header></Header>
      <form>
        <div>
          <TournamentsList
            tournamentData={data}
            handleMapClick={handleMapClick}
          ></TournamentsList>
          <h2>Individual tournament map</h2>
          <iframe
            src={`http://challonge.com/${url}/module`}
            width="100%"
            height="500"
            frameborder="0"
            scrolling="auto"
            allowtransparency="true"
          ></iframe>
        </div>
        <h2 style={{ marginTop: "50px" }}>Enter match results</h2>
        <div>
          <label className={style.label}>Enter tournament ID</label>
          <input
            className={style.input}
            type="text"
            placeholder="tournament ID"
            onChange={handleChangeTournamentID}
          />
        </div>
        <div>
          <label className={style.label}>Enter WINNER player ID</label>
          <input
            className={style.input}
            placeholder="Winner ID"
            onChange={handleChangePlayerWinner}
          ></input>
        </div>
        <div>
          <label className={style.label}>Enter LOSER player ID</label>
          <input
            className={style.input}
            placeholder="Looser ID"
            onChange={handleChangePlayerLooser}
          ></input>
        </div>

        <button
          className={style.button}
          style={{ marginBottom: "20px" }}
          onClick={(e) => {
            e.preventDefault();
            updateMatch(
              inputTournamentID,
              inputPlayerWinner,
              inputPlayerLooser
            );
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

const submitForm = () => {
  return ScoreSubmit();
};

export default submitForm;
