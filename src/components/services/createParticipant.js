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
    const dataTour = await getParticipants(tournamentID);
    const participantID = dataTour.find((participant1) => {
      return participant1.participant.name === participant.name;
    });
    alert(`Your uniquie participant id is ${participantID.participant.id}`);
  } catch (error) {
    console.log(error);
  }
}

export default createParticipant;
