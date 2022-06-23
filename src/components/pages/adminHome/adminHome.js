// import { Link } from "react-router-dom";
import Header from "../header/header";
// import getTournaments from "../../../components/services/tournaments";
import TournamentsList from "./tournamentsList";
import fetchTournaments from "../../services/tournaments";
// import fetchTournaments from "./dummyData";
import createTournament from "../../services/createTournament";
import deleteTournament from "../../services/deleteTournament";
import startTournament from "../../services/startTournament";
import updateTournament from "../../services/updateTournament";
// import Map from "../map/map";
import style from "./adminHome.module.css";

import { useState, useEffect } from "react";
// import SetMap from "../map/map";

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
  const [tournamentUpdateName, setTournamentUpdateName] = useState("");
  const [tournamentUpdateGameName, setTournamentUpdateGameName] = useState("");
  const [tournamentUpdateDescription, setTournamentUpdateDescription] =
    useState("");

  const [tournamentUpdateTournamentType, setTournamentUpdateTournamentType] =
    useState("");

  const handleChangeTournamentUpdateID = ({ target }) => {
    const id = Number(target.value);
    console.log("test from adminhome");
    console.log(data);
    const tournament = data.find(({ tournament }) => {
      return tournament.id === id;
    });
    setTournamentUpdateID(tournament.tournament.id);
    setTournamentUpdateName(tournament.tournament.name);
    setTournamentUpdateGameName(tournament.tournament.game_name);
    setTournamentUpdateDescription(tournament.tournament.description);
    setTournamentUpdateTournamentType(tournament.tournament.tournament_type);
    console.log("test");
    console.log(tournament);
  };

  const handleChangeTournamentUpdateName = ({ target }) => {
    setTournamentUpdateName(target.value);
  };
  const handleChangeTournamentUpdateGameName = ({ target }) => {
    setTournamentUpdateGameName(target.value);
  };
  const handleChangeTournamentUpdateDescription = ({ target }) => {
    setTournamentUpdateDescription(target.value);
  };
  const handleChangeTournamentUpdateTournamentType = ({ target }) => {
    setTournamentUpdateTournamentType(target.value);
  };

  // const [map, setMap] = useState();
  const [url, setUrl] = useState("");

  // function SetMap(urlPart) {
  //   return (
  //     <iframe
  //       src={`http://challonge.com/${urlPart}/module`}
  //       width="100%"
  //       height="500"
  //       frameborder="0"
  //       scrolling="auto"
  //       allowtransparency="true"
  //     ></iframe>
  //   );
  // }

  function handleMapClick(url) {
    setUrl(url);
    console.log(url);
  }

  return (
    <div className={style.body}>
      <Header></Header>
      <div>
        <div className={style.form}>
          <div>
            <div className={style.operationContainer}>
              <div>
                <button
                  className={style.button}
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
                <label style={{ color: "white" }}>Tournament name</label>
                <input
                  className={style.input}
                  placeholder="Enter tournament name"
                  onChange={handleChangeTournamentName}
                  value={tournamentName}
                ></input>
              </div>
              <div>
                <label style={{ color: "white" }}>Game name</label>
                <input
                  className={style.input}
                  placeholder="Enter game name"
                  onChange={handleChangeGameName}
                  value={gameName}
                ></input>
              </div>
              <div>
                <label style={{ color: "white" }}>Description</label>
                <input
                  className={style.input}
                  placeholder="Enter description"
                  onChange={handleChangeDescription}
                  value={description}
                ></input>
              </div>
              <div>
                <h4 style={{ color: "white" }}>{roundType}</h4>
                <select onChange={handleChangeRoundType}>
                  <option value="">Please select type of round</option>
                  <option value="single elimination">Single elimination</option>
                  <option value="double elimination">Double elimination</option>
                  <option value="round robin">Round robin</option>
                  <option value="swiss">Swiss</option>
                </select>
              </div>
            </div>
          </div>

          <div className={style.operationContainer}>
            <button
              className={style.button}
              onClick={() => {
                deleteTournament(tournamentDeleteName);
              }}
            >
              Delete tournament
            </button>
            <label style={{ color: "white" }}>Tournament ID</label>
            <input
              className={style.input}
              placeholder="Enter tournament ID"
              onChange={handleChangeTournamentDeleteName}
              value={tournamentDeleteName}
            ></input>
          </div>
          <div className={style.operationContainer}>
            <button
              className={style.button}
              onClick={() => {
                startTournament(tournamentStart);
              }}
            >
              Start tournament
            </button>
            <label style={{ color: "white" }}>Tournament ID</label>
            <input
              className={style.input}
              placeholder="Enter tournament ID"
              onChange={handleChangeTournamentStart}
              value={tournamentStart}
            ></input>
          </div>
          <div className={style.operationContainer}>
            <button
              className={style.button}
              onClick={() => {
                updateTournament(
                  tournamentUpdateID,
                  tournamentUpdateName,
                  tournamentUpdateGameName,
                  tournamentUpdateDescription,
                  tournamentUpdateTournamentType
                );
              }}
            >
              Update tournament
            </button>
            <label style={{ color: "white" }}>Tournament ID</label>
            <input
              className={style.input}
              placeholder="Enter tournament ID"
              onChange={handleChangeTournamentUpdateID}
              value={tournamentUpdateID}
            ></input>
            <label style={{ color: "white" }}>Tournament name</label>
            <input
              className={style.input}
              onChange={handleChangeTournamentUpdateName}
              value={tournamentUpdateName}
            ></input>
            <label style={{ color: "white" }}>Game name</label>
            <input
              className={style.input}
              onChange={handleChangeTournamentUpdateGameName}
              value={tournamentUpdateGameName}
            ></input>
            <label style={{ color: "white" }}>Description</label>
            <input
              className={style.input}
              onChange={handleChangeTournamentUpdateDescription}
              value={tournamentUpdateDescription}
            ></input>
            <div>
              <h4 style={{ color: "white" }}>
                {tournamentUpdateTournamentType}
              </h4>
              <select onChange={handleChangeTournamentUpdateTournamentType}>
                {" "}
                {tournamentUpdateTournamentType}
                <option value="">Please select type of round</option>
                <option value="single elimination">Single elimination</option>
                <option value="double elimination">Double elimination</option>
                <option value="round robin">Round robin</option>
                <option value="swiss">Swiss</option>
              </select>
            </div>
          </div>
        </div>
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
    </div>
  );
};

export default AdminHome;
