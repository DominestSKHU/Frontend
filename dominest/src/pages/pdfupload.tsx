import React, { useState } from "react";
import PdfList from "@/components/PdfList";
import { FileUpload, DormitoryYear } from "@/style/InputStyle";
import Navber from "@/components/AdminNavbar";

export default function pdfupload() {
  return (
    <div>
      <Navber />
      <DormitoryYear>
        <select>
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
        <select>
          <option value="">차수 선택</option>
          <option value="_1">1학기</option>
          <option value="_SUMMER">여름학기</option>
          <option value="_2">2학기</option>
          <option value="_WINTER">겨울학기</option>
        </select>
        <button>조회</button>
      </DormitoryYear>
      <FileUpload>
        <label htmlFor="file">파일 업로드</label>
        <input type="file" id="file" accept=".zip" />
        <button>업로드 </button>
      </FileUpload>
      <PdfList />
    </div>
  );
}
