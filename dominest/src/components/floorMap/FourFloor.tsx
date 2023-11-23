import { FloorTable } from "@/style/domiStyle/building";
import { floorProps } from "./TwoThreeFloor";

export default function FourFloor({ floor }: floorProps) {
    return (
        <div>
        <FloorTable>
          <tr>
            <td>{floor}층 입니다.</td>
          </tr>
        </FloorTable>
      </div>
    )
}