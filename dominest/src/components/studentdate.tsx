import { css } from "@emotion/react";
import React, { useState } from "react";

import "../app/globals.css";
/** @jsxImportSource @emotion/react */

export default function studentdate() {
  const renderTable = () => {
    const rows = [];

    for (let i = 0; i < 130; i++) {
      const cells = [];

      for (let j = 0; j < 25; j++) {
        cells.push(
          <td
            key={j}
            css={css`
              padding: 5px 1px;
              min-width: 120px;
              white-space: nowrap;
              border: 1px solid black;
            `}
          >
            {"안녕하세요"}
          </td>
        );
      }

      rows.push(<tr key={i}>{cells}</tr>);
    }
    return (
      <table
        css={css`
          border-collapse: collapse;
          margin: 10px;
          border-rounder: 5px;
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
        {renderTable()}
      </div>
    </div>
  );
}
