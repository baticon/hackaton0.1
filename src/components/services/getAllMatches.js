import key from "../pages/adminHome/key";

async function getAllMatches(id) {
  const password = key;
  const tournamentID = id;
  let url = `https://api.challonge.com/v1/tournaments/${tournamentID}/matches?api_key=${password}`;

  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        //headers,
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

export default getAllMatches;
