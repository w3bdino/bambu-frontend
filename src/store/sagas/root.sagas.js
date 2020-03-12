import { all } from "redux-saga/effects";
import peopleSaga from "./people.saga";
import personSaga from "./person.saga";

export default function* rootSaga() {
  yield all ([
    peopleSaga(),
    personSaga(),
  ])
}