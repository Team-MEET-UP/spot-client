interface UserCardProps {
  isTransit: boolean;
  name: string;
  startStation: string;
  totalTime: number;
  onClick?: () => void;
}

export const UserCard = ({ isTransit, name, startStation, totalTime, onClick }: UserCardProps) => {
  return (
    <div className="flex justify-between items-center" onClick={onClick}>
      <div className="py-[8px] cursor-pointer">
        <div className="flex gap-1 text-lg font-bold text-gray-80">
          <img src={isTransit ? "/icon/transfer.svg" : "/icon/car.svg"} alt="transfer" />
          <span>{totalTime}분</span>
        </div>
        <p className="text-gray-40 text-sm">
          {name} · {startStation}
        </p>
      </div>
      <button>
        <img src="/icon/rightArrow.svg" alt="arrow" />
      </button>
    </div>
  );
};
