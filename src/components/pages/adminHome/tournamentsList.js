const TournamentList = (props) => {
  return (
    <div>
      <h1>Tournaments</h1>
      <div>
        {props.tournamentData.map(({ tournament }) => (
          <div key={tournament.id}>{tournament.name}</div>
        ))}
      </div>
    </div>
  );
};

export default TournamentList;
