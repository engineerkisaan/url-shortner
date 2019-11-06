import axios from "axios";
axios.defaults.baseURL = "https://sorturl.herokuapp.com/api/v1";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
export default axios;
