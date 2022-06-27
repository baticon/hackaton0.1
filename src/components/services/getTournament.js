import key from "../pages/adminHome/key";

async function getTournament(id) {
  const password = key;
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
