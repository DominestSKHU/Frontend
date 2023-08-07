import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import {  StudentDelete } from "@/utils/uploadutil";
import { ComponentTable,ComponentDiv2 } from "@/style/ComponentStyle";
import "../app/globals.css";
import axios from "axios";

/** @jsxImportSource @emotion/react */

export default function PdfList(props) {
  const [data, setData] = useState<any[]>();


  useEffect(() => {
    fetchData(props.degree, setData);
  }, [props]);


  const fetchData = () => {
    axios
      .get(`http://domidomi.duckdns.org/residents/pdf?residenceSemester=${props.degree}`)
      .then((response) => {
        setData(response.data?.data?.pdfs)
        console.log(response)
        console.log(setData)
        console.log("조회성공");
        console;
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
                  <th>조회  업로드</th>
                </tr>
              </thead>
              <tbody>
                {data.map((pdfs,index) => (
                  <tr key={pdfs.id}>
                    <td>{index+1}</td>
                    <td>{pdfs.residentName}</td>
                    <td>{pdfs.existsFile}</td>
                    <td>
                    <button
                        onClick={() => StudentDelete(pdfs.id, props.Token)}
                      >
                        조회
                      </button>
                      <button
                        onClick={() => StudentDelete(pdfs.id, props.Token)}
                      >
                        업로드
                      </button>
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

  return (
    <ComponentDiv2>
        {renderTable()}
    </ComponentDiv2>
  );
}
