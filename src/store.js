export const initialStore = () => {

    return {

        people: [],

        planets: [],

        vehicles: [],

        favorites: []

    }
}

const storeReducer = (store, action) => {

    switch(action.type){

        case "get_people":

            return {

                ...store,

                people: action.payload

            };

        case "get_planets":

            return {

                ...store,

                planets: action.payload

            };

        case "get_vehicles":

            return {

                ...store,

                vehicles: action.payload

            };

        case "add_favorite":

            // EVITA DUPLICADOS
            if(store.favorites.includes(action.payload)){
                return store;
            }

            return {

                ...store,

                favorites: [...store.favorites, action.payload]

            };

        case "remove_favorite":

            return {

                ...store,

                favorites: store.favorites.filter(
                    item => item !== action.payload
                )

            };

        default:

            return store;
    }
}

export default storeReducer;