import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import StudentDate from "../components/studentdate";
import "../app/globals.css";
import axios from "axios";
import { handleUpload } from "@/utils/uploadutil";
/** @jsxImportSource @emotion/react */

export default function studentupload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [residenceSemester, setresidenceSemester] = useState("");
  const [year, setYear] = useState("");
  const [showStudentDate, setShowStudentDate] = useState(true);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSemesterChange = (event) => {
    setresidenceSemester(event.target.value);
  };
  const handleYearChange = (event) => {
    setYear(event.target.value);
  };
  handleUpload(selectedFile, residenceSemester, year);

  const delet = () => {
    axios
      .delete("http://domidomi.duckdns.org/residents")
      .then((response) => {
        console.log("요청이 성공적으로 전송되었습니다.");
        return alert("삭제되었습니다.");
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
        <h1>학생 정보 관리</h1>
        <div
          css={css`
            text-align: center;
          `}
        >
          <input type="file" accept=".xlsx" onChange={handleFileChange} />
          <select value={year} onChange={handleYearChange}>
            <option value="">연도 선택</option>
            <option value="S2023">2023년</option>
            <option value="S2024">2024년</option>
            <option value="S2025">2025년</option>
            <option value="S2026">2026년</option>
            <option value="S2027">2027년</option>
            <option value="S2028">2028년</option>
            <option value="S2029">2029년</option>
            <option value="S2030">2030년</option>
          </select>
          <select value={residenceSemester} onChange={handleSemesterChange}>
            <option value="">차수 선택</option>
            <option value="_1">1학기</option>
            <option value="_SUMMER">여름학기</option>
            <option value="_2">2학기</option>
            <option value="_WINTER">겨울학기</option>
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
          <h3>조회</h3>
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
  select {
    width: 90px;
    height: 41px;
    margin: 3px;
    border-radius: 5px;
  }
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
    padding: 10px 20px;
    font-size: 15px;
    border-radius: 10px;
    color: #333;
    background-color: #f7f7f7;
  }
`;
