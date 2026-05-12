import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../main";

const Card = ({ name, uid, type }) => {

    const { store, dispatch } = useContext(Context);

    const images = {

        people: {

            1: "https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_7ffe21c7.jpeg?region=130%2C147%2C1417%2C796",

            2: "https://lumiere-a.akamaihd.net/v1/images/c-3po-main_d6850e28.jpeg",

            3: "https://lumiere-a.akamaihd.net/v1/images/r2-d2-main_f315b094.jpeg?region=273%2C0%2C951%2C536",

            4: "https://lumiere-a.akamaihd.net/v1/images/darth-vader-main_4560aff7.jpeg",

            5: "https://lumiere-a.akamaihd.net/v1/images/leia-organa-main_9af6ff81.jpeg?region=187%2C157%2C1400%2C786",

            6: "https://lumiere-a.akamaihd.net/v1/images/owen-lars-main_08c717c8.jpeg?region=0%2C34%2C1053%2C593",

            7: "https://lumiere-a.akamaihd.net/v1/images/databank_cliegglars_01_169_c2f0b9cb.jpeg?region=0%2C0%2C1560%2C878",

            8: "https://lumiere-a.akamaihd.net/v1/images/r5-d4_main_image_7d5f078e.jpeg?region=374%2C0%2C1186%2C666",

            9: "https://lumiere-a.akamaihd.net/v1/images/image_606ff7f7.jpeg?region=0%2C0%2C1560%2C878",

            10: "https://lumiere-a.akamaihd.net/v1/images/obi-wan-kenobi-main_3286c63c.jpeg?region=0%2C0%2C1280%2C721",

        },

        planets: {

            1: "https://lumiere-a.akamaihd.net/v1/images/tatooine-main_9542b896.jpeg",

            2: "https://lumiere-a.akamaihd.net/v1/images/alderaan-main_f5b676cf.jpeg?region=0%2C0%2C1280%2C720",

            3: "https://lumiere-a.akamaihd.net/v1/images/yavin-4-main_bd23f447.jpeg?region=331%2C0%2C949%2C534",

            4: "https://lumiere-a.akamaihd.net/v1/images/Hoth_d074d307.jpeg?region=0%2C0%2C1200%2C675",

            5: "https://lumiere-a.akamaihd.net/v1/images/Dagobah_890df592.jpeg?region=0%2C80%2C1260%2C711",

            6: "https://lumiere-a.akamaihd.net/v1/images/Bespin_2d0759aa.jpeg?region=0%2C0%2C1560%2C878",

            7: "https://lumiere-a.akamaihd.net/v1/images/databank_endor_01_169_68ba9bdc.jpeg?region=0%2C0%2C1560%2C878",

            8: "https://lumiere-a.akamaihd.net/v1/images/databank_naboo_01_169_6cd7e1e0.jpeg?region=0%2C0%2C1560%2C878",

            9: "https://lumiere-a.akamaihd.net/v1/images/coruscant-main_d2fad5f2.jpeg?region=245%2C0%2C1430%2C804",

            10: "https://lumiere-a.akamaihd.net/v1/images/kamino-main_3001369e.jpeg?region=158%2C0%2C964%2C542",

        },

        vehicles: {

            4: "https://static.wikia.nocookie.net/starwars/images/6/6a/Sandcrawler-TMCh9.png/revision/latest/scale-to-width-down/1000?cb=20201213202508",

            6: "https://static.wikia.nocookie.net/starwars/images/5/5a/T16Skyhopper-2015StarWars20.png/revision/latest/scale-to-width-down/1000?cb=20160805002611",

            7: "https://lumiere-a.akamaihd.net/v1/images/E4D_IA_1136_6b8704fa.jpeg?region=237%2C0%2C1456%2C819",

            8: "https://diceandcardboard.com/content/images/2022/06/7D447526-4083-44FC-BAAD-FEBA5A3872B0.jpeg",

            14: "https://lumiere-a.akamaihd.net/v1/images/snowspeeder_ef2f9334.jpeg?region=0%2C211%2C2048%2C1154",

            16: "https://lumiere-a.akamaihd.net/v1/images/tie-bomber-main_d4d9b979.jpeg?region=424%2C0%2C632%2C356",

            18: "https://lumiere-a.akamaihd.net/v1/images/AT-AT_89d0105f.jpeg?region=138%2C19%2C1392%2C697",

            19: "https://lumiere-a.akamaihd.net/v1/images/e6d_ia_5724_a150e6d4.jpeg?region=124%2C0%2C1424%2C802",

            20: "https://i.pinimg.com/originals/62/e0/0d/62e00d1f888409ac4582f93389444042.jpg",

            24: "https://static.wikia.nocookie.net/starwars/images/8/8c/Sail_Barge.png/revision/latest?cb=20130331043828",

        }

    };

    let image = images[type]?.[uid];

    if (!image) {
        image = "https://placehold.co/600x400?text=Star+Wars";
    }

    // REVISA SI YA ESTA EN FAVORITOS
    const isFavorite = store.favorites.includes(name);

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
                        className={`btn ${
                            isFavorite
                                ? "btn-warning"
                                : "btn-outline-warning"
                        }`}
                        onClick={() => {

                            if (isFavorite) {

                                dispatch({
                                    type: "remove_favorite",
                                    payload: name
                                });

                            } else {

                                dispatch({
                                    type: "add_favorite",
                                    payload: name
                                });

                            }

                        }}
                    >

                        <i className="fa-solid fa-heart"></i>

                    </button>

                </div>

            </div>

        </div>
    )
}

export default Card;