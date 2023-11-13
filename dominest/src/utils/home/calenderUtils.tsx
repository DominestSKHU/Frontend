import axios from "axios";

export const calenderGet = (token: string, date: string): Promise<any> => {
  return axios.get(`${process.env.NEXT_PUBLIC_API_URL}/calendar/${date}`, {
    headers: {
      "Content-Type": `application/json;charset=UTF-8`,
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const calenderPost = (
  token: string,
  date: string,
  content: string
): Promise<any> => {
  const data = {
    date,
    content,
  };
  return axios.post(`${process.env.NEXT_PUBLIC_API_URL}/calendar`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const calenderDelete = (token: string, date: string): Promise<any> => {
  return axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/calendar/${date}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
