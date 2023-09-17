import axios from "axios";

export const getCategory = (token: string): Promise<any> =>
  axios.get("https://domidomi.duckdns.org/categories", {
    headers: {
      "Content-Type": `application/json;charset=UTF-8`,
      Accept: "application/json",
    },
  });

export const postCategory = (token: string, data: any): Promise<any> =>
  axios.put("https://domidomi.duckdns.org/categories", data, {
    headers: {
      "Content-Type": `application/json;charset=UTF-8`,
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

export const deleteCategory = (token: string, id: number): Promise<any> =>
  axios.delete(`https://domidomi.duckdns.org/categories/${id}`, {
    headers: {
      "Content-Type": `application/json;charset=UTF-8`,
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
