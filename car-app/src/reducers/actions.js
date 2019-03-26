export const BUY_CAR = 'BUY_CAR'
export const SELL_CAR = 'SELL_CAR'

const buyCar = () => {
    return {
        type: BUY_CAR,
        payload: 1
    }
}

const sellCar = () => {
    return {
        type: SELL_CAR,
        payload: 1
    }
}

const actions = {
    sellCar: sellCar,
    buyCar: buyCar
}

export default actions;