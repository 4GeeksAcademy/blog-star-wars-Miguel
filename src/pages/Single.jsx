import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
        return <h1 className="text-center mt-5">Loading...</h1>;
    }

    const image =
        starwarsImages?.[params.type]?.[params.uid] ||
        "https://starwarsblog.starwars.com/wp-content/uploads/2015/11/star-wars-logo-1536x864-959818851016.jpg";

    return (

        <div className="container mt-5">

            <div className="row align-items-center">

                <div className="col-md-6">

                    <img
                        src={image}
                        className="img-fluid rounded shadow"
                    />

                </div>

                <div className="col-md-6">

                    <h1 className="display-4">
                        {data.name}
                    </h1>

                    <p className="mt-4 text-muted">

                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptates, officiis. Ipsum molestias nemo expedita
                        distinctio rem sapiente natus molestiae pariatur.

                    </p>

                </div>

            </div>

            <hr className="my-5" />

            <div className="row text-danger text-center">

                <div className="col">
                    <h5>Name</h5>
                    <p>{data.name}</p>
                </div>

                <div className="col">
                    <h5>Gender</h5>
                    <p>{data.gender}</p>
                </div>

                <div className="col">
                    <h5>Hair Color</h5>
                    <p>{data.hair_color}</p>
                </div>

                <div className="col">
                    <h5>Eye Color</h5>
                    <p>{data.eye_color}</p>
                </div>

            </div>

        </div>
    );
};