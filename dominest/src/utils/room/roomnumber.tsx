import React from "react";

const formatRoomNumber = (roomNumber: number) => {
  return roomNumber >= 1 && roomNumber <= 9
    ? `0${roomNumber}`
    : `${roomNumber}`;
};

const generateRoomPattern = () => {
  const floorCount = 10;
  const roomsPerFloor = [26, 26, ...Array(7).fill(17)]; // 각 층별 호실 수 배열

  const roomPattern: JSX.Element[] = [];
  for (let floor = 2; floor <= floorCount; floor++) {
    const roomCount = roomsPerFloor[floor - 2];
    for (let roomNumber = 1; roomNumber <= roomCount; roomNumber++) {
      roomPattern.push(
        <option key={`${floor}-${roomNumber}`} value={`${floor}${roomNumber}`}>
          {`${formatRoomNumber(floor)}${formatRoomNumber(roomNumber)}`}
        </option>
      );
    }
  }

  return roomPattern;
};

//select 출력력
export default function RoomSelector() {
  return (
    <select id="roomSelect">
      <option value="">전체 호실</option>
      {generateRoomPattern()}
    </select>
  );
}
