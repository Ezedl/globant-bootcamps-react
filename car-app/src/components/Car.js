import React from 'react';

import CarActions from './CarActions';
import CarInfo from './CarInfo';

class Car extends React.Component{
    state = {
        'brand': 'Ford Ka',
        'model': 2016,
        'color': 'black',
        'cars': 1
    }

    buyCar = () => {
        let newValue = this.state.cars + 1;
        this.setState({
            cars : newValue
        })
    }

    sellCar = () => {
        let newValue = (this.state.cars - 1 < 0) ? 0 : this.state.cars - 1;
        this.setState({
            cars : newValue
        })
    }

    render() {
        return (
            <>
                <CarInfo { ...this.state }/>
                <CarActions cars={ this.state.cars } buyCarHandler={ this.buyCar } sellCarHandler={ this.sellCar }/>
            </>
        )
    }

}

export default Car;