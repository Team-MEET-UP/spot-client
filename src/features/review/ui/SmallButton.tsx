import { useNavigate } from "react-router-dom";

interface SmallButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isVisit: boolean;
  placeId: string;
}

export const SmallButton = ({ children, isVisit, placeId }: SmallButtonProps) => {
  const navigate = useNavigate();

  return (
    <button
      className={`w-full py-4 text-center text-md font-semibold rounded-xl ${isVisit ? "bg-gray-90 text-white" : "bg-gray-10 text-gray-60"}`}
      onClick={() => navigate(`/${isVisit ? "visited" : "notVisited"}/${placeId}`)}>
      {children}
    </button>
  );
};
