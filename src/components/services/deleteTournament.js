const password = "5ttmG805ZCDDuoVWdwasaBjsFejkrt0wR5gdtlxU";
const tournamentId = "11325077";

let url = `https://api.challonge.com/v1/tournaments/${tournamentId}?api_key=${password}`;

async function deleteTournament() {
    fetch(url, {
        method: "DELETE",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        }
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

export default deleteTournament;