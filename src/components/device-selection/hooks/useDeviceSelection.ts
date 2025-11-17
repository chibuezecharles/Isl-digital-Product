import DeviceApi, { DeviceTypes } from "@/api/device/DeviceApi";

import { PaginatedResponse } from "@/api/interfaces/global";
import debounce from "@/utils/debounce";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function useDeviceSelection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [pageSize, setPageSize] = useState(
    Number(searchParams.get("pageSize") || 20)
  );
  const [page, setPage] = useState(Number(searchParams.get("page") || "1"));
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [selectedDevice, setSelectedDevice] = useState<any | null>(null);
  const [deviceDetailModal, setDeviceDetailModal] = useState(false);
  const [showEmploymentPrompt, setShowEmploymentPrompt] = useState(false);

  const handleSelect = (item: any) => {
    setSelectedDevice(item);
    setDeviceDetailModal(true);
  };
  const getDeviceQuery = useQuery<PaginatedResponse<DeviceTypes>>({
    queryKey: ["get_devices", search, pageSize, page],
    queryFn: () => DeviceApi.getAllDevices({ page, pageSize, Filter: search }),
  });

  const searchDevices = debounce((e) => {
    const value = e.target.value;
    const page = 1;
    setSearch(value);
    setPage(page);
    setSearchParams({ page: page.toString(), search: value });
  }, 1000);

  const handleSetCurrentPage = (page: number) => {
    setPage(page);
  };

  const handleSetPageSize = (pageSize: number) => {
    setPageSize(pageSize);
    // setPage(1);
  };

  const prevPage = () => {
    const paginationMeta = getDeviceQuery.data?.meta;
    if (!paginationMeta) return;

    if (paginationMeta.currentPage == 1) return;

    setPage(paginationMeta.currentPage - 1);
  };

  const nextPage = () => {
    const paginationMeta = getDeviceQuery.data?.meta;
    if (!paginationMeta) return;

    if (paginationMeta.currentPage == paginationMeta.totalPages) return;

    setPage(paginationMeta.currentPage + 1);
  };

  return {
    deviceList: getDeviceQuery?.data?.data,
    isDeviceListLoading: getDeviceQuery?.isLoading,
    paginationMeta: getDeviceQuery?.data?.meta,
    selectedDevice,
    setSelectedDevice,
    deviceDetailModal,
    setDeviceDetailModal,
    showEmploymentPrompt,
    setShowEmploymentPrompt,
    handleSelect,

    searchDevices,
    search,
    handleSetCurrentPage,
    nextPage,
    prevPage,
    handleSetPageSize,
  };
}
