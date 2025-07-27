interface KakaoLoginProps {
  to: string;
  eventId?: string;
}

export const kakaoLogin = ({ to, eventId }: KakaoLoginProps) => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const kakaoAuthUrl = `${baseUrl}/oauth2/authorization/kakao?to=${to}&eventId=${eventId}`;
  window.location.href = kakaoAuthUrl;
};
