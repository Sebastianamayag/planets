import axios, { AxiosInstance } from "axios";

export const planetApi: AxiosInstance = axios.create({
  baseURL: "https://api.le-systeme-solaire.net/rest/bodies",
});
