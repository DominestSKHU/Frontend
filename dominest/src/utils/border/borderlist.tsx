import axios from "axios";

export const borderList = async (idname: any, currentPage: number) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/categories/${idname[0]}/${idname[1]}/${idname[2]}?page=${currentPage}`
    );

    return response;
  } catch (error) {
    console.error("게시판 오류 발생:", error);
    throw error;
  }
};
