import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import StudentData from "@/components/StudentData";
import "../app/globals.css";
import { handleUpload, delet } from "@/utils/uploadutil";
import StudentEdit from "@/components/StudentEdit";
import StudentAdd from "@/components/StudentAdd";
/** @jsxImportSource @emotion/react */

export default function studentupload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [residenceSemester, setresidenceSemester] = useState("");
  const [year, setYear] = useState("");
  const [residenceSemester_result, setresidenceSemester_result] = useState("");
  const [year_result, setYear_result] = useState("");
  const [showStudentDate, setShowStudentDate] = useState(false);
  const [showStudentEdit, setshowStudentEdit] = useState(false);
  const [showStudentAdd, setshowStudentAdd] = useState(false);
  const [degree, setDegree] = useState("");

  useEffect(() => {
    setDegree(year + residenceSemester); // degree 설정
    console.log(degree);
  }, [year, residenceSemester, degree]);

  useEffect(() => {
    setDegree(year_result + residenceSemester_result); // degree 설정
    console.log(degree);
  }, [year_result, residenceSemester_result, degree]);
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSemesterChange = (event) => {
    setresidenceSemester(event.target.value);
  };
  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleSemesterresultChange = (event) => {
    setresidenceSemester_result(event.target.value);
  };
  const handleYearresultChange = (event) => {
    setYear_result(event.target.value);
  };

  const ResultStudent = () => {
    setShowStudentDate(true);
  };

  const EditStudent = () => {
    setshowStudentEdit(true);
  };
  const AddStudent = () => {
    setshowStudentAdd(true);
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
            onClick={() =>
              handleUpload(
                selectedFile,
                residenceSemester,
                year,
                setShowStudentDate
              )
            }
            disabled={!selectedFile || year === "" || residenceSemester === ""}
            css={css`
              &:disabled {
                background-color: #ccc;
                cursor: not-allowed;
              }
            `}
          >
            업로드
          </button>
          <hr />
          <div
            className="check"
            css={css`
              display: flex;
              justify-content: center;
            `}
          >
            <h1
              css={css`
                font-size: 20px;
                margin: 10px;
              `}
            >
              조회
            </h1>
            <select value={year_result} onChange={handleYearresultChange}>
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
            <select
              value={residenceSemester_result}
              onChange={handleSemesterresultChange}
            >
              <option value="">차수 선택</option>
              <option value="_1">1학기</option>
              <option value="_SUMMER">여름학기</option>
              <option value="_2">2학기</option>
              <option value="_WINTER">겨울학기</option>
            </select>
            <button
              onClick={() => ResultStudent()}
              disabled={year_result === "" || residenceSemester_result === ""}
              css={css`
                &:disabled {
                  background-color: #ccc;
                  cursor: not-allowed;
                }
              `}
            >
              조회
            </button>
          </div>

          <div className="buttondiv">
            <button
              onClick={() => EditStudent()}
              disabled={!showStudentDate}
              css={css`
                &:disabled {
                  background-color: #ccc;
                  cursor: not-allowed;
                }
              `}
            >
              학생정보 수정
            </button>
            <button
              onClick={() => AddStudent()}
              disabled={!showStudentDate}
              css={css`
                &:disabled {
                  background-color: #ccc;
                  cursor: not-allowed;
                }
              `}
            >
              학생정보 추가
            </button>
            <button
              onClick={() => delet()}
              css={css`
                &:disabled {
                  background-color: #ccc;
                  cursor: not-allowed;
                }
              `}
            >
              전체 삭제(임시생성)
            </button>
          </div>
          {showStudentEdit && (
            <>
              <StudentEdit degree={degree} />
            </>
          )}
          {showStudentAdd && (
            <>
              <StudentAdd degree={degree} />
            </>
          )}
          {showStudentDate && (
            <>
              <StudentData degree={degree} />
            </>
          )}
        </div>
      </div>
    </UploadForm>
  );
}
const UploadForm = styled.div`
  select {
    width: 90px;
    height: 41px;
    margin: 5px;
    border-radius: 5px;
    background-color: #f7f7f7;
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

  .edit {
    display: flex;
    justify-content: center;
    table {
      border: 1px solid black;
      border-collapse: collapse;
      th,
      td {
        border: 1px solid black;
        padding: 0px 20px;
      }
    }
  }
  .editresult {
    input {
      padding: 0;
      background-color: white;
      border-radius: 0px;
      width: 100%;
      height: 100%;
      border: none;
    }
    table {
      border: 1px solid black;
      border-collapse: collapse;
      th,
      td {
        border: 1px solid black;
        padding: 0px 20px;
      }
    }
  }
`;
