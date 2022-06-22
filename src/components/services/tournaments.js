let headers = new Headers();
const username = "romasstana";
const password = "5ttmG805ZCDDuoVWdwasaBjsFejkrt0wR5gdtlxU";
let url = "https://api.challonge.com/v1/tournaments.json";

//headers.append('Content-Type', 'text/json');
headers.set("Authorization", "Basic " + btoa(`${username}:${password}`));

// async function getTournament() {
//   await fetch(url, {
//     mode: "no-cors",
//     method: "GET",
//     headers: headers,
//     //credentials: 'user:passwd'
//   })
//     .then((response) => response.json())
//     .then((json) => console.log(json));
//   //.done();
// }

async function fetchTournaments() {
  try {
    const res = await fetch(url, {
      method: "GET",
      headers: headers,
    });
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default fetchTournaments;
