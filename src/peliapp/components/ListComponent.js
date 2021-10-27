import React from 'react'

export const ListComponent = ({ title, opening_crawl, release_date }) => {
    return (
        <div className="col card">
            <div className="card-body">
                <ul>
                    <li className="card-title">Título de la película: <h4>{ title }</h4></li>
                    <li className="card-text">Párrafo de entrada de la pelicula: <br/>{ opening_crawl }</li>
                    <li className="card-text">Fecha de estreno: { release_date }</li>
                </ul>
            </div>
        </div>
    );
};