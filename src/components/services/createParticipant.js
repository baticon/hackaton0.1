import key from "../pages/adminHome/key";

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
    await fetch(url, {
      method: "POST",
      headers: {
        //headers,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ api_key: password, participant: participant }),
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  } catch (error) {
    console.log(error);
  }
}

export default createParticipant;
