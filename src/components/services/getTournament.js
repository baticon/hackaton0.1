// function getSingleTournament(id) {
//   const password = "5ttmG805ZCDDuoVWdwasaBjsFejkrt0wR5gdtlxU";
//   const tournamentId = id;

//   let url = `https://api.challonge.com/v1/tournaments/${tournamentId}?api_key=${password}`;
//   getTournament(url);
// }

async function getTournament(id) {
  const password = "5ttmG805ZCDDuoVWdwasaBjsFejkrt0wR5gdtlxU";
  const tournamentId = id;

  let url = `https://api.challonge.com/v1/tournaments/${tournamentId}?api_key=${password}`;
  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

getTournament();
