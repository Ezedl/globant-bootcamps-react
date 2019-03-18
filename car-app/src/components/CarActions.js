import React from 'react'

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

export default CarActions;