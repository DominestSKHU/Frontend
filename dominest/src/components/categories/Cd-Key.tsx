import { CardKeyDiv } from "@/style/ComponentStyle";
import React from "react";
import CardkeyList from "@/components/card_key/Card_List";
export default function Cd_Key(props: any) {
  return (
    <div>
      <CardKeyDiv>
        <div>
          <h1>카드키 관리대장</h1>
        </div>
        <label>
          이름
          <input />
          <button>조회</button>
        </label>
      </CardKeyDiv>
      <CardkeyList idname={props.idname} />
    </div>
  );
}
