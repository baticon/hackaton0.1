function startTournament(tournamentId) {
  console.log("test from deleteTournament");
  console.log(tournamentId);
  //const tournamentId = "11325077";
  postStartTournament(tournamentId);
}

async function postStartTournament(id) {
  const password = "4aiMNGFnXRnKwIQfzeQWlMc3AJl1fAQ7FJOGIsF2";
  const tournamentId = id;

  let url = `https://api.challonge.com/v1/tournaments/${tournamentId}/start?api_key=${password}`;

  fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

export default startTournament;
