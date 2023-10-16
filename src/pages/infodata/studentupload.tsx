import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import StudentData from "@/components/student/StudentData";
import {
  ComponentDiv,
  StudentComponent,
  StudentAddStyle,
  StudentEditStyle,
} from "@/style/ComponentStyle";
import "../../app/globals.css";
import { ButtonDiv } from "@/style/ComponentStyle";
import { handleUpload, delet } from "@/utils/student/uploadutil";
import StudentEdit from "@/components/student/StudentEdit";
import StudentAdd from "@/components/student/StudentAdd";
import Navber from "@/components/AdminNavbar";
import { FileUpload, Button, DormitoryYear } from "@/style/InputStyle";
import { useAuth } from "@/utils//useAuth/useAuth";
/** @jsxImportSource @emotion/react */

export default function StudentUpload() {
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState(null);
  const [residenceSemester, setresidenceSemester] = useState("");
  const [year, setYear] = useState("");
  const [showStudentDate, setShowStudentDate] = useState(false);
  const [showStudentEdit, setshowStudentEdit] = useState(false);
  const [showStudentAdd, setshowStudentAdd] = useState(false);
  const [showStudentManagement, setshowStudentManagement] = useState(false);
  const [showStudnetUpload, setshowStudnetUpload] = useState(false);
  const [degree, setDegree] = useState("");
  const Token = useAuth();

  useEffect(() => {
    setDegree(year + residenceSemester);
  }, [year, residenceSemester, degree]);

  const handleFileChange = (e: any) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSemesterChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setresidenceSemester(e.target.value);
  };
  const handleYearChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setYear(e.target.value);
  };

  return (
    <div>
      <Navber page="학생 데이터 관리" />

      <DormitoryYear>
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

        <Button
          onClick={() => {
            setShowStudentDate(true);
            setshowStudentManagement(false);
            setshowStudnetUpload(false);
            setshowStudentEdit(false);
            setshowStudentAdd(false);
          }}
          disabled={year === "" || residenceSemester === ""}
          css={css``}
        >
          조회
        </Button>

        <Button
          onClick={() => {
            setshowStudentManagement(true);
            setshowStudnetUpload(false);
            setshowStudentEdit(false);
            setshowStudentAdd(false);
          }}
          disabled={year === "" || residenceSemester === ""}
          css={css`
            &:disabled {
              background-color: #ccc;
              cursor: not-allowed;
            }
          `}
        >
          학생 관리
        </Button>
      </DormitoryYear>
      <br />
      {showStudentManagement && (
        <>
          <ButtonDiv>
            <Button
              onClick={() => {
                setshowStudnetUpload(true);
                setshowStudentManagement(false);
                setshowStudentEdit(false);
                setshowStudentAdd(false);
              }}
              css={css`
                &:disabled {
                  background-color: #ccc;
                  cursor: not-allowed;
                }
              `}
            >
              업로드
            </Button>
            <Button
              onClick={() => {
                setshowStudentEdit(true);
                setshowStudnetUpload(false);
                setshowStudentManagement(false);
                setshowStudentAdd(false);
              }}
              css={css`
                &:disabled {
                  background-color: #ccc;
                  cursor: not-allowed;
                }
              `}
            >
              학생정보 수정
            </Button>
            <Button
              onClick={() => {
                setshowStudentAdd(true);
                setshowStudentManagement(false);
              }}
              css={css`
                &:disabled {
                  background-color: #ccc;
                  cursor: not-allowed;
                }
              `}
            >
              학생정보 추가
            </Button>
            <Button
              onClick={() => delet(Token)}
              css={css`
                &:disabled {
                  background-color: #ccc;
                  cursor: not-allowed;
                }
              `}
            >
              현재 차수 전체 삭제
            </Button>
          </ButtonDiv>
        </>
      )}
      {showStudnetUpload && (
        <>
          <FileUpload>
            <label htmlFor="file">파일 업로드</label>
            <input
              type="file"
              id="file"
              accept=".xlsx"
              onChange={handleFileChange}
            />

            <Button
              onClick={() => {
                handleUpload(selectedFile, degree, setShowStudentDate, Token);

                setshowStudnetUpload(false);
                setshowStudentManagement(false);
              }}
              disabled={
                !selectedFile || year === "" || residenceSemester === ""
              }
              css={css`
                &:disabled {
                  background-color: #ccc;
                  cursor: not-allowed;
                }
              `}
            >
              업로드
            </Button>
          </FileUpload>
        </>
      )}
      {showStudentEdit && (
        <>
          <StudentEditStyle>
            <StudentEdit degree={degree} Token={Token} />
          </StudentEditStyle>
        </>
      )}
      {showStudentAdd && (
        <>
          <StudentAddStyle>
            <StudentAdd degree={degree} Token={Token} />
          </StudentAddStyle>
        </>
      )}
      {showStudentDate && (
        <StudentComponent>
          <StudentData degree={degree} Token={Token} />
        </StudentComponent>
      )}
    </div>
  );
}
const UploadForm = styled.div`
  .buttondiv {
    display: flex;
    justify-content: flex-end;
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
