import { AxiosResponse } from "axios";
import { notificationApi } from "@/config/axiosConfig";

export interface WaitingListPayload {
  email: string;
}

export interface WaitingListResponse {
  status: boolean;
  message: string;
}

class DigitalProductApi {
  private readonly url: string;

  constructor() {
    this.url = "Notification";
  }

  async addToWaitingList(
    body: WaitingListPayload
  ): Promise<WaitingListResponse> {
    const response: AxiosResponse<WaitingListResponse> = await notificationApi.post(
      `${this.url}/DigitalProductWaitingList`,
      body
    );
    return response.data;
  }
}

export default new DigitalProductApi();
