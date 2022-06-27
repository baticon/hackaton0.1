let headers = new Headers();
const username = "testtes";
const password = "4aiMNGFnXRnKwIQfzeQWlMc3AJl1fAQ7FJOGIsF2";
let url = "https://api.challonge.com/v1/tournaments.json";

headers.set("Authorization", "Basic " + btoa(`${username}:${password}`));

async function fetchTournaments() {
  try {
    const res = await fetch(url, {
      method: "GET",
      headers: headers,
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default fetchTournaments;
