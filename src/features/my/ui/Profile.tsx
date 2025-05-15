import { useUserStore } from "@/shared/stores";
import { useState } from "react";
import Edit from "@/assets/icon/edit.svg";

//@TODO 백 연동 시 이름, 프로필사진, 이메일 수정
export const Profile = () => {
  const { nickname, profileImageUrl, email } = useUserStore(state => ({
    nickname: state.nickname,
    profileImageUrl: state.profileImageUrl,
    email: state.email,
  }));
  const setNickname = useUserStore(state => state.setNickname);
  const [isEditting, setIsEditting] = useState(false);

  const handleEditting = () => {
    setIsEditting(true);
  };

  const handleBlur = () => {
    setIsEditting(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setIsEditting(false);
    }
  };

  return (
    <div className="flex py-3 gap-3 items-center">
      <img src={profileImageUrl} alt="profileImg" className="w-16 h-16 rounded-full" />
      <div className="flex flex-col gap-1 w-full">
        {isEditting ? (
          <div className="flex w-full gap-2 items-center">
            <input
              type="text"
              className="rounded-none w-full border-b-gray-90 border-b outline-none text-lg font-semibold text-gray-90"
              value={nickname}
              onChange={e => setNickname(e.target.value)}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              autoFocus
            />
            <button
              className="px-[1px] py-2 text-center rounded-lg bg-sub-10 text-sub-sub text-sm font-semibold"
              onClick={handleBlur}>
              변경
            </button>
          </div>
        ) : (
          <div className="flex gap-1 items-center">
            <span className="text-lg font-semibold text-gray-90">{nickname}</span>
            <button onClick={handleEditting}>
              <img src={Edit} alt="edit" />
            </button>
          </div>
        )}
        <p className="text-sm font-medium text-gray-40">{email}</p>
      </div>
    </div>
  );
};
