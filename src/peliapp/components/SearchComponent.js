import React, { useContext, useState } from 'react'
import DataState from '../context/AppContext'
import { actions } from '../actions/actions';
import "./styles.css";

export const SearchComponent = () => {
    const {dispatch} = useContext(DataState);

    const [counter, setCounter] = useState(1);

    const handlerSubmit = (e) => {
        e.preventDefault();

        setCounter(counter + 1);
        console.log(counter);
        if(counter === 7) {
            alert("Solo son seis peliculas");
            setCounter(1);
        }

        fetch(`https://swapi.dev/api/films/${counter}/`)
            .then((response) => response.json())
            .then(( films ) => {
                console.log("====>", films);
                dispatch({type: actions.SEARCH_P, payload: films});
            })
            .catch((error) => {
                console.log("ERROR");
            });
    };
    return (
        <div className="row">
            <form onSubmit={handlerSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Buscar peliculas...</label>
                    <button type="submit" className="btn btn-primary">Presione</button>
                </div>
            </form>
        </div>
    );
};
