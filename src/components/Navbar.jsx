import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../main";

const Navbar = () => {

    const { store, dispatch } = useContext(Context);

    return (

        <nav className="navbar navbar-light bg-light">

            <Link to="/">

                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"
                    width="120"
                />

            </Link>

            <div className="dropdown">

                <button
                    className="btn btn-warning dropdown-toggle"
                    data-bs-toggle="dropdown"
                >

                    Favorites {store.favorites.length}

                </button>

                <ul className="dropdown-menu dropdown-menu-end">

                    {
                        store.favorites.length === 0
                        ?
                        <li className="dropdown-item">
                            No favorites yet
                        </li>
                        :
                        store.favorites.map((item, index) => (

                            <li
                                key={index}
                                className="dropdown-item d-flex justify-content-between align-items-center"
                            >

                                {item}

                                <i
                                    className="fa-solid fa-trash"
                                    style={{cursor:"pointer"}}
                                    onClick={() =>
                                        dispatch({
                                            type: "remove_favorite",
                                            payload: item
                                        })
                                    }
                                ></i>

                            </li>
                        ))
                    }

                </ul>

            </div>

        </nav>
    )
}

export default Navbar;