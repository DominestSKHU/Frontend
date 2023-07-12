import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import axios from "axios";

import "../app/globals.css";
/** @jsxImportSource @emotion/react */

export default function StudentDate() {
  const [data, setData] = useState([]);

  useEffect(() => {
<<<<<<< HEAD
    // 데이터 조회 요청을 useEffect 내에서 수행합니다.
=======
>>>>>>> main
    axios
      .get("http://domidomi.duckdns.org/residents")
      .then((response) => {
        setData(response.data);
<<<<<<< HEAD
        console.log(response.data); // 조회된 데이터를 상태로 설정합니다.
=======
>>>>>>> main
      })
      .catch((error) => {
        console.error("데이터 조회 중 오류 발생:", error);
      });
  }, []);

<<<<<<< HEAD
=======
  useEffect(() => {
    console.log(data.length);
  }, [data]);

  useEffect(() => {
    if (data.length > 0) {
      const parsedData = JSON.parse(data);
      const residents = parsedData.data.residents;

      for (const resident of residents) {
        console.log(resident.name, resident.gender, resident.studentId);
      }
    }
  }, [data]);

>>>>>>> main
  const renderTable = () => {
    const rows = [];

    if (data.length > 0) {
      const headerRow = Object.keys(data[0]).map((key) => (
        <th
          key={key}
          css={css`
            padding: 5px 1px;
            min-width: 120px;
            white-space: nowrap;
            border: 1px solid black;
          `}
        >
          {key}
        </th>
      ));

      rows.push(<tr key="header">{headerRow}</tr>);

      for (let i = 0; i < data.length; i++) {
        const rowData = (Object.values(data[i]) as string[]).map(
          (value, index) => (
            <td
              key={index}
              css={css`
                padding: 5px 1px;
                min-width: 120px;
                white-space: nowrap;
                border: 1px solid black;
              `}
            >
              {value}
            </td>
          )
        );

        rows.push(<tr key={i}>{rowData}</tr>);
      }
    }

    return (
      <table
        css={css`
          border-collapse: collapse;
          margin: 10px;
          border-radius: 5px;
        `}
      >
        <tbody>{rows}</tbody>
      </table>
    );
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
<<<<<<< HEAD
=======
        <p>{data[1]}</p>
        <p>ㅎㅇ</p>
>>>>>>> main
        {renderTable()}
      </div>
    </div>
  );
}
