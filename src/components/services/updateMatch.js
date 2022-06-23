import key from "../pages/adminHome/key";

function updateMatch(
    id,
    matchID,
    score,
    winnerID
) {
    const password = key;
    const tournamentId = id;

    let url = `https://api.challonge.com/v1/tournaments/${tournamentId}/matches/${matchID}?api_key=${password}`;

    let match = {
        "scores_csv": score,
        "winner_id": winnerID
    };

    putUpdateMatch(url, match);
}

async function putUpdateMatch(url, match) {
    fetch(url, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ match: match }),
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

export default updateMatch;
