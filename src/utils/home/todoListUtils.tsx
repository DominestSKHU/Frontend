import axios from "axios";

export const todoListGet = (token: string): Promise<any> => {
  return axios.get(`${process.env.NEXT_PUBLIC_API_URL}/todo/list`, {
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
  if (receiveRequest === "") {
    alert("수신자를 선택해주세요.");
    return Promise.reject("수신자를 선택하지 않았습니다.");
  }

  return axios.post(`${process.env.NEXT_PUBLIC_API_URL}/todo/save`, data, {
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
  const data = {
    checkYn: checkYn,
  };
  return axios.put(
    `${process.env.NEXT_PUBLIC_API_URL}/todo/${id}/check`,
    data,
    {
      headers: {
        // "Content-Type": `application/json;charset=UTF-8`,
        // Accept: "application/json",
        Authorization: `Bearer ${token}`,
        // Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBQ0NFU1MiLCJhdWQiOiJlZWVlQGVtYWlsLmNvbTpuYW1lMSIsImlhdCI6MTY5NDY3NDI4NSwiZXhwIjoxNjk1ODg0Nzg1fQ.55d1PLL3ALRLO5Uevc3S7Q8FgPv8ml17uOSh06T71bmjVe_D5eBJ3kI3eN9G-97CXFGREf4VgUjRdnttiFVO8A`,
      },
    }
  );
};
