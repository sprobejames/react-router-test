import axios from "axios";

const api = axios.create({
  baseURL: "api.site.com/v1"
});

export default api;
