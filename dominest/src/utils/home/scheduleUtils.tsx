import axios from "axios";

export const scheduleGet = (token: string): Promise<any> => {
  return axios.get(`${process.env.NEXT_PUBLIC_API_URL}/schedule/all`, {
    headers: {
      "Content-Type": `application/json;charset=UTF-8`,
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const schedulePost = (
  token: string,
  dateChose: string,
  timeSlot: string,
  studentName: string
): Promise<any> => {
  const data = {
    dayOfWeek: dateChose,
    timeSlot: timeSlot,
    usernames: [studentName],
  };
  console.log(data);
  return axios.post(`${process.env.NEXT_PUBLIC_API_URL}/schedule/save`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
