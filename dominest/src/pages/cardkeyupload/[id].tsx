import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/AdminNavbar";
import "../../app/globals.css";
import { CardKeyUploadStyle } from "@/style/ComponentStyle";
import { useAuth } from "@/utils/useAuth/useAuth";
import CardInput from "@/components/card_key/CardUpload";

export default function cardkeyupload() {
  const router = useRouter();
  const [idname, setIdname] = useState<any>(router.query.id);

  useEffect(() => {
    if (router.query.id !== undefined) {
      setIdname(router.query.id);
    }
  }, [router.query.id]);

  const Token = useAuth();

  return (
    <div>
      <Navbar page={"카드키 대장부"} />

      <CardKeyUploadStyle>
        <h1>카드키 추가</h1>
      </CardKeyUploadStyle>
      <CardInput idname={idname} Token={Token} />
    </div>
  );
}
