import key from "../pages/adminHome/key";

function getPaticipants(tournamentId) {
  console.log("test from deleteTournament");
  console.log(tournamentId);
  getGetPaticipants(tournamentId);
}

async function getGetPaticipants(tournamentId) {
  const password = key;
  let url = `https://api.challonge.com/v1/tournaments/${tournamentId}/participants?api_key=${password}`;
  try {
    await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  } catch (error) {
    console.log(error);
  }
}

export default getPaticipants;
