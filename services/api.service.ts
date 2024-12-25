import { BASE_URL } from "@/constants";
import axios from "axios";

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

export default instance;
