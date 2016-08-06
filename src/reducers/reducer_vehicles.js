import { FETCH_VEHICLES } from '../actions/index';

const INITIAL_STATE = { all: [] };

export default function reducerVehicles(state = INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_VEHICLES:
            return {  ...state, all: action.payload.data  };
        default:
            return state;
    }
}