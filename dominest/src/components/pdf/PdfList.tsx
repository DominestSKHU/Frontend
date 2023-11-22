import { useEffect, useState } from "react";

import { ComponentTable, ComponentDiv2 } from "@/style/ComponentStyle";

import "../../app/globals.css";
import axios from "axios";
import { useAuth } from "@/utils/useAuth/useAuth";

/** @jsxImportSource @emotion/react */
interface Props {
  degree: string;
  chosenFormType: string;
}

export default function PdfList(props: Props) {
  const [data, setData] = useState<any[]>();
  const [pdfdata, setPdfData] = useState("");
  const [selectedFiles, setSelectedFiles] = useState<File | null>(null);
  const [id, setId] = useState("");
  const Token = useAuth();
  const [upadate, setUpdate] = useState<number>(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData(props.degree);
  }, [props, upadate]);

  useEffect(() => {
    if (pdfdata !== "") {
      openPdfInNewWindow();
    }
  }, [pdfdata]);
  useEffect(() => {
    if (selectedFiles !== null) {
      StudentOnePdf(selectedFiles);
    }
  }, [selectedFiles, props]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setSelectedFiles(selectedFile);
    } else {
      setSelectedFiles(null);
    }
  };

  const handleUploadButtonClick = () => {
    const fileInput = document.getElementById("pdfone");
    if (fileInput) {
      fileInput.click();
    }
  };

  const StudentOnePdf = (file: string | Blob) => {
    const formData = new FormData();
    formData.append("pdf", file);
    formData.append("residenceSemester", props.degree);
    formData.append("pdfType", props.chosenFormType);
    axios
      .post(
        `${process.env.NEXT_PUBLIC_API_URL}/residents/${id}/pdf`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      )

      .then((response) => {
        console.log("업로드 성공:", response.data);
        alert("업로드에 성공하였습니다.");
        setUpdate(upadate + 1);
        return;
      })
      .catch((error) => {
        console.error("업로드 중 오류 발생:", error);
        console.error(formData);
      });
  };
  const fetchData = (degree: string) => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/residents/pdf?residenceSemester=${degree}`
      )
      .then((response) => {
        setData(response.data?.data?.pdfs);
        console.log(response.data?.data);
      })
      .catch((error) => {
        console.error("데이터 조회 중 오류 발생:", error);
      });
  };

  const openPdfInNewWindow = () => {
    setLoading(true);
    const blob = new Blob([pdfdata], { type: "application/pdf" });
    const objectUrl = URL.createObjectURL(blob);

    const windowWidth = 800;
    const windowHeight = 600;
    const screenWidth = window.screen.availWidth;
    const screenHeight = window.screen.availHeight;
    const left = (screenWidth - windowWidth) / 2;
    const top = (screenHeight - windowHeight) / 2;

    const windowFeatures = `width=${windowWidth},height=${windowHeight},top=${top},left=${left}`;

    const pdfWindow = window.open(objectUrl, "myPdfWindow", windowFeatures);

    pdfWindow?.addEventListener("load", () => {
      setLoading(false);
    });
  };
  const pdfview = (idd: string, ch: string) => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/residents/${idd}/pdf?pdfType=${ch}`,
        {
          responseType: "arraybuffer",
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      )
      .then((response) => {
        setPdfData(response.data);
        console.log(response);
        openPdfInNewWindow();
      })
      .catch((error) => {
        console.log(props.chosenFormType);
        console.error("데이터 조회 중 오류 발생:", error);
      });
  };

  const renderTable = () => {
    if (data && Array.isArray(data) && data.length > 0) {
      return (
        <div>
          {props.chosenFormType === "admission" && (
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
                      {pdfs.existsAdmissionFile === "성공" ? (
                        <button
                          onClick={() => {
                            pdfview(pdfs.id, props.chosenFormType);
                          }}
                        >
                          PDF 보기
                        </button>
                      ) : (
                        <button disabled>PDF 보기</button>
                      )}

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
          )}
          {props.chosenFormType === "departure" && (
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
                    <td>{pdfs.existsDepartureFile}</td>
                    <td>
                      <button
                        onClick={() => {
                          pdfview(pdfs.id, props.chosenFormType);
                        }}
                      >
                        PDF 보기
                      </button>

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
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          handleFileChange(e)
                        }
                        style={{ display: "none" }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </ComponentTable>
          )}
        </div>
      );
    } else {
      return <p>데이터가 없습니다.</p>;
    }
  };

  return <ComponentDiv2>{renderTable()}</ComponentDiv2>;
}
