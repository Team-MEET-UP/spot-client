import Button from "@/shared/ui/Button";
import { useSetPlace } from "../hooks";

interface PlaceButtonProps {
  eventId: string;
  placeId: string;
  isChanged: boolean;
  isConfirmed: boolean;
}
export const PlaceButton = ({ eventId, placeId, isChanged, isConfirmed }: PlaceButtonProps) => {
  const { mutate, isPending } = useSetPlace();

  const handleClick = () => {
    mutate({ placeId, eventId });
  };

  return (
    <div
      className="px-5 pt-4 pb-5 w-full fixed bottom-0 max-w-[600px] z-[100]"
      style={{ background: "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 20%)" }}>
      <Button disabled={!isChanged || isPending} onClick={handleClick}>
        {isConfirmed ? (isChanged ? "모임장소 바꾸기" : "이미 선택한 장소에요") : "여기에서 만나기"}
      </Button>
    </div>
  );
};
