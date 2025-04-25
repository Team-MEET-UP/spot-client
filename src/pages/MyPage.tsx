import Banner from "@/features/my/ui/Banner";
import Empty from "@/features/my/ui/Empty";
import Header from "@/features/my/ui/Header";
import List from "@/features/my/ui/List";
import { mockListData } from "@/shared/model";

const MyPage = () => {
  const length = 1; // 임시 ui 구현을 위한 작업!

  return (
    <div className="flex flex-col px-5 gap-2">
      <Header profileImg="https://github.com/shadcn.png" />
      <Banner />
      <span className="mt-4 py-3 text-lg font-bold">참여한 모임</span>
      {length > 0 ? (
        <div>
          {mockListData.map((data, index) => (
            <List key={index} {...data} />
          ))}
        </div>
      ) : (
        <Empty />
      )}
    </div>
  );
};

export default MyPage;
