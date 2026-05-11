import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";

export const Favorites = () => {
  const { store, actions } = useGlobalReducer();

  return (
    <div className="container mt-4">

      <h2 className="text-warning">Favorites</h2>

      {store.favorites.length === 0 ? (
        <p>No favorites yet</p>
      ) : (
        store.favorites.map((item) => (
          <div
            key={item.uid}
            className="card p-2 mb-2 d-flex flex-row justify-content-between align-items-center"
          >
            <span>{item.name}</span>

            <button
              className="btn btn-danger btn-sm"
              onClick={() => actions.removeFavorite(item.uid)}
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        ))
      )}

      <Link to="/" className="btn btn-primary mt-3">
        Back
      </Link>

    </div>
  );
};