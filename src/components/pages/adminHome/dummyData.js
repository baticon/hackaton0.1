const dummyData = [
  {
    tournament: {
      id: 11323900,
      name: "turik",
    },
  },
  {
    tournament: {
      id: 11324117,
      name: "hack123",
    },
  },
];

async function fetchTournaments() {
  return Promise.resolve(dummyData);
}

export default fetchTournaments;
