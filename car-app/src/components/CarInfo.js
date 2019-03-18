import React from 'react'

const CarInfo = props => {
    return (
        <>
            <p>I have a <span>{props.brand}</span> model <span>{props.model}</span>.</p>
            <p>My <span>{props.brand}</span> is color <span>{props.color}</span>.</p>
        </>
    )
}

export default CarInfo;