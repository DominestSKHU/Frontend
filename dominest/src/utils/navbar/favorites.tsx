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
export const startList = async (Token: string) => {
  if (!Token) return [];
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/favorites`,
      {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      }
    );

    return response.data?.data?.favorites || [];
  } catch (error) {
    console.error("에러다", error);
    return [];
  }
};
