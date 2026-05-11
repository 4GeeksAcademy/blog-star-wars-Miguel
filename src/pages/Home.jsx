import React, { useEffect, useContext } from "react";
import { Context } from "../main";
import Card from "../components/Card";

export const Home = () => {

    const { store, dispatch } = useContext(Context);

    useEffect(() => {

        fetch("https://www.swapi.tech/api/people")
            .then(res => res.json())
            .then(data =>
                dispatch({
                    type: "get_people",
                    payload: data.results
                })
            )

        fetch("https://www.swapi.tech/api/planets")
            .then(res => res.json())
            .then(data =>
                dispatch({
                    type: "get_planets",
                    payload: data.results
                })
            )

        fetch("https://www.swapi.tech/api/vehicles")
            .then(res => res.json())
            .then(data =>
                dispatch({
                    type: "get_vehicles",
                    payload: data.results
                })
            )

    }, [])

    return (

        <div className="container mt-4">

            <h1 className="text-danger mb-3">Characters</h1>

            <div className="scroll-container">

                {
                    store.people.map((item, index) => (
                        <Card
                            key={index}
                            name={item.name}
                            uid={item.uid}
                            type="people"
                        />
                    ))
                }

            </div>

            <h1 className="text-danger mb-3 mt-5">Planets</h1>

            <div className="scroll-container">

                {
                    store.planets.map((item, index) => (
                        <Card
                            key={index}
                            name={item.name}
                            uid={item.uid}
                            type="planets"
                        />
                    ))
                }

            </div>

            <h1 className="text-danger mb-3 mt-5">Vehicles</h1>

            <div className="scroll-container">

                {
                    store.vehicles.map((item, index) => (
                        <Card
                            key={index}
                            name={item.name}
                            uid={item.uid}
                            type="vehicles"
                        />
                    ))
                }

            </div>

        </div>
    )
}