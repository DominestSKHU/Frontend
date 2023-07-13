import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import axios from "axios";

import "../app/globals.css";
/** @jsxImportSource @emotion/react */

export default function StudentData() {
  const [data, setData] = useState<any[]>(null);

  useEffect(() => {
    // 데이터 조회 요청을 useEffect 내에서 수행합니다.
    axios
      .get("http://domidomi.duckdns.org/residents")
      .then((response) => {
        setData(response.data);
        console.log(response.data);
        // 조회된 데이터를 상태로 설정합니다.
      })
      .catch((error) => {
        console.error("데이터 조회 중 오류 발생:", error);
      });
  }, []);

  // ...

  const renderTable = () => {
    if (data && Array.isArray(data) && data.length > 0) {
      console.log(data);
      return (
        <table
          css={css`
            border-collapse: collapse;
            width: 100%;
          `}
        >
          <thead>
            <tr>
              <th
                css={css`
                  border: 1px solid black;
                  padding: 8px;
                `}
              >
                Name
              </th>
              <th
                css={css`
                  border: 1px solid black;
                  padding: 8px;
                `}
              >
                Gender
              </th>
              <th
                css={css`
                  border: 1px solid black;
                  padding: 8px;
                `}
              >
                Student ID
              </th>
              <th
                css={css`
                  border: 1px solid black;
                  padding: 8px;
                `}
              >
                Major
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((resident) => (
              <tr key={resident.id}>
                <td
                  css={css`
                    border: 1px solid black;
                    padding: 8px;
                  `}
                >
                  {resident.name}
                </td>
                <td
                  css={css`
                    border: 1px solid black;
                    padding: 8px;
                  `}
                >
                  {resident.gender}
                </td>
                <td
                  css={css`
                    border: 1px solid black;
                    padding: 8px;
                  `}
                >
                  {resident.studentId}
                </td>
                <td
                  css={css`
                    border: 1px solid black;
                    padding: 8px;
                  `}
                >
                  {resident.major}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    } else {
      console.log("작동안함", data?.data?.residents, Array.isArray(data));

      return null;
    }
  };

  // ...

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
