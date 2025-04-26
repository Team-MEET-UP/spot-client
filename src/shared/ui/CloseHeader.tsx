import { useNavigate } from "react-router-dom";

const CloseHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="w-full px-5 py-3 flex justify-end">
      <button
        onClick={() => {
          navigate(-1);
        }}>
        <img src="/icon/close.svg" alt="close" />
      </button>
    </header>
  );
};

export default CloseHeader;
