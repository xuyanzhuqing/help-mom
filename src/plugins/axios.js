import axios from "axios";

export const baseURL = import.meta.env.VITE_BASE_URL

export default axios.create({
  baseURL,
  timeout: 5000
});
