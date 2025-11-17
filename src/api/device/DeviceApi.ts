import { AxiosResponse } from "axios";
import { PaginatedResponse } from "../interfaces/global";
import QueryBuilder from "@/utils/QueryBuilder";
import { api } from "@/config/axiosConfig";

interface DeviceParams {
  page: number;
  pageSize: number;
  Filter?: string;
}

export type DeviceTypes = {
  id: number;
  deviceName: string;
  description: string;
  specs: string;
  deviceCount: number;
  created: string;
  deviceCategoryId: number;
  scoreMin: number;
  scoreMax: number;
  modified: string;
  mainPhoto: string;
  photoGallery: string;
  deviceRam: string;
  screenSize: string;
  storage: string;
  battery: string;
  osUi: string;
  sim: string;
  weight: string;
  dimension: string;
  netw: string;
  display: string;
  camera: string;
  chipset: string;
  usb: string;
  bluetooth: string;
  wlan: string;
  sensors: string;
  isActive: boolean;
  serviceProvider: string;
  fullPriceNaira: number;
  deviceCategory: string | null;
  devices: string | null;
};

class DeviceApi {
  private readonly url: string;

  constructor() {
    this.url = "DeviceType";
  }

  async getAllDevices(
    params: DeviceParams
  ): Promise<PaginatedResponse<DeviceTypes>> {
    const query = new QueryBuilder(`${this.url}`)
      .set("pageNumber", params.page)
      .set("pageSize", params.pageSize)
      .set("Filter", params.Filter)
      .build();

    const response: AxiosResponse<PaginatedResponse<DeviceTypes>> =
      await api.get(query);
    return response.data;
  }
}

export default new DeviceApi();
