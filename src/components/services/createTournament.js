function createTournament(tournamentName) {
  console.log("test from createTournament");
  console.log(tournamentName);
  let tournament = {
    name: tournamentName,
    game_name: "gameName",
    description: "tournamentDescription",
    tournament_type: "round robin",
  };

  PostCreateTournament(tournament);
}

async function PostCreateTournament(tournament) {
  const password = "5ttmG805ZCDDuoVWdwasaBjsFejkrt0wR5gdtlxU";
  try {
    await fetch("https://api.challonge.com/v1/tournaments.json", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ api_key: password, tournament }),
    });
  } catch (error) {
    console.log(error);
  }
}

export default createTournament;
