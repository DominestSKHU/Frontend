import axios from "axios";

//즐겨찾기 추가 삭제
export const startSelect = (Token: string, id: string) => {
  axios
    .post(
      `${process.env.NEXT_PUBLIC_API_URL}/categories/${id}/favorites`,
      null,
      {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      }
    )
    .then((response) => {
      window.location.reload();
    })
    .catch((error) => {
      console.log(error);
    });
};

//즐겨찾기 목록
export const startList = async () => {
  if (!localStorage.getItem("authToken")) return [];
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/favorites`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      }
    );

    return response.data?.data?.favorites || [];
  } catch (error: any) {
    console.error("에러", error);
    if (error.response.status === 401) {
      axios
        .post(
          `${process.env.NEXT_PUBLIC_API_URL}/user/token/reissue`,
          {},
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("refreshToken")}`,
            },
          }
        )
        .then((response) => {
          console.log(response.data.data);
          localStorage.setItem("authToken", response.data.data.accessToken);
          localStorage.setItem("refreshToken", response.data.data.refreshToken);
          startList();
        })
        .catch((error) => {
          console.log(error);
        });
    }
    return [];
  }
};
