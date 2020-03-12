import { takeLatest, call, put, fork, all } from "redux-saga/effects";
import axios from "axios";

export default function* personSaga() {
    yield takeLatest("GET_PERSON_DETAIL", getPersonDetail);  
}

function getPersonAPI(personID) {
    return axios.get(`https://swapi.co/api/people/${personID}`);
}  

function* getPersonDetail(action){
    try {
      // console.log(action.payload.page);
      yield put({ type: "FETCH_PERSON_REQUEST" });
      const response = yield call(getPersonAPI, action.payload.personID);
      yield put({ type: "FETCH_PERSON_SUCCESS", payload: { data: response.data }});
    
    } catch (error) {
      yield put({ type: "FETCH_PERSON_FAILED", payload: error.response });
    }
}
