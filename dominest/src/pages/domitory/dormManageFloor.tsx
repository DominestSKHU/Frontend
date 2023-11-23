import { FloorFrame, Frame, SelectDegree, SelectFloorBtn } from "@/style/domiStyle/building";
import "../../app/global.css";
import React from "react";
import TwoThreeFloor from "@/components/floorMap/TwoThreeFloor";
import { floorNum } from "@/content/floorRoom";
import FourFloor from "@/components/floorMap/FourFloor";
import FiveUpFloor from "@/components/floorMap/FiveUpFloor";
import Navbar from "@/components/AdminNavbar";
import { Semester, Year } from "@/content/date";

const DormManageFloor = () => {
  const [floor, setFloor] = React.useState<number>(2);

  function floorChange() {
    if (floor === 2 || floor === 3) {
      return <TwoThreeFloor floor={floor} />;
    } else if (floor === 4) {
      return <FourFloor floor={floor} />;
    } else if (floor >= 5) {
      return <FiveUpFloor floor={floor} />;
    }
  }

  return (
    <div>
      <Navbar page={"입실 관리"} />
      <Frame>
        <div className="floorbtnDiv">
          {floorNum.map(
            (floor) =>
              floor >= 2 && (
                <SelectFloorBtn
                  className="floorbtn"
                  onClick={() => setFloor(floor)}
                >
                  {floor}층
                </SelectFloorBtn>
              )
          )}
        </div>
        <FloorFrame>{floorChange()}</FloorFrame>
      </Frame>
      <SelectDegree>
        <select>
          {Year.map((yearObj) => (
            <option key={yearObj.postYear} value={yearObj.postYear}>
              {yearObj.year}
            </option>
          ))}
        </select>
        <select>
          {Semester.map((semesterObj) => (
            <option
              key={semesterObj.postSemester}
              value={semesterObj.postSemester}
            >
              {semesterObj.semester}
            </option>
          ))}
        </select>
      </SelectDegree>
    </div>
  );
};

export default DormManageFloor;
