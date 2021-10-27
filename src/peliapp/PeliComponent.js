import React from 'react'
import { ContainerListComponent } from './components/ContainerListComponent';
import { HeaderComponent } from './components/HeaderComponent';
import { SearchComponent } from './components/SearchComponent';
import { AppState } from './context/AppState';

export const PeliComponent = () => {
    return (
        <div className="container">
            <AppState>
                <HeaderComponent />
                <SearchComponent />
                <ContainerListComponent />
            </AppState>
        </div>
    );
};
