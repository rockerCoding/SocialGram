import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.1.2:3000",
  //baseURL: "http://192.168.178.248:3000",
  //baseURL: "http://10.50.1.86:3000",
  //baseURL: "http://10.50.5.62:3000",
  //baseURL: "http://10.50.4.237:3000",
  //baseURL: "http://localhost:3000/",
  
});

export default api;