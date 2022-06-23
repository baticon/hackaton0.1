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

  return (
    <form>
      <div>
        <TournamentsList
          tournamentData={data}
          handleMapClick={handleMapClick}
        ></TournamentsList>
      </div>
      <input placeholder="tournament ID"></input>
      <input placeholder="round number"></input>
      <input placeholder="winner ID"></input>
      <button>Submit</button>
    </form>
  );
}

const submitForm = () => {
  return ScoreSubmit();
};

export default submitForm;
