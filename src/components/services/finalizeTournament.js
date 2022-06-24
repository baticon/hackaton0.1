// import key from "../pages/adminHome/key";

// async function finalize(id) {
//   const password = key;
//   // const tournamentId = "11329291";
//   const tournamentId = id;

//   let url = `https://api.challonge.com/v1/tournaments/${tournamentId}/finalize.json`;
//   try {
//     await fetch(url, {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ "api-key": password }),
//     });
//   } catch (error) {
//     console.log(error);
//   }
//   //   .then((response) => response.json())
//   //   .then((json) => console.log(json));
// }

// export default finalize;

// // async function PostCreateParticipant(tournamentID, participant) {
// //     const password = key;
// //     let url = `https://api.challonge.com/v1/tournaments/${tournamentID}/participants.json`;
// //     console.log(tournamentID, participant);
// //     try {
// //       await fetch(url, {
// //         method: "POST",
// //         headers: {
// //           //headers,
// //           Accept: "application/json",
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify({ api_key: password, participant: participant }),
// //       })
// //         .then((response) => response.json())
// //         .then((json) => console.log(json));
// //     } catch (error) {
// //       console.log(error);
// //     }

import key from "../pages/adminHome/key";

function finalizeTournament(tournamentId) {
  console.log("test from finalizeTournament");
  console.log(tournamentId);
  //const tournamentId = "11325077";
  postfinalizeTournament(tournamentId);
}

async function postfinalizeTournament(id) {
  const password = key;
  const tournamentId = id;

  let url = `https://api.challonge.com/v1/tournaments/${tournamentId}/finalize?api_key=${password}`;

  fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

export default finalizeTournament;
