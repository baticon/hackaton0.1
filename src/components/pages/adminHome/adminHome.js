import { Link } from "react-router-dom";
import Header from "../header/header";
import getTournaments from "../../../components/services/tournaments";
import TournamentsList from "./tournamentsList";
import fetchTournaments from "../../services/tournaments";
// import fetchTournaments from "./dummyData";
import { useState, useEffect } from "react";

// const data = getTournament2();
// console.log(data);

const AdminHome = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await fetchTournaments();
      setData(res);
    }
    getData();
  }, []);

  return (
    <div>
      <Header></Header>
      <div>
        <button>Create tournament</button>
        <button>Start tournament</button>
        <button>Finish tournament</button>
        {/* <button onClick={getTournament2()}>Show tournaments</button> */}
        <TournamentsList tournamentData={data}></TournamentsList>
      </div>
    </div>
  );
};

export default AdminHome;
