import React, { useContext } from 'react'
import DataState from '../context/AppContext';
import { ListComponent } from './ListComponent';

export const ContainerListComponent = () => {
    const { state } = useContext(DataState);
    console.log(state);
    return (
        <div className="row align-items-start">
            {state &&
                <ListComponent key={state.data.episode_id} {...state.data}/>
            }
        </div>
    );
};