import key from "../pages/adminHome/key";

async function finalize() {
  const password = key;
  const tournamentId = "11329291";

  let url = `https://api.challonge.com/v1/tournaments/${tournamentId}/finalize?api_key=${password}`;

  fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: {
      "api-key": "4aiMNGFnXRnKwIQfzeQWlMc3AJl1fAQ7FJOGIsF2",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

// async function PostCreateParticipant(tournamentID, participant) {
//     const password = key;
//     let url = `https://api.challonge.com/v1/tournaments/${tournamentID}/participants.json`;
//     console.log(tournamentID, participant);
//     try {
//       await fetch(url, {
//         method: "POST",
//         headers: {
//           //headers,
//           Accept: "application/json",
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ api_key: password, participant: participant }),
//       })
//         .then((response) => response.json())
//         .then((json) => console.log(json));
//     } catch (error) {
//       console.log(error);
//     }
