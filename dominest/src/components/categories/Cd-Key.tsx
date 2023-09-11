import { ComponenComplaints } from "@/style/ComponentStyle";
import React from "react";

export default function Cd_Key(props: any) {
  return (
    <div>
      <ComponenComplaints>
        <div>
          <h1>카드키 관리대장</h1>
        </div>
        <label>
          이름검색
          <input />
          <button>조회</button>
        </label>
      </ComponenComplaints>
    </div>
  );
}
