import { CardKeyDiv } from "@/style/ComponentStyle";
import React, { useState } from "react";
import CardkeyList from "@/components/card_key/Card_List";
import Link from "next/link";
import CardSerch from "@/components/card_key/CardSerch";
export default function Cd_Key(props: any) {
  const urlLink = `/cardkeyupload/${props.idname[0]}`;
  const [name, setName] = useState<string>("");
  const [serch, setSerch] = useState<string>("");

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const cardkeysearch = () => {
    if (name === "") {
      return alert("조회할 내용을 작성해주세요");
    }
    setSerch(name);
    return alert(`"${name}" 검색을 시도했습니다.`);
  };

  return (
    <div>
      <CardKeyDiv>
        <div>
          <h1>카드키 관리대장</h1>
        </div>
        <label>
          이름
          <input onChange={onChangeName} />
          <button onClick={cardkeysearch}>조회</button>
          <Link href={urlLink}>
            <button>추가</button>
          </Link>
        </label>
      </CardKeyDiv>
      {serch !== "" && <CardSerch idname={props.idname} name={serch} />}

      {serch === "" && <CardkeyList idname={props.idname} />}
    </div>
  );
}
