import { useNavigate } from "react-router-dom";

const BackHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="w-full px-5 py-3">
      <button
        onClick={() => {
          navigate(-1);
        }}>
        <img src="/icon/back.svg" alt="back" />
      </button>
    </header>
  );
};

export default BackHeader;
