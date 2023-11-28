import {
  CheckOn,
  DormitoryDetail,
  InModal,
  ResidentList,
  StudentButton,
} from "@/style/domiStyle/SelectStudentStyle";
import React from "react";

interface SelectStudentProps {
  students: {
    student1: string;
    student2: string;
  };
  floorNum: number;
}

interface studentStateArray {
  id: number;
  ClickState: boolean;
  student: string;
}

export default function SelectStudent({
  students,
  floorNum,
}: SelectStudentProps): JSX.Element {
  const [studentState, setStudentState] = React.useState<studentStateArray[]>([
    {
      id: 1,
      ClickState: false,
      student: students.student1,
    },
    { id: 2, ClickState: false, student: students.student2 },
  ]);
  function CheckStudent() {
    setStudentState((prev) => {
      const newState = [...prev];
      newState[0].ClickState = !newState[0].ClickState;
      return newState;
    });
  }
  return (
    <InModal>
      <ResidentList>
        {studentState.map((student) =>
          student ? (
            <CheckOn key={student.id}>
              <span>{floorNum < 100 ? floorNum * 100 + 1 : floorNum}A</span>
              <StudentButton onClick={() => CheckStudent()}>
                {student.student}
              </StudentButton>
            </CheckOn>
          ) : (
            <DormitoryDetail>
              <span>{floorNum < 100 ? floorNum * 100 + 1 : floorNum}A</span>
              <StudentButton onClick={() => CheckStudent}>
                {students.student1}
              </StudentButton>
            </DormitoryDetail>
          )
        )}
      </ResidentList>
    </InModal>
  );
}
