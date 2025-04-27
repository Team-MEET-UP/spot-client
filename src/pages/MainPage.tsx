import KakaoLogin from "@/features/main/ui/KakaoLogin";
import Button from "@/shared/ui/Button";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-3 items-center pb-6 justify-end h-screen px-5">
      <span className="text-md font-medium text-gray-60">모임의 기준을 만들다</span>
      <img src="/icon/logo.svg" alt="logo" className="mb-[38px]" />
      <Button
        onClick={() => {
          navigate("/find");
        }}>
        바로 모임 만들기
      </Button>
      <KakaoLogin />
    </div>
  );
};

export default MainPage;
