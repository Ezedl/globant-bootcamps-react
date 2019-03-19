import React from 'react';

import carsData from './../data/Cars';
import CarTable from './CarTable';

const Main = () => {
    return (
        <>
            <CarTable data={ carsData } />
        </>
    )
}

export default Main;