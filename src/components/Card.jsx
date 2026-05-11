import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../main";

const starwarsImages = {

    people: {

        1: "https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_d2b0d16f.jpeg",

        2: "https://lumiere-a.akamaihd.net/v1/images/c-3po-main_d6850e28.jpeg",

        3: "https://lumiere-a.akamaihd.net/v1/images/r2-d2-main_3d0e8c24.jpeg",

        4: "https://lumiere-a.akamaihd.net/v1/images/darth-vader-main_4560aff7.jpeg",

        5: "https://lumiere-a.akamaihd.net/v1/images/leia-organa-main_5116879f.jpeg",

        10: "https://lumiere-a.akamaihd.net/v1/images/obi-wan-kenobi-main_ae5878d7.jpeg"

    },

    planets: {

        1: "https://lumiere-a.akamaihd.net/v1/images/tatooine-main_9542b896.jpeg",

        2: "https://lumiere-a.akamaihd.net/v1/images/alderaan-main_3001d277.jpeg"

    },

    vehicles: {

        4: "https://lumiere-a.akamaihd.net/v1/images/x-wing-starfighter_1_6e27d095.jpeg",

        6: "https://lumiere-a.akamaihd.net/v1/images/tie-fighter-main_7c7ac3a9.jpeg"
    }

};

const Card = ({ name, uid, type }) => {

    const { dispatch } = useContext(Context);

    const image =
        starwarsImages[type]?.[uid] ||
        "https://starwarsblog.starwars.com/wp-content/uploads/2015/11/star-wars-logo-1536x864-959818851016.jpg";

    return (

        <div className="card">

            <img
                src={image}
                className="card-img-top"
            />

            <div className="card-body">

                <h5 className="card-title">
                    {name}
                </h5>

                <div className="d-flex justify-content-between">

                    <Link
                        to={`/single/${type}/${uid}`}
                        className="btn btn-outline-primary"
                    >
                        Learn more!
                    </Link>

                    <button
                        className="btn btn-outline-warning"
                        onClick={() =>
                            dispatch({
                                type: "add_favorite",
                                payload: name
                            })
                        }
                    >

                        <i className="fa-solid fa-heart"></i>

                    </button>

                </div>

            </div>

        </div>
    )
}

export default Card;