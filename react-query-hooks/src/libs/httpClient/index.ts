import axios from "axios";
import Cookies from "js-cookie";

export const client = () =>
  axios.create({
    baseURL: "http://localhost:3000",
    transformRequest: [
      data => {
        return JSON.stringify(data);
      }
    ],
    headers: {
      "access-token": Cookies.get("_access_token") as string,
      client: Cookies.get("_client") as string,
      uid: Cookies.get("_uid") as string,
      "Content-Type": "application/json"
    },
  });
