import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { fetchData, StudentDelete } from "@/utils/uploadutil";
import { ComponentTable,ComponentDiv2 } from "@/style/ComponentStyle";
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
        
            <ComponentTable>
              <thead>
                <tr>
                 <th>순서</th>
                  <th>이름</th>
                  <th>학번</th>
                  <th>조회  업로드</th>
                </tr>
              </thead>
              <tbody>
                {data.map((resident,index) => (
                  <tr key={resident.id}>
                    <td>{index+1}</td>
                    <td>{resident.name}</td>

                    <td>{resident.studentId}</td>

                    <td>
                    <button
                        onClick={() => StudentDelete(resident.id, props.Token)}
                      >
                        조회
                      </button>
                      <button
                        onClick={() => StudentDelete(resident.id, props.Token)}
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
