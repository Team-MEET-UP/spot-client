interface LocationCardProps {
  name: string;
  address: string;
  onClick?: () => void;
}

const LocationCard = ({ name, address, onClick }: LocationCardProps) => {
  return (
    <div onClick={onClick} className="flex flex-col w-full hover:bg-gray-5 p-[8px] rounded-xl">
      <p className="text-gray-60 text-md">{name}</p>
      <p className="text-gray-40 text-sm font-regular">{address}</p>
    </div>
  );
};

export { LocationCard };
