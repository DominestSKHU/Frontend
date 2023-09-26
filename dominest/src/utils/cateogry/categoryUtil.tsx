import axios from "axios";

export const getCategory = (token: string): Promise<any> =>
  axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`, {
    headers: {
      "Content-Type": `application/json;charset=UTF-8`,
      Accept: "application/json",
    },
  });

export const postCategory = (token: string, data: any): Promise<any> =>
  axios.put(`${process.env.NEXT_PUBLIC_API_URL}/categories`, data, {
    headers: {
      "Content-Type": `application/json;charset=UTF-8`,
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

export const deleteCategory = (token: string, id: number): Promise<any> =>
  axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/categories/${id}`, {
    headers: {
      "Content-Type": `application/json;charset=UTF-8`,
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
