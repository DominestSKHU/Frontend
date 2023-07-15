import React, { useState } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import StudentDate from "../components/studentdate";
import "../app/globals.css";
import axios from "axios";
/** @jsxImportSource @emotion/react */

export default function studentupload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [residenceSemester, setresidenceSemester] = useState("");
  const [showStudentDate, setShowStudentDate] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSemesterChange = (event) => {
    setresidenceSemester(event.target.value);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);

      axios
        .post("http://domidomi.duckdns.org/residents/upload-excel", formData)
        .then((response) => {
          console.log("요청이 성공적으로 전송되었습니다.");
          setShowStudentDate(true);
        })
        .catch((error) => {
          console.error("요청 전송 중 오류가 발생했습니다:", error);
        });
    }
  };

  const delet = () => {
    axios
      .delete("http://domidomi.duckdns.org/residents")
      .then((response) => {
        console.log("요청이 성공적으로 전송되었습니다.");
      })
      .catch((error) => {
        console.error("요청 전송 중 오류가 발생했습니다:", error);
      });
  };

  return (
    <UploadForm
      css={css`
        display: flex;
        justify-content: center;
        width: 100%;
        height: 100%;
      `}
    >
      <div
        css={css`
          width: 80%;
          height: 100%;
        `}
      >
        <h1>학생정보 업로드</h1>
        <div
          css={css`
            text-align: center;
          `}
        >
          <input type="file" accept=".xlsx" onChange={handleFileChange} />
          <select value={residenceSemester} onChange={handleSemesterChange}>
            <option value="S2023_1">1학기</option>
            <option value="S2023_SUMMER">여름학기</option>
            <option value="S2023_2">2학기</option>
            <option value="S2023_WINTER">겨울학기</option>
          </select>
          <button
            onClick={handleUpload}
            disabled={!selectedFile}
            css={css`
              &:disabled {
                background-color: #ccc;
                cursor: not-allowed;
              }
            `}
          >
            업로드
          </button>
          <h3>업로드 정보</h3>
          {showStudentDate && <StudentDate />}
          <div className="buttondiv">
            <button
              css={css`
                &:disabled {
                  background-color: #ccc;
                  cursor: not-allowed;
                }
              `}
            >
              저장
            </button>
            <button
              css={css`
                &:disabled {
                  background-color: #ccc;
                  cursor: not-allowed;
                }
              `}
            >
              취소
            </button>
            <button
              onClick={delet}
              css={css`
                &:disabled {
                  background-color: #ccc;
                  cursor: not-allowed;
                }
              `}
            >
              삭제(임시생성)
            </button>
          </div>
        </div>
      </div>
    </UploadForm>
  );
}
const UploadForm = styled.div`
  button {
    padding: 10px 20px;
    margin: 5px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  }
  .buttondiv {
    display: flex;
    justify-content: flex-end;
  }
  input {
    margin-bottom: 10px;
    border: 1px solid black;
    width: 50%;
    hight: 41px;
    padding: 10px 20px;
    font-size: 15px;
    border-radius: 10px;
    color: #333;
    background-color: #f7f7f7;
  }
`;
