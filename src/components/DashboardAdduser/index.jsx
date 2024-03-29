/* eslint-disable react/prop-types */
import { Text, Img } from "../..";
import { FaPlus } from "react-icons/fa";

export default function DashboardAdduser({ add = "ADD", ...props }) {
  return (
    <div {...props}>
      <div className="flex flex-col self-stretch items-center p-[5px] border-indigo-A400 border border-dashed bg-gray-200_01 rounded-[24px]">
        <Img src={FaPlus} alt="add User" className="h-[12px] w-[12px]" />
        <Text size="s" as="p" className="mb-1.5 !text-indigo-A400">
          {add}
        </Text>
      </div>
    </div>
  );
}
