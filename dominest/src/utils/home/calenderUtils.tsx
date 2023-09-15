import axios from "axios";

export const calenderGet = (token: string): Promise<any> => {
  return axios.get("https://domidomi.duckdns.org/calender/get/2023-09-16", {
    headers: {
      "Content-Type": `application/json;charset=UTF-8`,
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};
