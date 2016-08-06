import { combineReducers } from 'redux';
import  reducerVehicles  from './reducer_vehicles';

const rootReducer = combineReducers({
  vehicles: reducerVehicles
});

export default rootReducer;