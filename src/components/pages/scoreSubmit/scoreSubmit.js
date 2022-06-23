import { useState, useEffect } from "react";
import fetchTournaments from "../../services/tournaments";
import TournamentsList from "../adminHome/tournamentsList";

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
          type="text"
          placeholder="tournament ID"
          onChange={handleChangeTournamentID}
          value={inputTournamentID}
        />
      </div>
      <div>
        <label style={{ color: "white" }}>Enter WINNER player ID</label>
        <input placeholder="round number"></input>
      </div>
      <div>
        <label style={{ color: "white" }}>Enter LOSER player ID</label>
        <input placeholder="winner ID"></input>
      </div>

      <button>Submit</button>
    </form>
  );
}

const submitForm = () => {
  return ScoreSubmit();
};

export default submitForm;
