/* @jsxImportSource @emotion/react */
import { roomNum } from "@/content/floorRoom";
import {
  FloorTable,
  FloorTableY,
  disabledUnit,
  studentNameUnit,
  yUnitDiv,
} from "@/style/domiStyle/building";
import React from "react";
import RoomType from "./RoomType";

export interface floorProps {
  floor: number;
}

export default function TwoThreeFloor({ floor }: floorProps) {
  const [showstudentState, setShowstudentState] = React.useState<boolean[]>(
    roomNum.map(() => false)
  );

  const controllShow = (unit: number) => {
    setShowstudentState((prev) => {
      const newState = [...prev];
      newState[unit] = !newState[unit];
      return newState;
    });
  };

  return (
    <div>
      <FloorTable>
        <div className="unitFrame">
          <div className="unitBox">
            {roomNum.map(
              (unit) =>
                unit < 18 && (
                  <div key={unit} onClick={() => controllShow(unit)}>
                    {showstudentState[unit] ? (
                      <div css={studentNameUnit}>
                        <span>홍길동</span>
                        <span>홍길동</span>
                      </div>
                    ) : unit < 10 ? (
                      <div css={yUnitDiv}>
                        <span>
                          {floor}0{unit}호
                        </span>
                      </div>
                    ) : (
                      <div css={yUnitDiv}>
                        <span>
                          {floor}
                          {unit}호
                        </span>
                      </div>
                    )}
                  </div>
                )
            )}
          </div>
          <RoomType />
        </div>
        <FloorTableY>
          {roomNum.map(
            (unit) =>
              unit >= 18 && (
                <div key={unit} onClick={() => controllShow(unit)}>
                  {showstudentState[unit] ? (
                    unit === 18 ? (
                      <div css={disabledUnit}>
                        <span>홍길동</span>
                      </div>
                    ) : (
                      <div css={studentNameUnit}>
                        <span>홍길동</span>
                        <span>홍길동</span>
                      </div>
                    )
                  ) : unit === 18 ? (
                    <div css={disabledUnit}>
                      <span>
                        {floor}
                        {unit}호
                      </span>
                    </div>
                  ) : (
                    <div css={yUnitDiv}>
                      <span>
                        {floor}
                        {unit}호
                      </span>
                    </div>
                  )}
                </div>
              )
          )}
        </FloorTableY>
      </FloorTable>
    </div>
  );
}
