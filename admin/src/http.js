import axios from "axios";

const http = axios.create({
  baseURL: "htpp://Localhost:3000/admin/api",
});

export default http;
