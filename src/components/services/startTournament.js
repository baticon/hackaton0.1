import key from "../pages/adminHome/key";

function startTournament(tournamentId) {
  postStartTournament(tournamentId);
}

async function postStartTournament(id) {
  const password = key;
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
