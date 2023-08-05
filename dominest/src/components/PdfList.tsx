import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { fetchData, StudentDelete } from "@/utils/uploadutil";

import "../app/globals.css";
/** @jsxImportSource @emotion/react */

export default function PdfList(props) {
  const [data, setData] = useState<any[]>();

  useEffect(() => {
    fetchData(props.degree, setData);
  }, [props]);

  const renderTable = () => {
    if (data && Array.isArray(data) && data.length > 0) {
      return (
        
            <table>
              <thead>
                <tr>
                  <th>번호</th>
                  <th>이름</th>
                  <th>학번</th>
                  <th>삭제</th>
                </tr>
              </thead>
              <tbody>
                {data.map((resident, index) => (
                  <tr key={resident.id}>
                    <td>{index + 1}</td>
                    <td>{resident.name}</td>

                    <td>{resident.studentId}</td>

                    <td>
                      <button
                        onClick={() => StudentDelete(resident.id, props.Token)}
                      >
                        삭제
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
     
      );
    } else {
      return <p>데이터가 없습니다.</p>;
    }
  };

  return (
    <div
      css={css`
        margin: 20px;
        display: flex;
        justify-content: center;
        width: 100%;
        height: 600px;
        max-height: 600px;
        align-items: center;
        overflow: auto;
        border: 1px solid black;
      `}
    >
      <div
        css={css`
          width: 100%;
          height: 100%;
        `}
      >
        {renderTable()}
      </div>
    </div>
  );
}
