function getPaticipants(tournamentId, participantID) {
    console.log("test from deleteTournament");
    console.log(tournamentId);
    getGetPaticipants(tournamentId, participantID);
}

async function getGetPaticipants(tournamentId, participantID) {
    const password = "4aiMNGFnXRnKwIQfzeQWlMc3AJl1fAQ7FJOGIsF2";
    let url = `https://api.challonge.com/v1/tournaments/${tournamentId}/participants/${participantID}?api_key=${password}`;
    try {
        await fetch(url, {
            method: "GET",
            headers: {
                //headers,
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }  catch (error) {
        console.log(error);
    }

}

export default getPaticipants;