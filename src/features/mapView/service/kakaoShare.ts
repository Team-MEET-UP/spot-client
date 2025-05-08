interface ShareOptions {
  title: string;
  description: string;
  imageUrl: string;
  findLink: string;
  mapViewLink: string;
}

// 카카오 SDK 초기화
if (window.Kakao) {
  const kakao = window.Kakao;
  if (!kakao.isInitialized()) {
    kakao.init(import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY);
  }
}

export const shareToKakao = ({ title, description, imageUrl, findLink, mapViewLink }: ShareOptions) => {
  if (!window.Kakao || !window.Kakao.isInitialized()) {
    console.error("Kakao SDK is not initialized");
    return;
  }

  window.Kakao.Link.sendDefault({
    objectType: "feed",
    content: {
      title,
      description,
      imageUrl,
      link: {
        webUrl: findLink,
        mobileWebUrl: findLink,
      },
    },
    buttons: [
      {
        title: "내 출발지 입력하기",
        link: {
          webUrl: findLink,
          mobileWebUrl: findLink,
        },
      },
      {
        title: "우리 모임의 중간지점은?",
        link: {
          webUrl: mapViewLink,
          mobileWebUrl: mapViewLink,
        },
      },
    ],
  });
};
