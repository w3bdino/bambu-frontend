import { takeLatest, call, put, fork, all } from "redux-saga/effects";
import axios from "axios";

export default function* peopleSaga() {
    yield takeLatest("PEOPLE_REQUEST", getPeopleLists);  
}

function getPeopleAPI(searchdata) {
    return axios.request({
      method: 'get',
      url: `https://swapi.co/api/people/?page=${searchdata}`
    });
}  

function* getPeopleLists(action){
    try {
      // console.log(action.payload.page);
      yield put({ type: "FETCH_PEOPLE_REQUEST" });
      const response = yield call(getPeopleAPI, action.payload.page);
      yield put({ type: "FETCH_PEOPLE_SUCCESS", payload: { data: response.data, page: action.payload.setCurrentPage }});
    
    } catch (error) {
      yield put({ type: "FETCH_PEOPLE_FAILED", payload: error.response });
    }
}
