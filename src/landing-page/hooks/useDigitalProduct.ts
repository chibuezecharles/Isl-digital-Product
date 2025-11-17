import { useMutation } from "@tanstack/react-query";
import DigitalProductApi, {
  WaitingListPayload,
//   WaitingListResponse,
} from "@/api/landing-page/DigitalProductApi";

export default function useDigitalProduct() {
  const waitingListMutation = useMutation({
    mutationFn: ({ email }: WaitingListPayload) =>
      DigitalProductApi.addToWaitingList({ email }),
  });

  const waitingListHandler = async (payload: WaitingListPayload) => {
    return await waitingListMutation.mutateAsync(payload); 
  };

  return {
    waitingListHandler,
    isLoading: waitingListMutation.isPending,
  };
}

