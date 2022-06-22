const password = "5ttmG805ZCDDuoVWdwasaBjsFejkrt0wR5gdtlxU";
const tournamentId = "11324912";

let url = `https://api.challonge.com/v1/tournaments/${tournamentId}/start?api_key=${password}`;


fetch(url, {
    method: "POST",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
    }
})
    .then((response) => response.json())
    .then((json) => console.log(json));