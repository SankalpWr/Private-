import { call, put } from "@redux-saga/core/effects";
import { setData } from "../../Actions/card";
import { requestgetData } from "../requests/card";

export function* handlegetData() {
  try {
    const res = yield call(requestgetData);
    console.log("Inside handle request",res.data.workbookItems);
    yield put(setData(res.data.workbookItems));
  } catch (err) {
    console.log(err);
  }
}