interface HeaderProps {
  profileImg: string;
}

const Header = ({ profileImg }: HeaderProps) => {
  return (
    <header className="flex justify-between items-center py-4">
      <img src="icon/logo.svg" alt="logo" className="h-6" />
      <img src={profileImg} alt="프로필 이미지" className="w-8 h-8 rounded-full" />
    </header>
  );
};

export default Header;
