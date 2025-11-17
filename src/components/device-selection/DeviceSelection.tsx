import {
  CheckCircle2,
  Battery,
  HardDrive,
  Cpu,
  Monitor,
  Wifi,
  X,
  Smartphone,
  Search,
  Fullscreen,
} from "lucide-react";
import { Button } from "../ui/Button";
import CustomModal from "../ui/CustomModal";
import InputField from "../ui/Input";
import EmploymentModal from "./EmploymentModal";
import useDeviceSelection from "./hooks/useDeviceSelection";
import PageLoader from "../shared/PageLoader";
import TablePagination from "../shared/TablePagination";

export default function DeviceSelection() {
  const {
    deviceList,
    isDeviceListLoading,
    paginationMeta,
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
  } = useDeviceSelection();

  if (isDeviceListLoading) {
    return <PageLoader />;
  }

  return (
    <div className="mt-10 p-6">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800 text-center">
        Available Devices
      </h2>

      <div className="w-full md:w-2/3 flex flex-col md:flex-row gap-2 mb-5">
        <div className="w-full">
          <InputField
            icon={<Search color="grey" />}
            placeholder="Search devices"
            defaultValue={search}
            onInput={searchDevices}
          />
        </div>
        <div>
          {/* <Button className="w-full md:w-fit" size="lg">
            Search
          </Button> */}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {deviceList?.map((item) => {
          const isSelected = selectedDevice === item.id;
          return (
            <div
              key={item.id}
              onClick={() => handleSelect(item)}
              className={`relative cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 border backdrop-blur-sm shadow-md 
                ${
                  isSelected
                    ? "border-blue-600 ring-2 ring-blue-300 shadow-lg"
                    : "border-gray-200 hover:shadow-md hover:border-blue-300"
                }
              `}
            >
              {/* Image */}
              <div className="aspect-[4/3] bg-gray-50 flex items-center justify-center overflow-hidden">
                <img
                  src={item.mainPhoto}
                  alt={item.deviceName}
                  className="object-contain h-full w-full p-4 transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.deviceName}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">{item.specs}</p>
                  <p className="text-base font-bold text-blue-700 mb-3">
                    ₦{item.fullPriceNaira.toLocaleString()}
                  </p>
                </div>

                {/* Key Specs */}
                <div className="text-sm text-gray-600 space-y-2">
                  <div className="flex items-center gap-2">
                    <HardDrive className="w-4 h-4 text-gray-500" />
                    <span>
                      <strong>Storage:</strong> {item.storage}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Battery className="w-4 h-4 text-gray-500" />
                    <span>
                      <strong>Battery:</strong> {item.battery}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-gray-500" />
                    <span>
                      <strong>Chipset:</strong> {item.chipset}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Monitor className="w-4 h-4 text-gray-500" />
                    <span>
                      <strong>Display:</strong> {item.display}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wifi className="w-4 h-4 text-gray-500" />
                    <span>
                      <strong>Connectivity:</strong> {item?.netw}
                    </span>
                  </div>
                </div>
              </div>

              {/* Selection Indicator */}
              {isSelected && (
                <div className="absolute top-3 right-3 text-blue-600 bg-white rounded-full shadow-md p-1">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {paginationMeta && (
        <TablePagination
          currentPage={paginationMeta.currentPage}
          totalPages={paginationMeta.totalPages}
          setCurrentPage={handleSetCurrentPage}
          setPageSize={handleSetPageSize}
          pageSize={paginationMeta.pageSize}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      )}

      <CustomModal
        isOpen={deviceDetailModal}
        onClose={() => setDeviceDetailModal(false)}
      >
        <div className="w-full lg:w-1/2 m-auto px-4 lg:px-8 py-6 space-y-6 bg-white rounded-xl relative">
          <div className="overflow-y-auto">
            <h3 className="text-2xl font-semibold mb-7">Device Details</h3>
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              onClick={() => setDeviceDetailModal(false)}
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex justify-center mb-4">
              <img
                src={selectedDevice?.mainPhoto}
                alt={selectedDevice?.deviceName}
                className="w-48 h-48 object-contain"
              />
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 text-center">
              {selectedDevice?.deviceName}
            </h3>
            <h3 className="text-2xl font-semibold text-blue-700 text-center mb-2">
              ₦{selectedDevice?.fullPriceNaira.toLocaleString()}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-700">
              <div className="flex gap-2">
                <HardDrive className="w-4 h-4 flex-shrink-0 text-gray-500" />
                <span>
                  <strong>Storage:</strong> {selectedDevice?.storage}
                </span>
              </div>
              <div className="flex gap-2">
                <Battery className="w-4 h-4 flex-shrink-0 text-gray-500" />
                <span>
                  <strong>Battery:</strong> {selectedDevice?.battery}
                </span>
              </div>
              <div className="flex gap-2">
                <Cpu className="w-4 h-4 flex-shrink-0 text-gray-500" />
                <span>
                  <strong>Chipset:</strong> {selectedDevice?.chipset}
                </span>
              </div>
              <div className="flex gap-2">
                <Monitor className="w-4 h-4 flex-shrink-0 text-gray-500" />
                <span>
                  <strong>Display:</strong> {selectedDevice?.display}
                </span>
              </div>
              <div className="flex gap-2">
                <Wifi className="w-4 h-4 flex-shrink-0 text-gray-500" />
                <span>
                  <strong>Connectivity:</strong> {selectedDevice?.netw}
                </span>
              </div>
              <div className="flex gap-2">
                <Smartphone className="w-4 h-4 flex-shrink-0 text-gray-500" />
                <span>
                  <strong>OS:</strong> {selectedDevice?.osUi}
                </span>
              </div>
              <div className="flex gap-2">
                <Fullscreen className="w-4 h-4 flex-shrink-0 text-gray-500" />
                <span>
                  <strong>Screen:</strong> {selectedDevice?.screenSize}
                </span>
              </div>
            </div>

            <div className="mt-5 border-t pt-3 text-center text-gray-600 text-sm space-y-1">
              <p>
                <strong>Camera:</strong> {selectedDevice?.camera}
              </p>
              <p>
                <strong>Dimensions:</strong> {selectedDevice?.dimension}
              </p>
              <p>
                <strong>Bluetooth:</strong> {selectedDevice?.bluetooth}
              </p>
              <p>
                <strong>Weight:</strong> {selectedDevice?.weight}
              </p>
              <p>
                <strong>SIM:</strong> {selectedDevice?.sim}
              </p>
              <p>
                <strong>USB:</strong> {selectedDevice?.usb}
              </p>
            </div>

            <div className="mt-6 text-center">
              <Button
                onClick={() => {
                  setSelectedDevice(selectedDevice);
                  setShowEmploymentPrompt(true);
                  // navigate("/onboarding/prequalification");
                }}
              >
                Select this device
              </Button>
            </div>
          </div>
        </div>
      </CustomModal>

      <EmploymentModal
        openEmploymentModal={showEmploymentPrompt}
        setOpenEmploymentModal={() => setShowEmploymentPrompt(false)}
      />
    </div>
  );
}
