const password = "4aiMNGFnXRnKwIQfzeQWlMc3AJl1fAQ7FJOGIsF2";
const tournamentId = "11325077";

let url = `https://api.challonge.com/v1/tournaments/${tournamentId}?api_key=${password}`;

async function getTournament() {
fetch(url, {
    method: "GET",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
    }
})
    .then((response) => response.json())
    .then((json) => console.log(json));
}

export default getTournament;