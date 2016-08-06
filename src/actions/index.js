import axios from 'axios';

export const FETCH_VEHICLES = 'FETCH_VEHICLES';

const ROOT_URL = 'http://jsonplaceholder.typicode.com';

export function fetchVehicles(props) {
    const request = axios.get(`${ROOT_URL}/posts`);
    return {
        type: FETCH_VEHICLES,
        payload: request
    };

}