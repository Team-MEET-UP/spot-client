import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { addMember, createEvent } from "../service";
import { FormattedData } from "../model";
import { setCookie } from "@/shared/utils";

export const useCreateStartPoint = (eventIdParam: string | null) => {
  const navigate = useNavigate();
  const eventIdExists = !!eventIdParam;

  const { mutate: createEventMutate } = useMutation({
    mutationFn: createEvent,
    onSuccess: response => {
      const { eventId, startPointId } = response.data;

      // 쿠키 저장
      setCookie("eventId", eventId, { path: "/", maxAge: 86400 });
      setCookie("startPointId", startPointId, { path: "/", maxAge: 86400 });

      // 페이지 이동
      navigate(`/mapview?eventId=${eventId}`);
    },
    onError: error => {
      console.error("모임 생성 실패", error);
    },
  });

  const { mutate: addMemberMutate } = useMutation({
    mutationFn: ({ payload, eventId }: { payload: FormattedData; eventId: string }) => addMember(payload, eventId),
    onSuccess: response => {
      setCookie("startPointId", response.data.startPointId, { path: "/", maxAge: 86400 });
      navigate(`/mapview?eventId=${eventIdParam}`);
    },
    onError: error => {
      console.error("멤버 추가 실패", error);
    },
  });

  const handleSubmit = (data: FormattedData) => {
    if (eventIdExists && eventIdParam) {
      addMemberMutate({ payload: data, eventId: eventIdParam });
    } else {
      createEventMutate(data);
    }
  };

  return {
    handleSubmit,
  };
};
