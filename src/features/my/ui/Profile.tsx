import { useUserStore } from "@/shared/stores";
import { useState } from "react";
import Edit from "@/assets/icon/edit.svg";
import DefaultImg from "@/assets/icon/default-profile.svg";
import { useChangeName } from "../hooks";

export const Profile = () => {
  const { nickname, profileImageUrl, email } = useUserStore();
  const [isEditting, setIsEditting] = useState(false);
  const [newNickname, setNewNickname] = useState(nickname || "");

  const { mutate } = useChangeName();

  const handleEditting = () => {
    setIsEditting(true);
  };

  const handleSubmit = () => {
    if (newNickname && newNickname !== nickname) {
      mutate(newNickname);
    }
    setIsEditting(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="flex py-3 gap-3 items-center w-full">
      <img src={profileImageUrl || DefaultImg} alt="profileImg" className="w-16 h-16 rounded-full" />
      <div className="flex flex-col gap-1 w-full">
        {isEditting ? (
          <div className="flex w-full gap-2 items-end">
            <input
              type="text"
              className="rounded-none w-full border-b-gray-90 border-b outline-none text-lg font-semibold text-gray-90"
              value={newNickname}
              onChange={e => setNewNickname(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
            />
            <button
              className="w-[41px] h-6 px-2 py-[1px] flex justify-center whitespace-nowrap items-center rounded-lg sub-10 bg-sub-10 text-sub-sub text-sm font-semibold"
              onClick={handleSubmit}>
              변경
            </button>
          </div>
        ) : (
          <div className="flex gap-1 items-center">
            <span className="text-lg font-semibold text-gray-90">{nickname}</span>
            <button onClick={handleEditting}>
              <img src={Edit} alt="edit" className="w-5 h-5" />
            </button>
          </div>
        )}
        <p className="text-sm font-medium text-gray-40">{email}</p>
      </div>
    </div>
  );
};
