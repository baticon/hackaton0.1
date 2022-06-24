import style from "./tournamentList.module.css";
import { useState, useEffect } from "react";
import fetchTournaments from "../../services/tournaments";
import SetMap from "../map/map";

const TournamentList = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const res = await fetchTournaments();
      setData(res);
    }
    getData();
  }, [data]);

  return (
    <div>
      <h1 className={style.header}>Tournaments</h1>
      <div className={style.tournamentList}>
        {props.tournamentData.map(({ tournament }) => (
          <div
            onClick={() => {
              props.handleMapClick(tournament.url);
            }}
            className={style.individualTournament}
            key={tournament.id}
          >
            <span>ID: {tournament.id}</span>
            <br></br>
            <span>tournament name: {tournament.name}</span>
            <br></br>
            <span>tournament description {tournament.description}</span>{" "}
            <br></br>
            <span>tournament type {tournament.tournament_type}</span>
            <br></br>
            <span># of players {tournament.participants_count}</span>
            <br></br>
            <span>tournament url {tournament.url}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TournamentList;
