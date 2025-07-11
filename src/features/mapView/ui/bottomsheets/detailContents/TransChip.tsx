import { useTransfer } from "@/features/mapView/hooks";
import { TransferType } from "@/features/mapView/model";
import Subway from "@/assets/icon/subway.svg";
import SubwayGray from "@/assets/icon/subwayGray.svg";
import Car from "@/assets/icon/car.svg";
import CarGray from "@/assets/icon/carGray.svg";
import { motion } from "framer-motion";

interface TransChipProps {
  type: TransferType;
  setType: React.Dispatch<React.SetStateAction<"subway" | "car">>;
  isMe: boolean;
}

export const TransChip = ({ type, setType, isMe }: TransChipProps) => {
  const { mutate } = useTransfer();

  const handleClick = (isTransit: boolean) => {
    if (!isMe) return;
    mutate({ isTransit });
  };

  return (
    <div className="px-5 w-full">
      <div className="relative flex w-full h-10 px-[5px] py-2 rounded-xl bg-gray-5 overflow-hidden">
        <motion.div
          className="absolute top-1 bottom-1 w-1/2 bg-white rounded-lg"
          animate={{ x: type === "subway" ? "0%" : "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />

        {/* subway 버튼 */}
        <div
          className="w-1/2 z-10 flex justify-center items-center cursor-pointer"
          onClick={() => {
            setType("subway");
            handleClick(true);
          }}>
          <img src={type === "subway" ? Subway : SubwayGray} alt="subway" className="w-5 h-5" />
        </div>

        {/* car 버튼 */}
        <div
          className="w-1/2 z-10 flex justify-center items-center cursor-pointer"
          onClick={() => {
            setType("car");
            handleClick(false);
          }}>
          <img src={type === "car" ? Car : CarGray} alt="car" className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};
