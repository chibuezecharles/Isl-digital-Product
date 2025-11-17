import { AxiosResponse } from "axios";
import { PaginatedResponse } from "../interfaces/global";
import QueryBuilder from "@/utils/QueryBuilder";
import { financierApi } from "@/config/axiosConfig";

export type BankResponses = {
  id: number;
  name: string;
  sortCode: string;
};

export type DataResponse = {
  id: number;
  name: string;
};

export type FinancierResponse = {
  id: number;
  name: string;
  active: string | null;
  partnerId: number;
};

class FinancierApi {
  private readonly url: string;

  constructor() {
    this.url = "financier";
  }

  async getAllFinancier(): Promise<FinancierResponse[]> {
    const query = new QueryBuilder(`${this.url}/Oxygen/get-financier`).build();

    const response: AxiosResponse<FinancierResponse[]> = await financierApi.get(
      query
    );
    return response.data;
  }

  async getAllBanks(): Promise<PaginatedResponse<BankResponses>> {
    const query = new QueryBuilder(`${this.url}/Oxygen/get-AllBank`).build();

    const response: AxiosResponse<PaginatedResponse<BankResponses>> =
      await financierApi.get(query);
    return response.data;
  }

  async getEmploymentStatus(): Promise<PaginatedResponse<DataResponse>> {
    const query = new QueryBuilder(
      `${this.url}/Oxygen/get-employment-status-options`
    ).build();

    const response: AxiosResponse<PaginatedResponse<DataResponse>> =
      await financierApi.get(query);
    return response.data;
  }
}

export default new FinancierApi();
