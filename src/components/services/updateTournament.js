function updateTournament(
  id,
  tournamentName,
  gameName,
  description,
  tournamentType
) {
  const password = "4aiMNGFnXRnKwIQfzeQWlMc3AJl1fAQ7FJOGIsF2";
  const tournamentId = id;

  let url = `https://api.challonge.com/v1/tournaments/${tournamentId}?api_key=${password}`;

  let tournament = {
    name: tournamentName,
    game_name: gameName,
    description: description,
    tournament_type: tournamentType,
  };

  putUpdateTournament(url, tournament);
}

async function putUpdateTournament(url, tournament) {
  fetch(url, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ tournament: tournament }),
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

export default updateTournament;
