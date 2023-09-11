import { CardKeyDiv } from "@/style/ComponentStyle";
import React from "react";
import CardkeyList from "@/components/card_key/Card_List";
import Link from "next/link";

export default function Cd_Key(props: any) {
  const urlLink = `/cardkeyupload/${props.idname[0]}`;

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
          <Link href={urlLink}>
            <button>추가</button>
          </Link>
        </label>
      </CardKeyDiv>
      <CardkeyList idname={props.idname} />
    </div>
  );
}
