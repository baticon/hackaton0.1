import { Link } from "react-router-dom";
import Header from "../header/header";
import getTournaments from "../../../components/services/tournaments";
import TournamentsList from "./tournamentsList";
import fetchTournaments from "../../services/tournaments";
// import fetchTournaments from "./dummyData";
import createTournament from "../../services/createTournament";
import deleteTournament from "../../services/deleteTournament";
import startTournament from "../../services/startTournament";

import { useState, useEffect } from "react";

const AdminHome = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const res = await fetchTournaments();
      setData(res);
    }
    getData();
  }, [data]);

  const [tournamentName, setTournamentName] = useState("");
  const handleChangeTournamentName = ({ target }) => {
    setTournamentName(target.value);
  };

  const [gameName, setGameName] = useState("");
  const handleChangeGameName = ({ target }) => {
    setGameName(target.value);
  };

  const [description, setDescription] = useState("");
  const handleChangeDescription = ({ target }) => {
    setDescription(target.value);
    console.log(description);
  };

  const [roundType, setRoundType] = useState("");
  const handleChangeRoundType = ({ target }) => {
    setRoundType(target.value);
    console.log(roundType);
  };

  const [tournamentDeleteName, setTournamentDeleteName] = useState("");
  const handleChangeTournamentDeleteName = ({ target }) => {
    setTournamentDeleteName(target.value);
  };

  const [tournamentStart, setTournamentStart] = useState("");
  const handleChangeTournamentStart = ({ target }) => {
    setTournamentStart(target.value);
    console.log(tournamentStart);
  };

  const [tournamentUpdateID, setTournamentUpdateID] = useState("");
  const handleChangeTournamentUpdateID = ({ target }) => {
    setTournamentUpdateID(target.value);
    console.log(tournamentUpdateID);
  };

  return (
    <div>
      <Header></Header>
      <div>
        <div>
          <form>
            <button
              onClick={(e) => {
                e.preventDefault();
                createTournament(
                  tournamentName,
                  gameName,
                  description,
                  roundType
                );
              }}
            >
              Create tournament
            </button>
            <div>
              <label style={{ color: "white" }}>Tournament name</label>
              <br></br>
              <input
                placeholder="Enter tournament name"
                onChange={handleChangeTournamentName}
                value={tournamentName}
              ></input>
            </div>
            <div>
              <label style={{ color: "white" }}>Game name</label>
              <br></br>
              <input
                placeholder="Enter game name"
                onChange={handleChangeGameName}
                value={gameName}
              ></input>
            </div>
            <div>
              <label style={{ color: "white" }}>Description</label>
              <br></br>
              <input
                placeholder="Enter description"
                onChange={handleChangeDescription}
                value={description}
              ></input>
            </div>

            <h4 style={{ color: "white" }}>{roundType}</h4>
            <select onChange={handleChangeRoundType}>
              <option value="">Please select type of round</option>
              <option value="single elimination">Single elimination</option>
              <option value="double elimination">Double elimination</option>
              <option value="round robin">Round robin</option>
              <option value="swiss">Swiss</option>
            </select>
          </form>
        </div>
        <div>
          <button
            onClick={() => {
              deleteTournament(tournamentDeleteName);
            }}
          >
            Delete tournament
          </button>
          <input
            placeholder="Enter tournament ID"
            onChange={handleChangeTournamentDeleteName}
            value={tournamentDeleteName}
          ></input>
        </div>
        <div>
          <button
            onClick={() => {
              startTournament(tournamentStart);
            }}
          >
            Start tournament
          </button>
          <input
            placeholder="Enter tournament ID"
            onChange={handleChangeTournamentStart}
            value={tournamentStart}
          ></input>
        </div>
        <div>
          <button>Update tournament</button>
          <input
            placeholder="Enter tournament ID"
            onChange={handleChangeTournamentUpdateID}
            value={tournamentUpdateID}
          ></input>
        </div>
        {/* <button onClick={getTournament2()}>Show tournaments</button> */}
        <TournamentsList tournamentData={data}></TournamentsList>
      </div>
    </div>
  );
};

export default AdminHome;
