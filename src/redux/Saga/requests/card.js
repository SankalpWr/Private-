import axios from "axios";

export const requestgetData = () => {
  const res = axios.post("http://localhost:4000/getUserCallWorkbook.do?pageNumber=0&pageSize=5");
  return res;
};