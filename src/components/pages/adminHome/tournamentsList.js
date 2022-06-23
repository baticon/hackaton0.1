const TournamentList = (props) => {
  return (
    <div>
      <h1>Tournaments</h1>
      <div>
        {props.tournamentData.map(({ tournament }) => (
          <div style={{ color: "white" }} key={tournament.id}>
            ID: {tournament.id} || tournament name: {tournament.name} ||
            tournament description {tournament.description} || tournament type{" "}
            {tournament.tournament_type}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TournamentList;
