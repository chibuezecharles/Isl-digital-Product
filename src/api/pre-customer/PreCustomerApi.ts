import { AxiosResponse } from "axios";
import QueryBuilder from "@/utils/QueryBuilder";
import { api } from "@/config/axiosConfig";
import { ApiResponse } from "../interfaces/global";

interface GetCustomerMsisdnParams {
  msisdn?: string;
}

export type GetCustomerMsisdnResponse = {
  status: boolean;
  message: string;
  partnerId: string;
  data: null;
};

export type PostCustomerMsisdnParams = {
  msisdn?: string;
  partnerId: string;
};

class PreCustomerApi {
  private readonly url: string;

  constructor() {
    this.url = "PreCustomer";
  }

  async getCustomerByMsisdn(
    params: GetCustomerMsisdnParams
  ): Promise<GetCustomerMsisdnResponse> {
    const query = new QueryBuilder(`${this.url}/FetchPrecustomerByMsisdn`)
      .set("msisdn", params.msisdn)
      .build();

    const response: AxiosResponse<GetCustomerMsisdnResponse> = await api.get(
      query
    );
    return response.data;
  }

  async postNewPreCustomer(
    body: PostCustomerMsisdnParams
  ): Promise<ApiResponse<GetCustomerMsisdnResponse>> {
    const response: AxiosResponse<ApiResponse<GetCustomerMsisdnResponse>> =
      await api.post(
        `${this.url}/add_with_msisdn_only?msisdn=${body?.msisdn}&partner_id=${body.partnerId}`,
        body
      );
    return response.data;
  }
}

export default new PreCustomerApi();
