import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div
      className="relative w-full bg-sub-sub px-5 py-4 rounded-2xl text-white cursor-pointer"
      onClick={() => {
        navigate("/find");
      }}>
      <div className="flex items-center gap-1">
        <span className="text-lg font-bold">모임 만들기</span>
        <img src="/icon/arrow.svg" alt="arrow" />
      </div>
      <p className="text-sm font-medium">만남 장소를 정해보세요</p>
      <img src="/image/banner.png" className=" absolute top-0 right-5 h-20 w-20" />
    </div>
  );
};

export default Banner;
