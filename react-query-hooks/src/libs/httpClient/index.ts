import axios from "axios";

export const client = () =>
  axios.create({
    baseURL: "http://localhost:3000",
    transformRequest: [
      data => {
        return JSON.stringify(data);
      }
    ]
  });
