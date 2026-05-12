import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Single = () => {

    const params = useParams();

    const [data, setData] = useState(null);

    useEffect(() => {

        fetch(`https://www.swapi.tech/api/${params.type}/${params.uid}`)
            .then((res) => res.json())
            .then((data) => {

                setData(data.result.properties);

            })
            .catch((error) => {

                console.log(error);

            });

    }, [params]);

    if (!data) {

        return <h1 className="text-center mt-5 text-warning">Loading...</h1>;

    }

    // IMAGENES

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

            10: "https://lumiere-a.akamaihd.net/v1/images/obi-wan-kenobi-main_3286c63c.jpeg?region=0%2C0%2C1280%2C721"

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

            10: "https://lumiere-a.akamaihd.net/v1/images/kamino-main_3001369e.jpeg?region=158%2C0%2C964%2C542"

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

            24: "https://static.wikia.nocookie.net/starwars/images/8/8c/Sail_Barge.png/revision/latest?cb=20130331043828"

        }

    };

    // DESCRIPCIONES

    const descriptions = {

        people: {

            "Luke Skywalker":
                "Luke Skywalker is a legendary Jedi Knight who helped defeat the Galactic Empire and restore balance to the Force.",

            "C-3PO":
                "C-3PO is a protocol droid fluent in over six million forms of communication and loyal to the Rebel Alliance.",

            "R2-D2":
                "R2-D2 is a courageous astromech droid who assisted Jedi and Rebels during many galactic missions.",

            "Darth Vader":
                "Darth Vader was once Anakin Skywalker before turning to the dark side and becoming a Sith Lord.",

            "Leia Organa":
                "Leia Organa is a brave leader of the Rebel Alliance and a symbol of hope across the galaxy.",

            "Obi-Wan Kenobi":
                "Obi-Wan Kenobi was a wise Jedi Master who trained both Anakin and Luke Skywalker."

        },

        planets: {

            "Tatooine":
                "Tatooine is a desert world located in the Outer Rim and home to Luke Skywalker.",

            "Alderaan":
                "Alderaan was a peaceful planet destroyed by the Death Star during the Galactic Civil War.",

            "Hoth":
                "Hoth is an icy planet that served as a secret Rebel Alliance base.",

            "Dagobah":
                "Dagobah is a swamp planet where Yoda lived in exile and trained Luke Skywalker."

        },

        vehicles: {

            "Sand Crawler":
                "A massive transport vehicle used by Jawas to travel across the deserts of Tatooine.",

            "T-16 skyhopper":
                "A fast civilian airspeeder commonly used for training and recreation on Tatooine.",

            "X-34 landspeeder":
                "Luke Skywalker's iconic landspeeder used to travel across the deserts of Tatooine."

        }

    };

    // IMAGEN ACTUAL

    let image = images?.[params.type]?.[params.uid];

    if (!image) {

        image = "https://placehold.co/600x400?text=Star+Wars";

    }

    // DESCRIPCION ACTUAL

    const description =
        descriptions?.[params.type]?.[data.name] ||
        "This character, planet or vehicle is part of the Star Wars universe.";

    return (

        <div className="container mt-5 mb-5">

            <div className="row align-items-center">

                <div className="col-md-6">

                    <img
                        src={image}
                        className="img-fluid rounded"
                    />

                </div>

                <div className="col-md-6">

                    <h1
                        className="mb-4"
                        style={{
                            color: "#ffe81f",
                            fontWeight: "bold",
                            textShadow: "0px 0px 10px rgba(255,232,31,0.5)"
                        }}
                    >
                        {data.name}
                    </h1>

                    <p
                        style={{
                            color: "white",
                            fontSize: "1.1rem",
                            lineHeight: "1.8"
                        }}
                    >

                        {description}

                    </p>

                </div>

            </div>

            <hr
                className="my-5"
                style={{
                    borderColor: "#ffe81f"
                }}
            />

            <div className="row text-center mt-5">

                {
                    params.type === "people" && (

                        <>

                            <div className="col-md-3 mb-4">

                                <h5 style={{ color: "#ffe81f" }}>
                                    Gender
                                </h5>

                                <p style={{ color: "white" }}>
                                    {data.gender}
                                </p>

                            </div>

                            <div className="col-md-3 mb-4">

                                <h5 style={{ color: "#ffe81f" }}>
                                    Height
                                </h5>

                                <p style={{ color: "white" }}>
                                    {data.height}
                                </p>

                            </div>

                            <div className="col-md-3 mb-4">

                                <h5 style={{ color: "#ffe81f" }}>
                                    Eye Color
                                </h5>

                                <p style={{ color: "white" }}>
                                    {data.eye_color}
                                </p>

                            </div>

                            <div className="col-md-3 mb-4">

                                <h5 style={{ color: "#ffe81f" }}>
                                    Birth Year
                                </h5>

                                <p style={{ color: "white" }}>
                                    {data.birth_year}
                                </p>

                            </div>

                        </>

                    )
                }

                {
                    params.type === "planets" && (

                        <>

                            <div className="col-md-3 mb-4">

                                <h5 style={{ color: "#ffe81f" }}>
                                    Climate
                                </h5>

                                <p style={{ color: "white" }}>
                                    {data.climate}
                                </p>

                            </div>

                            <div className="col-md-3 mb-4">

                                <h5 style={{ color: "#ffe81f" }}>
                                    Population
                                </h5>

                                <p style={{ color: "white" }}>
                                    {data.population}
                                </p>

                            </div>

                            <div className="col-md-3 mb-4">

                                <h5 style={{ color: "#ffe81f" }}>
                                    Terrain
                                </h5>

                                <p style={{ color: "white" }}>
                                    {data.terrain}
                                </p>

                            </div>

                            <div className="col-md-3 mb-4">

                                <h5 style={{ color: "#ffe81f" }}>
                                    Diameter
                                </h5>

                                <p style={{ color: "white" }}>
                                    {data.diameter}
                                </p>

                            </div>

                        </>

                    )
                }

                {
                    params.type === "vehicles" && (

                        <>

                            <div className="col-md-3 mb-4">

                                <h5 style={{ color: "#ffe81f" }}>
                                    Model
                                </h5>

                                <p style={{ color: "white" }}>
                                    {data.model}
                                </p>

                            </div>

                            <div className="col-md-3 mb-4">

                                <h5 style={{ color: "#ffe81f" }}>
                                    Manufacturer
                                </h5>

                                <p style={{ color: "white" }}>
                                    {data.manufacturer}
                                </p>

                            </div>

                            <div className="col-md-3 mb-4">

                                <h5 style={{ color: "#ffe81f" }}>
                                    Vehicle Class
                                </h5>

                                <p style={{ color: "white" }}>
                                    {data.vehicle_class}
                                </p>

                            </div>

                            <div className="col-md-3 mb-4">

                                <h5 style={{ color: "#ffe81f" }}>
                                    Crew
                                </h5>

                                <p style={{ color: "white" }}>
                                    {data.crew}
                                </p>

                            </div>

                        </>

                    )
                }

            </div>

        </div>
    );
};