import React from "react";
import { Container } from "@/style/border";
import CleanlList from "@/components/clean/Cleanlist";
export default function Cleaning(props: { idname: any[]; Token: string }) {
  return (
    <div>
      <CleanlList idname={props.idname} />
    </div>
  );
}
