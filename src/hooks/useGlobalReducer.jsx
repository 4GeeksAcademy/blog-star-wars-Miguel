const API = "https://www.swapi.tech/api";

const getPeople = async () => {
  const resp = await fetch(`${API}/people`);
  const data = await resp.json();
  dispatch({ type: "set_people", payload: data.results });
};

const getPlanets = async () => {
  const resp = await fetch(`${API}/planets`);
  const data = await resp.json();
  dispatch({ type: "set_planets", payload: data.results });
};

const getVehicles = async () => {
  const resp = await fetch(`${API}/vehicles`);
  const data = await resp.json();
  dispatch({ type: "set_vehicles", payload: data.results });
};

const addFavorite = (item) =>
  dispatch({ type: "add_favorite", payload: item });

const removeFavorite = (uid) =>
  dispatch({ type: "remove_favorite", payload: uid });