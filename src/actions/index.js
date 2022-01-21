import axios from 'axios';
import { FETCH_FAIL, FETCH_START, FETCH_SUCCESS, ADD_SMURF } from '../reducers';

export const onPageLoad = () => {
    return (dispatch) => {
        dispatch(startFetch());
        axios.get('http://localhost:3333/smurfs')
        .then(resp => dispatch(successFetch(resp.data)))
        .catch(() => dispatch(failFetch()))
    }
}

export const onError = () => {
    return (dispatch) => {
        dispatch(failFetch("Error: Please fill out all fields"))
    }
}

//===================================================
export const startFetch = () => {
    return {type: FETCH_START}
}

export const failFetch = (err) => {
    return {type: FETCH_FAIL, payload: err}
}

export const successFetch = (data) => {
    return {type: FETCH_SUCCESS, payload: data}
}

export const addSmurf = (smurf) => {
    return {type: ADD_SMURF, payload: smurf}
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.