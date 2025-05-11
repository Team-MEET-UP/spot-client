import { useLogout } from "../service";

//@TODO 로그아웃 처리 관련 논의 필요, 로그아웃 로딩중 처리

export const Logout = () => {
  const { mutate } = useLogout();

  const handleClick = async () => {
    mutate();
  };

  return (
    <button
      className="w-full h-[44px] flex gap-2 items-center justify-center bg-gray-5 rounded-xl"
      onClick={handleClick}>
      <img src="/icon/logout.svg" alt="logout" />
      <p className="text-md font-medium text-gray-60">로그아웃</p>
    </button>
  );
};
