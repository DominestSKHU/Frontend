import axios from "axios";

axios.defaults.baseURL = "http://domidomi.duckdns.org";

export const getCategory = (token: string): Promise<any> =>
  axios.get("/category", {
    headers: {
      "Content-Type": `application/json;charset=UTF-8`,
      Accept: "application/json",
    },
  });
