import key from "../pages/adminHome/key";

const password = key;
const tournamentID = "11329537";
let url = `https://api.challonge.com/v1/tournaments/${tournamentID}/matches?api_key=${password}`;

fetch(url, {
  method: "GET",
  headers: {
    //headers,
    Accept: "application/json",
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
//.done();
