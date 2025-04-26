import Banner from "@/features/history/ui/Banner";
import Empty from "@/features/history/ui/Empty";
import Header from "@/features/history/ui/Header";
import GroupCard from "@/features/history/ui/GroupCard";
import { mockListData } from "@/shared/model";

const HistoryPage = () => {
  const length = 1; // 임시 ui 구현을 위한 작업!

  return (
    <div className="flex flex-col px-5 gap-2">
      <Header profileImg="https://github.com/shadcn.png" />
      <Banner />
      <span className="mt-4 py-3 text-lg font-bold">참여한 모임</span>
      {length > 0 ? (
        <div>
          {mockListData.map(data => (
            <GroupCard key={data.id} {...data} />
          ))}
        </div>
      ) : (
        <Empty />
      )}
    </div>
  );
};

export default HistoryPage;
