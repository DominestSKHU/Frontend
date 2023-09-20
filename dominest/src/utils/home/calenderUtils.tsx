import axios from "axios";

export const calenderGet = (token: string, date: string): Promise<any> => {
  return axios.get(`${process.env.NEXT_PUBLIC_API_URL}/calender/get/${date}`, {
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
  return axios.post(`${process.env.NEXT_PUBLIC_API_URL}/calender/save`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
