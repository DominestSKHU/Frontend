import axios from "axios";

export const todoListGet = (token: string): Promise<any> => {
  return axios.get("https://domidomi.duckdns.org/todo/list", {
    headers: {
      "Content-Type": `application/json;charset=UTF-8`,
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const postTodoList = (
  token: string,
  task: string,
  receiveRequest: string
): Promise<any> => {
  const data = {
    task: task,
    receiveRequest: receiveRequest,
  };

  return axios.post("https://domidomi.duckdns.org/todo/save", data, {
    headers: {
      "Content-Type": `application/json;charset=UTF-8`,
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateTodoList = (
    token: string,
    id: number,
    checkYn: boolean
  ): Promise<any> => {
    return axios.put(`https://domidomi.duckdns.org/todo/${id}/check?checkYn=${checkYn}`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  };
