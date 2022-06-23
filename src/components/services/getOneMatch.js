import key from "../pages/adminHome/key";

function getOneMatch(id, matchID) {
    const password = key;
    const tournamentID = id;
    let url = `https://api.challonge.com/v1/tournaments/${tournamentID}/matches/${matchID}?api_key=${password}`;

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
}

export default getOneMatch;
