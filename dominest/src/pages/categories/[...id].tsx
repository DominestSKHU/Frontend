import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import "../../app/globals.css";
import Navbar from "@/components/AdminNavbar";
import { useAuth } from "@/utils/useAuth/useAuth";
import Img from "@/components/categories/Img";
import Parcellest from "@/components/categories/Parcel";
import Complaints from "@/components/categories/Complain";
import Cd_Key from "@/components/categories/Cd-Key";
import Cleaning from "@/components/categories/Cleaning";

export default function ImgBoard() {
  const router = useRouter();
  const [idname, setIdname] = useState(router.query.id);
  const Token = useAuth();

  useEffect(() => {
    if (router.query.id !== undefined) {
      setIdname(router.query.id);
    }
  }, [router.query.id]);

  return (
    <div>
      <Navbar page="카테고리" />

      {typeof idname === "object" &&
        idname.length > 2 &&
        idname[2] === "image-types" && <Img idname={idname} />}

      {typeof idname === "object" &&
        idname.length > 2 &&
        idname[2] === "undelivered-parcel" && (
          <Parcellest idname={idname} Token={Token} />
        )}
      {typeof idname === "object" &&
        idname.length > 2 &&
        idname[2] === "complaint" && (
          <Complaints idname={idname} Token={Token} />
        )}
      {typeof idname === "object" &&
        idname.length > 2 &&
        idname[2] === "card-key" && <Cd_Key idname={idname} Token={Token} />}

      {typeof idname === "object" &&
        idname.length > 2 &&
        idname[2] === "sanitation-check" && (
          <Cleaning idname={idname} Token={Token} />
        )}
    </div>
  );
}
