import { useState, useEffect } from "react";
import fetchTournaments from "../../services/tournaments";
import TournamentsList from "../adminHome/tournamentsList";
import updateMatch from "../../services/updateMatch";

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
    <form>
      <div>
        <TournamentsList
          tournamentData={data}
          handleMapClick={handleMapClick}
        ></TournamentsList>
      </div>
      <div>
        <label style={{ color: "white" }}>Enter tournament ID</label>
        <input
          style={{ color: "white" }}
          type="text"
          placeholder="tournament ID"
          onChange={handleChangeTournamentID}
        />
      </div>
      <div>
        <label style={{ color: "white" }}>Enter WINNER player ID</label>
        <input
          style={{ color: "white" }}
          placeholder="Winner ID"
          onChange={handleChangePlayerWinner}
        ></input>
      </div>
      <div>
        <label style={{ color: "white" }}>Enter LOSER player ID</label>
        <input
          style={{ color: "white" }}
          placeholder="Looser ID"
          onChange={handleChangePlayerLooser}
        ></input>
      </div>

      <button
        onClick={(e) => {
          e.preventDefault();
          updateMatch(inputTournamentID, inputPlayerWinner, inputPlayerLooser);
        }}
      >
        Submit
      </button>
    </form>
  );
}

const submitForm = () => {
  return ScoreSubmit();
};

export default submitForm;
