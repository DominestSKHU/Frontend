import React from "react";
import { Container } from "@/style/border";
import Cleanlist from "@/components/clean/Cleanlist";
export default function Cleaning() {
  return (
    <div>
      <Container>
        <h1>방역 및 호실점검</h1>
      </Container>

      <Cleanlist />
    </div>
  );
}
