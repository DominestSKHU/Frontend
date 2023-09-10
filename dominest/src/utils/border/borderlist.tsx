import axios from "axios";

export const borderList = async (idname: any[], currentPage: number) => {
  try {
    if (idname[2] === "complaint") {
      idname[2] = "complaint";
    }

    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/categories/${idname[0]}/${idname[1]}/${idname[2]}?page=${currentPage}`
    );

    return response;
  } catch (error) {
    console.error("게시판 오류 발생:", error);
    console.log(
      `${process.env.NEXT_PUBLIC_API_URL}/categories/${idname[0]}/${idname[1]}/${idname[2]}?page=${currentPage}`
    );
    throw error;
  }
};

//컴플레인 전체조회
export const complainborderList = async (
  idname: any[],
  currentPage: number
) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/categories/${idname[0]}/posts/complaint?page=${currentPage}`
    );

    return response;
  } catch (error) {
    console.error("게시판 오류 발생:", error);
    console.log(
      `${process.env.NEXT_PUBLIC_API_URL}/categories/${idname[0]}/${idname[1]}/${idname[2]}?page=${currentPage}`
    );
    throw error;
  }
};

//컴플레인 검색조회
export const complainSelectList = async (
  idname: number,

  roomNumber: Number
) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/categories/${idname}/posts/complaint?roomNoSch=${roomNumber}`
    );
    console.log(
      `${process.env.NEXT_PUBLIC_API_URL}/categories/${idname}/posts/complaint?roomNoSch=${roomNumber}`
    );

    return response;
  } catch (error) {
    console.error("게시판 오류 발생:", error);
    throw error;
  }
};
