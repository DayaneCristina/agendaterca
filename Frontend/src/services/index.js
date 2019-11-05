import axios from "axios";

const services = axios.create({
  baseURL: "http://localhost:3333"
});

export default services;
