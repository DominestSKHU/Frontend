/* @jsxImportSource @emotion/react */
import { RoomStudents, roomNum } from "@/content/floorRoom";
import {
  FloorTable,
  FloorTableY,
  disabledUnit,
  studentNameUnit,
  yUnitDiv,
} from "@/style/domiStyle/building";
import React from "react";
import RoomType from "./RoomType";
import SelectStudent from "./SelectStudent";

export interface floorProps {
  floor: number;
}

export default function TwoThreeFloor({ floor }: floorProps) {
  const [showstudentState, setShowstudentState] = React.useState<boolean[]>(
    roomNum.map(() => false)
  );
  const [ChooesStudent, setChooesStudent] = React.useState<number>(0);
  const [floorNum, setFloorNum] = React.useState<number>(floor);

  const controllShow = (unit: number) => {
    setShowstudentState((prev) => {
      const newState = [...prev];
      newState[unit] = !newState[unit];
      return newState;
    });
  };
  const ChooseStudent = (unit: number) => {
    if (unit === 0) {
      setChooesStudent(unit);
    } else {
      setChooesStudent(unit - 1);
    }
  };
  const SendFloor = (floor: number, unit: number) => {

    let roomNum = floor * 100 + unit;
    setFloorNum(roomNum);
  }    
  return (
    <div>
      <FloorTable>
        <div className="unitFrame">
          <div className="unitBox">
            {roomNum.map(
              (unit) =>
                unit < 18 && (
                  <div
                    key={unit}
                    onClick={() => {
                      controllShow(unit);
                      ChooseStudent(unit);
                      SendFloor(floor, unit);
                    }}
                  >
                    {showstudentState[unit] ? (
                      <div css={studentNameUnit}>
                        <div>
                          <span>{RoomStudents[unit - 1].student1}</span>
                          <span>{RoomStudents[unit - 1].student2}</span>
                        </div>
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
          <SelectStudent students={RoomStudents[ChooesStudent]} floorNum={floorNum} />
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
