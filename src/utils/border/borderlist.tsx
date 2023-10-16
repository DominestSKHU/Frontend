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

//컴플레인 호실조회
export const complainSelectList = async (
  idname: number,
  roomNumber: Number,
  page: number
) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/categories/${idname}/posts/complaint?roomNoSch=${roomNumber}&page=${page}`
    );

    return response;
  } catch (error) {
    console.error("게시판 오류 발생:", error);
    throw error;
  }
};

//검색조회
export const complainTextList = async (
  idname: number,
  text: Number,
  page: number
) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/categories/${idname}/posts/complaint?complSchText=${text}&page=${page}`
    );

    return response;
  } catch (error) {
    console.error("게시판 오류 발생:", error);
    throw error;
  }
};

//카드키 전체 리스트

export const CardkeyLists = async (idname: any[], currentPage: number) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/categories/${idname[0]}/posts/card-key?page=${currentPage}`
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

//카드키 조회 리스트

export const CardkeySerch = async (
  idname: any[],
  currentPage: number,
  name: string
) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/categories/${idname[0]}/posts/card-key?page=${currentPage}&name=${name}`
    );
    console.log(response.data.data.cardKeys);

    return response;
  } catch (error) {
    console.error("게시판 오류 발생:", error);
    console.log(
      `${process.env.NEXT_PUBLIC_API_URL}/categories/${idname[0]}/${idname[1]}/${idname[2]}?page=${currentPage}&name=${name}`
    );
    throw error;
  }
};

//호실방역 전체 리스트

export const ClieanListBoard = async (idname: any[], currentPage: number) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/categories/${idname[0]}/posts/sanitation-check?page=${currentPage}`
    );

    return response;
  } catch (error) {
    console.error("게시판 오류 발생:", error);
    throw error;
  }
};

//호실방역 추가

export const ClieanUploadBoard = async (idname: any[], degree: string) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/categories/${idname[0]}/posts/sanitation-check`,
      {
        residenceSemester: degree,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      }
    );

    alert("게시글이 생성되었습니다.");
    return window.location.reload();
  } catch (error) {
    console.error("게시판 오류 발생:", error);
    throw error;
  }
};

//호실방역 층 리스트

export const ClieanFloorListBoard = async (idname: any) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/posts/sanitation-check/${idname}/floors`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      }
    );

    return response;
  } catch (error) {
    console.error("게시판 오류 발생:", error);
    throw error;
  }
};

//호실방역 층 리스트

export const ClieanFloorList = async (idname: number[]) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/posts/sanitation-check/${idname[0]}/floors/${idname[1]}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      }
    );

    return response;
  } catch (error) {
    console.error("게시판 오류 발생:", error);
    throw error;
  }
};

export const Clieannopass = async (idname: number[]) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/posts/sanitation-check/${idname}/not-passed`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      }
    );

    return response;
  } catch (error) {
    console.error("게시판 오류 발생:", error);
    throw error;
  }
};
