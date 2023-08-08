import { css } from "@emotion/react";
import { use, useEffect, useState } from "react";
import { StudentDelete } from "@/utils/uploadutil";
import { ComponentTable, ComponentDiv2 } from "@/style/ComponentStyle";
import "../app/globals.css";
import axios from "axios";

/** @jsxImportSource @emotion/react */

export default function PdfList(props) {
  const [data, setData] = useState<any[]>();
  const [selectedFiles, setSelectedFiles] = useState(null);
  const [Token, setToken] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    setToken(authToken);
  }, []);

  useEffect(() => {
    fetchData();
  }, [props]);

  const handleFileChange = (e) => {
    setSelectedFiles(e.target.files[0]);
  };
  useEffect(() => {
    StudentOnePdf();
  }, [selectedFiles]);

  const handleUploadButtonClick = () => {
    const fileInput = document.getElementById("pdfone");
    if (fileInput) {
      fileInput.click();
    }
  };

  const StudentOnePdf = () => {
    const formData = new FormData();
    formData.append("pdf", selectedFiles);
    formData.append("residenceSemester", props.degree);
    formData.append("pdfType", "admission");
    axios
      .post(`http://domidomi.duckdns.org/residents/${id}/pdf`, formData, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      })

      .then((response) => {
        console.log("업로드 성공:", response.data);
      })
      .catch((error) => {
        console.error("업로드 중 오류 발생:", error);
        console.error(formData);
      });
  };
  const fetchData = () => {
    axios
      .get(
        `http://domidomi.duckdns.org/residents/pdf?residenceSemester=${props.degree}`
      )
      .then((response) => {
        setData(response.data?.data?.pdfs);
      })
      .catch((error) => {
        console.error("데이터 조회 중 오류 발생:", error);
      });
  };

  const renderTable = () => {
    if (data && Array.isArray(data) && data.length > 0) {
      return (
        <ComponentTable>
          <thead>
            <tr>
              <th>순서</th>
              <th>이름</th>
              <th>결과</th>
              <th>조회 업로드</th>
            </tr>
          </thead>
          <tbody>
            {data.map((pdfs, index) => (
              <tr key={pdfs.id}>
                <td>{index + 1}</td>
                <td>{pdfs.residentName}</td>
                <td>{pdfs.existsAdmissionFile}</td>

                <td>
                  <button>조회</button>

                  <button
                    onClick={() => {
                      handleUploadButtonClick();
                      setId(pdfs.id);
                    }}
                  >
                    업로드
                  </button>

                  <input
                    type="file"
                    name="file"
                    id="pdfone"
                    onChange={handleFileChange}
                    style={{ display: "none" }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </ComponentTable>
      );
    } else {
      return <p>데이터가 없습니다.</p>;
    }
  };

  return <ComponentDiv2>{renderTable()}</ComponentDiv2>;
}
