import { Link } from "react-router-dom";
import Header from "../header/header";
import getTournaments from "../../../components/services/tournaments";
import TournamentsList from "./tournamentsList";
import fetchTournaments from "../../services/tournaments";
import Createtournament from "../../services/createTournament";
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

  const [tournamentName, setTournamentName] = useState([]);

  const handleChangeTournamentName = (event) => {
    setTournamentName(event.target.value);

    console.log("Tournament name is:", tournamentName);
    console.log(typeof tournamentName);
  };

  return (
    <div>
      <Header></Header>
      <div>
        <div>
          <button onClick={Createtournament(tournamentName)}>
            Create tournament
          </button>
        </div>
        <div>
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
