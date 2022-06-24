// import key from "../pages/adminHome/key";

// function createParticipant(tournamentID, participantName, participantEmail) {
//   console.log("test from createParticipant");
//   console.log(tournamentID, participantName, participantEmail);
//   let participant = {
//     name: participantName,
//     email: participantEmail,
//   };
//   console.log(participant);
//   PostCreateParticipant(tournamentID, participant);
// }

// async function PostCreateParticipant(tournamentID, participant) {
//   const password = key;
//   let url = `https://api.challonge.com/v1/tournaments/${tournamentID}/participants.json`;
//   console.log(tournamentID, participant);
//   try {
//     await fetch(url, {
//       method: "POST",
//       headers: {
//         //headers,
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ api_key: password, participant: participant }),
//     })
//       .then((response) => response.json())
//       .then((json) => console.log(json));
//   } catch (error) {
//     // console.log(error);
//     alert(error);
//   }
// }

// export default createParticipant;

import key from "../pages/adminHome/key";
import getParticipants from "./getParticipants";

function createParticipant(tournamentID, participantName, participantEmail) {
  console.log("test from createParticipant");
  console.log(tournamentID, participantName, participantEmail);
  let participant = {
    name: participantName,
    email: participantEmail,
  };
  console.log(participant);
  PostCreateParticipant(tournamentID, participant);
}

async function PostCreateParticipant(tournamentID, participant) {
  const password = key;
  let url = `https://api.challonge.com/v1/tournaments/${tournamentID}/participants.json`;
  console.log(tournamentID, participant);
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        //headers,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ api_key: password, participant: participant }),
    });
    const data = await res.json;
    console.log("test data");
    console.log(data);
    console.log("test participant name");
    console.log(participant.name);
    const dataTour = await getParticipants(tournamentID);
    console.log(dataTour);
    const participantID = dataTour.find((participant1) => {
      return participant1.participant.name === participant.name;
    });
    console.log(participantID);
    alert(`Your uniquie participant id is ${participantID.participant.id}`);
    //.then((response) => alert(`Your ID in tournament`)
  } catch (error) {
    console.log(error);
    //alert(error);
  }
}

export default createParticipant;
