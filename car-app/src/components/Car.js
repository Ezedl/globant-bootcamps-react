import React from 'react';

class Car extends React.Component{
    state = {
        'brand': 'Ford Ka',
        'model': 2016,
        'color': 'black'
    }

    render() {
        return (
            <div>
                <p>I have a <span>{this.state.brand}</span> model <span>{this.state.model}</span>.</p>
                <p>My <span>{this.state.brand}</span> is color <span>{this.state.color}</span>.</p>
            </div>
        )
    }
}

export default Car;