import Logout from "@/features/my/ui/Logout";
import Menu from "@/features/my/ui/Menu";
import Profile from "@/features/my/ui/Profile";
import PlainHeader from "@/shared/ui/PlainHeader";

const MyPage = () => {
  return (
    <div className="flex flex-col">
      <PlainHeader url="/history" title="내 정보" />
      <div className="flex flex-col px-5 gap-2 mb-8">
        <Profile />
        <Logout />
      </div>
      <div className="w-full h-2 bg-gray-5" />
      <Menu />
    </div>
  );
};

export default MyPage;
