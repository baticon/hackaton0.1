import { useState, useEffect } from "react";
import fetchTournaments from "../../services/tournaments";
import style from "./registrationParticipants.module.css";

const TournamentList = (props) => {
  return (
    <div>
      <h1 style={{ marginLeft: "20px" }}>Tournaments</h1>
      <div style={{ display: "flex", marginLeft: "10px" }}>
        <div className={style.opsContainerID}>
          <h4>ID</h4>
          {props.tournamentData.map(({ tournament }) => (
            <div>
              <span style={{ color: "white" }}>{tournament.id}</span>
            </div>
          ))}
        </div>
        <div className={style.opsContainer}>
          <h4>Name</h4>
          {props.tournamentData.map(({ tournament }) => (
            <div>
              <span style={{ color: "white" }}>{tournament.name}</span>
            </div>
          ))}
        </div>
        <div className={style.opsContainer}>
          <h4>Type</h4>
          {props.tournamentData.map(({ tournament }) => (
            <div>
              <span style={{ color: "white" }}>
                {tournament.tournament_type}
              </span>
            </div>
          ))}
        </div>
        <div className={style.opsContainer}>
          <h4>Status</h4>
          {props.tournamentData.map(({ tournament }) => (
            <div>
              <span style={{ color: "white" }}>{tournament.state}</span>
            </div>
          ))}
        </div>
        <div className={style.opsContainerID}>
          <h4># players</h4>
          {props.tournamentData.map(({ tournament }) => (
            <div>
              <span style={{ color: "white" }}>
                {tournament.participants_count}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TournamentList;
