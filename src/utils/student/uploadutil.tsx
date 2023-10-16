import axios from "axios";

export const handleUpload = (
  selectedFile: any,
  degree: string,
  setShowStudentDate: (value: boolean) => void,
  authToken: string
): void => {
  if (selectedFile) {
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("residenceSemester", degree);

    axios
      .post(
        `${process.env.NEXT_PUBLIC_API_URL}/residents/upload-excel`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      )
      .then((response) => {
        setShowStudentDate(true);
        alert("성공적으로 업로드 되었습니다.");
        return window.location.reload();
      })
      .catch((error) => {
        console.log("엑셀 업로드", error);
        if (
          error.response.data.errorMessage ===
          "읽어들인 컬럼 개수가 21개가 아닙니다."
        ) {
          return alert("파일형식에 문제가 있습니다.");
        }
        if (
          error.response.data.errorMessage ===
          "Required request parameter 'residenceSemester' for method parameter type ResidenceSemester is not present"
        ) {
          return alert("연도 및 차수 에러");
        }
      });
  }
};

//data 삭제 함수
export const delet = (authToken: string) => {
  if (confirm("정말 삭제하시겠습니까??") == true) {
    axios
      .delete(`${process.env.NEXT_PUBLIC_API_URL}/residents`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((response) => {
        console.log("요청이 성공적으로 전송되었습니다.");
        return alert("삭제되었습니다.");
      })
      .catch((error) => {
        console.error("요청 전송 중 오류가 발생했습니다:", error);
      });
  } else {
    //취소
    return false;
  }
};

//data 차수조회
export const fetchData = (degree: string, setData: any) => {
  axios
    .get(
      `${process.env.NEXT_PUBLIC_API_URL}/residents?residenceSemester=${degree}`
    )
    .then((response) => {
      setData(response.data?.data?.residents);
      console.log(setData);
      console.log("조회성공");
      console;
    })
    .catch((error) => {
      console.error("데이터 조회 중 오류 발생:", error);
    });
};

//삭제
export const StudentDelete = (id: number, authToken: string) => {
  axios
    .delete(`${process.env.NEXT_PUBLIC_API_URL}/residents/${id}`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
    .then((response) => {
      return alert("삭제를 성공했습니다.");
      window.location.reload();
    })
    .catch((error) => {
      console.error("데이터 조회 중 오류 발생:", error);
    });
};
