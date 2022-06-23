import key from "../pages/adminHome/key";
import getAllMatches from "./getAllMatches";

async function updateMatch(
  id, //tournament id
  winnerID,
  loserID
) {
  const password = key;
  const tournamentId = id;
  const allMatches = await getAllMatches(tournamentId);
  console.log("test from updateMatch.js");
  console.log(allMatches);
  let idFound = false;

  let wID = parseInt(winnerID);
  let lID = parseInt(loserID);

  const matchData = allMatches.find((match) => {
    console.log("type of match palyer id");
    console.log(typeof match.match.player1_id);
    console.log("11111111111");
    console.log(match.match.player1_id);
    console.log(wID);
    console.log("22222222222");
    console.log(match.match.player2_id);
    console.log(lID);
    console.log("33333333333");
    console.log(match.match.player1_id);
    console.log(lID);
    console.log("44444444444");
    console.log(match.match.player2_id);
    console.log(wID);
    if (
      (match.match.player1_id === wID && match.match.player2_id === lID) ||
      (match.match.player1_id === lID && match.match.player2_id === wID)
    ) {
      console.log("HELLO");
      idFound = true;
      return match.match;
    } else {
      console.log("you have entered wrong IDs");
    }
  });

  console.log(matchData.match.id);
  if (idFound === true) {
    let scores_csv = "";
    if (matchData.player1_id === wID) {
      scores_csv = "1-0";
    } else {
      scores_csv = "0-1";
    }

    let url = `https://api.challonge.com/v1/tournaments/${tournamentId}/matches/${matchData.match.id}?api_key=${password}`;

    let match = {
      scores_csv: scores_csv,
      winner_id: wID,
    };

    putUpdateMatch(url, match);
  }
}

async function putUpdateMatch(url, match) {
  console.log(match);
  try {
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
  } catch (error) {
    console.log(error);
  }
}

export default updateMatch;
