import React, { useState, useEffect } from "react";
import PdfList from "@/components/pdf/PdfList";
import { FileUpload, DormitoryYear, Button } from "@/style/InputStyle";
import { ComponentDiv } from "@/style/ComponentStyle";
import Navber from "@/components/AdminNavbar";
import { handleUpload } from "@/utils/pdf/PdfUtil";
import { useAuth } from "@/utils/useAuth/useAuth";

export default function DepartureForm() {
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [PdfLists, setPdfLists] = useState(false);
  const [degree, setDegree] = useState("");
  const [PdfListShow, setPdfListShow] = useState(false);
  const Token = useAuth();
  useEffect(() => {
    setDegree(selectedYear + selectedSemester);
  }, [selectedYear, selectedSemester, degree]);

  const handleYearChange = (e: any) => {
    setSelectedYear(e.target.value);
  };

  const handleSemesterChange = (e: any) => {
    setSelectedSemester(e.target.value);
  };

  const handleFileChange = (e: any) => {
    setSelectedFiles(e.target.files);
  };

  return (
    <div>
      <Navber page="퇴관 신청서PDF" />

      <DormitoryYear>
        <select onChange={handleYearChange}>
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
        <select onChange={handleSemesterChange}>
          <option value="">차수 선택</option>
          <option value="_1">1학기</option>
          <option value="_SUMMER">여름학기</option>
          <option value="_2">2학기</option>
          <option value="_WINTER">겨울학기</option>
        </select>
        <Button onClick={() => setPdfListShow(true)}>조회</Button>
        <Button onClick={() => setPdfLists(true)}>PDF 관리</Button>
      </DormitoryYear>
      {PdfLists && (
        <FileUpload>
          <label htmlFor="file">파일 업로드</label>
          <input
            type="file"
            multiple
            id="file"
            accept=".pdf"
            onChange={handleFileChange}
          />
          <Button
            onClick={() =>
              handleUpload(degree, selectedFiles, Token, "departure")
            }
          >
            업로드
          </Button>
        </FileUpload>
      )}
      {PdfListShow && (
        <ComponentDiv>
          <PdfList degree={degree} chosenFormType="departure" />
        </ComponentDiv>
      )}
    </div>
  );
}
