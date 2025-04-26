//@TODO 실제 카카오톡 로그인 기능 구현!
const KakaoLogin = () => {
  return (
    <button className="flex gap-2 w-[320px] h-14 justify-center items-center bg-kakao-yellow text-kakao-black text-md font-semibold rounded-2xl">
      <img src="/icon/kakao.svg" alt="카카오 로그인" className="w-5 h-5" />
      카카오 로그인
    </button>
  );
};

export { KakaoLogin };
