/* @jsxImportSource @emotion/react */

import { unitColor } from "@/style/domiStyle/building";
import { css } from "@emotion/react";

export default function RoomType() {
  return (
    <div className="unitColor" css={unitColor}>
      <div>
        <div
          css={css`
            width: 10px;
            height: 10px;
            background-color: #c0dfff;
          `}
        />
        <span>남학생호실</span>
      </div>
      <div>
        <div
          css={css`
            width: 10px;
            height: 10px;
            background-color: #ff6cd0;
          `}
        />
        <span>여학생호실</span>
      </div>
      <div>
        <div
          css={css`
            width: 10px;
            height: 10px;
            background-color: #fdc397;
          `}
        />
        <span>장애인실 1인실</span>
      </div>
    </div>
  );
}
