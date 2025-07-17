interface KakaoLoginProps {
  to: string;
  eventId?: string;
}

export const kakaoLogin = ({ to, eventId }: KakaoLoginProps) => {
  const kakaoAuthUrl = `https://api-prod.pickspot.co.kr/oauth2/authorization/kakao?to=${to}&eventId=${eventId}`;
  window.location.href = kakaoAuthUrl;
};
