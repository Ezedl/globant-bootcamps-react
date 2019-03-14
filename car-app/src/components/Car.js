import React from 'react';

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

const CarInfo = props => {
    return (
        <>
            <p>I have a <span>{props.brand}</span> model <span>{props.model}</span>.</p>
            <p>My <span>{props.brand}</span> is color <span>{props.color}</span>.</p>
        </>
    )
}

const CarActions = props => {
    return (
        <div style={ {width: '100%'} }>
            <p>You have { props.cars } cars. </p>
            <button onClick={ props.buyCarHandler }>Buy a car!</button>
            { props.cars > 0 &&
                <button onClick={ props.sellCarHandler }>Sell a car!</button>
            }
        </div>
    )
}

export default Car;