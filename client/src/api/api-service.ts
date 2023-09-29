import axios from "axios";

const API_URL = "http://localhost:3000/api";

const apiService = axios.create({
  baseURL: API_URL,
  timeout: 5000,
});

export default apiService;
