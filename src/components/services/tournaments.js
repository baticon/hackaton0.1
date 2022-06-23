let headers = new Headers();
const username = "romasstana";
const password = "5ttmG805ZCDDuoVWdwasaBjsFejkrt0wR5gdtlxU";
let url = "https://api.challonge.com/v1/tournaments.json";

//headers.append('Content-Type', 'text/json');
headers.set("Authorization", "Basic " + btoa(`${username}:${password}`));

async function fetchTournaments() {
  try {
    const res = await fetch(url, {
      method: "GET",
      headers: headers,
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default fetchTournaments;
