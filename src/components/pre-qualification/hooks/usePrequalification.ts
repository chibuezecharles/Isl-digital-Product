import FinancierApi, {
  BankResponses,
  DataResponse,
  FinancierResponse,
} from "@/api/financier/FinancierApi";
import { PaginatedResponse } from "@/api/interfaces/global";
import PreCustomerApi, {
  PostCustomerMsisdnParams,
} from "@/api/pre-customer/PreCustomerApi";
import { useMutation, useQuery } from "@tanstack/react-query";

export default function usePrequalification() {
  const getBankQuery = useQuery<PaginatedResponse<BankResponses>>({
    queryKey: ["get_banks"],
    queryFn: () => FinancierApi.getAllBanks(),
  });
  const getEmploymentListQuery = useQuery<PaginatedResponse<DataResponse>>({
    queryKey: ["get_employments"],
    queryFn: () => FinancierApi.getEmploymentStatus(),
  });
  const getFinancierQuery = useQuery<FinancierResponse[]>({
    queryKey: ["get_financier"],
    queryFn: () => FinancierApi.getAllFinancier(),
  });

  const preCustomerMutation = useMutation({
    mutationFn: ({ msisdn, partnerId }: PostCustomerMsisdnParams) =>
      PreCustomerApi.postNewPreCustomer({
        msisdn,
        partnerId,
      }),
  });

  const preCustomerMutationHandler = async (data: any) => {
    const { msisdn, partnerId } = data;
    await preCustomerMutation.mutateAsync(
      { msisdn, partnerId },
      {
        onSuccess: () => {},
        onError: () => {},
      }
    );
  };
  console.log(preCustomerMutationHandler);

  return {
    bankList: getBankQuery?.data?.data,
    isLoadingBank: getBankQuery?.isLoading,
    employmentList: getEmploymentListQuery?.data?.data,
    isLoadingEmploymentList: getEmploymentListQuery?.isLoading,
    financierList: getFinancierQuery?.data,
    isLoadingFinancier: getFinancierQuery?.isLoading,
  };
}
