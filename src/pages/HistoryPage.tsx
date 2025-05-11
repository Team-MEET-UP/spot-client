import { useUserInfo } from "@/features/history/service";
import { Banner, Empty, Header, GroupCard, PolicyBottomSheet } from "@/features/history/ui";
import { mockListData } from "@/shared/model";
import { useUserStore } from "@/shared/stores";
import { useEffect, useState } from "react";

const HistoryPage = () => {
  const { data, isLoading, isError } = useUserInfo();
  const [isPolicy, setIsPolicy] = useState(false);
  const { profileImageUrl } = useUserStore();
  const length = 1; // 임시 ui 구현을 위한 작업!

  const onClose = () => {
    setIsPolicy(false);
  };

  useEffect(() => {
    if (data) {
      useUserStore.setState({
        nickname: data.nickname,
        profileImageUrl: data.profileImageUrl,
      });
      setIsPolicy(!data.personalInfoAgreement);
    }
  }, [data]);

  if (isLoading) return <p>로딩 중...</p>;
  if (isError) return <p>유저 정보를 가져오는 데 실패했습니다.</p>;

  return (
    <div className="flex flex-col h-screen-dvh">
      <div className="flex flex-col px-5 gap-2">
        <Header profileImg={profileImageUrl} />
        <Banner />
        <span className="mt-4 py-3 text-lg font-bold">나의 모임</span>
      </div>
      {length > 0 ? (
        <div>
          {mockListData.map(data => (
            <GroupCard key={data.id} {...data} />
          ))}
        </div>
      ) : (
        <Empty />
      )}
      {isPolicy && <PolicyBottomSheet onClose={onClose} />}
    </div>
  );
};

export default HistoryPage;
