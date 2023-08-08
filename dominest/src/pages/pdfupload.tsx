import React, { useState, useEffect } from "react";
import PdfList from "@/components/PdfList";
import { FileUpload, DormitoryYear, Button } from "@/style/InputStyle";
import { ComponentDiv } from "@/style/ComponentStyle";
import Navber from "@/components/AdminNavbar";
import axios from "axios";
export default function pdfupload() {
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [PdfLists, setPdfLists] = useState(false);
  const [degree, setDegree] = useState("");
  const [Token, setToken] = useState("");

  const [PdfListShow, setPdfListShow] = useState(false);
  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    setToken(authToken);
    if (!authToken) {
      router.push("/login");
    }
  }, []);
  useEffect(() => {
    setDegree(selectedYear + selectedSemester);
  }, [selectedYear, selectedSemester, degree]);

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const handleSemesterChange = (e) => {
    setSelectedSemester(e.target.value);
  };

  const handleFileChange = (e) => {
    setSelectedFiles(e.target.files);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("residenceSemester", selectedYear + selectedSemester);
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append("pdfs", selectedFiles[i]);
    }
    axios
      .post("http://domidomi.duckdns.org/residents/pdf", formData, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      })
      .then((response) => {
        console.log("업로드 성공:", response.data);
      })
      .catch((error) => {
        console.error("업로드 실패:", error);
      });
  };

  return (
    <div>
      <Navber />

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
          <Button onClick={handleUpload}>업로드 </Button>
        </FileUpload>
      )}
      {PdfListShow && (
        <ComponentDiv>
          <PdfList degree={degree} />
        </ComponentDiv>
      )}
    </div>
  );
}
