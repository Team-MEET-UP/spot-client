import { useNavigate } from "react-router-dom";

interface HeaderProps {
  profileImg: string;
}

export const Header = ({ profileImg }: HeaderProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/my");
  };

  return (
    <header className="flex justify-between items-center py-4">
      <img src="icon/logo.svg" alt="logo" className="h-6" />
      <button onClick={handleClick}>
        <img src={profileImg} alt="profileImg" className="w-8 h-8 rounded-full" />
      </button>
    </header>
  );
};
