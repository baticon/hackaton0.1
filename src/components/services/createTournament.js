import key from "../pages/adminHome/key";

function createTournament(tournamentName, gameName, description, roundType) {
  if (
    tournamentName.length > 0 &&
    gameName.length > 0 &&
    description.length > 0 &&
    roundType.length > 0
  ) {
    let tournament = {
      name: tournamentName,
      game_name: gameName,
      description: description,
      tournament_type: roundType,
    };

    PostCreateTournament(tournament);
  } else {
    alert("Please fill in all required fields");
  }
}

async function PostCreateTournament(tournament) {
  const password = key;
  try {
    await fetch("https://api.challonge.com/v1/tournaments.json", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ api_key: password, tournament: tournament }),
    });
  } catch (error) {
    console.log(error);
  }
}

export default createTournament;
