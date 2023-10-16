import React from "react";

const formatRoomNumber = (roomNumber: number) => {
  return roomNumber >= 1 && roomNumber <= 9
    ? `0${roomNumber}`
    : `${roomNumber}`;
};

const generateRoomPattern = () => {
  const floorCount = 10;
  const roomsPerFloor = [26, 26, ...Array(7).fill(17)];

  const roomPattern = [];
  for (let floor = 2; floor <= floorCount; floor++) {
    const roomCount = roomsPerFloor[floor - 2];
    for (let roomNumber = 1; roomNumber <= roomCount; roomNumber++) {
      roomPattern.push(
        <option
          key={`${floor}-${roomNumber}`}
          value={`${formatRoomNumber(floor)}${formatRoomNumber(roomNumber)}`}
        >
          {`${formatRoomNumber(floor)}${formatRoomNumber(roomNumber)}`}
        </option>
      );
    }
  }

  return roomPattern;
};

export default function RoomSelector({ onRoomChange }: { onRoomChange: any }) {
  const handleRoomChange = (event: { target: { value: any } }) => {
    const selectedRoom = event.target.value;
    onRoomChange(selectedRoom);
  };

  return (
    <select id="roomSelect" onChange={handleRoomChange}>
      <option value="">전체 호실</option>
      {generateRoomPattern()}
    </select>
  );
}
