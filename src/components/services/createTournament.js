function CreateTournament(tournamentName) {
  const username = "romasstana";
  const password = "5ttmG805ZCDDuoVWdwasaBjsFejkrt0wR5gdtlxU";
  let url = "https://api.challonge.com/v1/tournaments.json";
  //   let name = JSON.stringify(tournamentName);
  console.log("test from createTournament");
  console.log(tournamentName);
  let tournament = {
    name: tournamentName,
    game_name: "gameName",
    description: "tournamentDescription",
    tournament_type: "round robin",
  };

  async function PostCreateTournament() {
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ api_key: password, tournament: tournament }),
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  PostCreateTournament();
}
export default CreateTournament;
