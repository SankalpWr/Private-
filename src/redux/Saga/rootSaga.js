import { takeLatest, all } from "@redux-saga/core/effects";
import { GET_DATA } from "../Actions/card";
import { handlegetData } from "./handlers/card";

export function* watcherSaga() {
  yield all([
    takeLatest(GET_DATA, handlegetData),
  ]);
}