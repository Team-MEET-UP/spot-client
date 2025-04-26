import BackHeader from "@/shared/ui/BackHeader";
import CloseHeader from "@/shared/ui/CloseHeader";
import PlainHeader from "@/shared/ui/PlainHeader";

const DetailPage = () => {
  return (
    <div>
      디테일
      <PlainHeader title="멤버 추가" url="/" />
      <BackHeader />
      <CloseHeader />
    </div>
  );
};

export default DetailPage;
