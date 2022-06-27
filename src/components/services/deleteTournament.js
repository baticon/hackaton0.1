import key from "../pages/adminHome/key";

function deleteTournament(tournamentId) {
  deleteDeleteTournament(tournamentId);
}

async function deleteDeleteTournament(tournamentId) {
  const password = key;
  let url = `https://api.challonge.com/v1/tournaments/${tournamentId}?api_key=${password}`;
  try {
    await fetch(url, {
      method: "DELETE",
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

export default deleteTournament;
