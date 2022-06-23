function deleteTournament(tournamentId) {
  console.log("test from deleteTournament");
  console.log(tournamentId);
  //const tournamentId = "11325077";
  deleteDeleteTournament(tournamentId);
}

async function deleteDeleteTournament(tournamentId) {
  const password = "4aiMNGFnXRnKwIQfzeQWlMc3AJl1fAQ7FJOGIsF2";
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
