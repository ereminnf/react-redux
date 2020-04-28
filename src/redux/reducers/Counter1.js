import { ADD, SUB, ADD_NUMBER } from '../actions/actionTypes'

const initialState = {
    counter: 0
}

export default function counter1(state = initialState, action) {

    switch (action.type) {
        case ADD:
            console.log('ADD');
            const counter = state.counter + 5

            return {
                counter: counter
            }
        case SUB:
            return {
                counter: state.counter - 1
            }
        case ADD_NUMBER:
            return {
                counter: state.counter + action.payload
            }
        default:
            return state
    }
}