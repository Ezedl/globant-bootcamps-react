import { BUY_CAR, SELL_CAR } from './actions'

const initialState = 0

const cars = (state = initialState, action) => {
    switch (action.type) {
        case SELL_CAR:
            return state - action.payload;
        case BUY_CAR:
            return state + action.payload;  
        default:
            return state
    }
}

export default cars;