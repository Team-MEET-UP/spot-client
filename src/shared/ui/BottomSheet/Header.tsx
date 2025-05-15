import Drag from "@/assets/icon/drag.svg";

export const Header = () => {
  return (
    <div className="flex justify-center items-center w-full p-3 cursor-grab active:cursor-grabbing">
      <img src={Drag} alt="drag" className="w-16 h-1" />
    </div>
  );
};
