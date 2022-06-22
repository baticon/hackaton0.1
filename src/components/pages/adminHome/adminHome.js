import { Link } from "react-router-dom";
import Header from "../header/header";
import getTournaments from "../../../components/services/tournaments";
import TournamentsList from "./tournamentsList";
import fetchTournaments from "../../services/tournaments";
import createTournament from "../../services/createTournament";
// import fetchTournaments from "./dummyData";
import { useState, useEffect } from "react";

const AdminHome = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await fetchTournaments();
      setData(res);
    }
    getData();
  }, []);

  const [tournamentName, setTournamentName] = useState("");
  const handleChangeTournamentName = ({ target }) => {
    setTournamentName(target.value);
  };

  // const [tournamentName, setTournamentName] = useState("");
  // const handleChangeTournamentNameDelete = ({ target }) => {
  //   setTournamentName(target.value);
  // };

  return (
    <div>
      <Header></Header>
      <div>
        <div>
          <button
            onClick={() => {
              createTournament(tournamentName);
            }}
          >
            Create tournament
          </button>
          <input
            placeholder="Enter tournament name"
            onChange={handleChangeTournamentName}
            value={tournamentName}
          ></input>
        </div>
        <div>
          <button
            onClick={() => {
              createTournament(tournamentName);
            }}
          >
            Delete tournament
          </button>
          <input
            placeholder="Enter tournament name"
            onChange={handleChangeTournamentName}
            value={tournamentName}
          ></input>
        </div>
        <button>Start tournament</button>
        <button>Finish tournament</button>
        {/* <button onClick={getTournament2()}>Show tournaments</button> */}
        <TournamentsList tournamentData={data}></TournamentsList>
      </div>
    </div>
  );
};

export default AdminHome;
