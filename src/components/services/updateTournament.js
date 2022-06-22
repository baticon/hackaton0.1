function updateTournament(tournamentName) {
    const password = "5ttmG805ZCDDuoVWdwasaBjsFejkrt0wR5gdtlxU";
    const tournamentId = "11325077";

    let url = `https://api.challonge.com/v1/tournaments/${tournamentId}?api_key=${password}`;

    let tournament = {
        name: "111111",
        game_name: "gameName",
        description: "tournamentDescription",
        tournament_type: "leaderboard",
    };
    async function putUpdateTournament() {
        fetch(url, {
            method: "PUT",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({"tournament": tournament})
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
//.done();
    }

    putUpdateTournament();
}
export default updateTournament;
