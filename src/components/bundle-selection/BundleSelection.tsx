import { deviceData } from "@/lib/deviceData";
import {
  Battery,
  ChevronDown,
  Cpu,
  HardDrive,
  Monitor,
  Wifi,
  X,
} from "lucide-react";
import { Button } from "../ui/Button";
import { useState } from "react";
import CustomModal from "../ui/CustomModal";
import { useNavigate } from "react-router-dom";

export default function BundleSelection() {
  const navigate = useNavigate();
  const deviceSelected = deviceData?.[0];
  const [open, setOpen] = useState<number | null>(null);
  const [bundleConfirmationModal, setBundleConfirmationModal] = useState(false);

  return (
    <div className="mt-10 p-4 flex justify-center items-center">
      <div className="w-full md:w-3/4 rounded-xl bg-white shadow-md py-5 px-4 md:p-8">
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <div className="flex-1 min-w-[200px]">
            <h1 className="text-2xl font-semibold text-primary-100">
              Device Bundle
            </h1>
            <p className="text-gray-600">Select a Payment bundle plan</p>
          </div>

          <Button className="ml-auto" size="sm">
            Choose a New Device
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex items-center justify-center overflow-hidden">
            <img
              src={deviceSelected?.mainPhoto}
              alt={deviceSelected?.deviceName}
              className="h-full w-full p-4 transition-transform duration-300 hover:scale-105"
            />
          </div>

          <div className="p-4 flex flex-col">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {deviceSelected?.deviceName}
              </h3>
              <p className="text-sm text-gray-500 mb-2">
                {deviceSelected?.specs}
              </p>
              <p className="text-base font-bold text-blue-700 mb-3">
                ₦{deviceSelected?.fullPriceNaira.toLocaleString()}
              </p>
            </div>

            {/* Key Specs */}
            <div className="text-sm text-gray-600 space-y-2">
              <div className="flex items-center gap-2">
                <HardDrive className="w-4 h-4 text-gray-500" />
                <span>
                  <strong>Storage:</strong> {deviceSelected?.storage}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Battery className="w-4 h-4 text-gray-500" />
                <span>
                  <strong>Battery:</strong> {deviceSelected?.battery}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-gray-500" />
                <span>
                  <strong>Chipset:</strong> {deviceSelected?.chipset}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Monitor className="w-4 h-4 text-gray-500" />
                <span>
                  <strong>Display:</strong> {deviceSelected?.display}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Wifi className="w-4 h-4 text-gray-500" />
                <span>
                  <strong>Connectivity:</strong>{" "}
                  {deviceSelected?.bluetooth === "YES" ? "Bluetooth, " : ""}
                  {deviceSelected?.wlan === "YES" ? "Wi-Fi" : ""}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span>
                  <strong>Warranty Coverage:</strong> OEM 24 Months Warranty
                  Cover
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span>
                  <strong>Screen Replacement:</strong> Free Screen Replacement
                  (One Time)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span>
                  <strong>Phone Replacement:</strong> One Time(25% Customer: 75%
                  Intelligra)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span>
                  <strong>Custom Lock:</strong> Custom Lock Security Data
                  Projection, in acase of theft
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div>
            <h1 className="text-2xl font-semibold text-primary-100">
              Available Bundles
            </h1>
            <p className="text-gray-600">Select a Payment bundle plan</p>
          </div>

          <div className="mt-5 text-sm space-y-4">
            {["3", "6", "12", "18", "24"].map((item: string, index: number) => (
              <div key={index} className="border rounded-lg">
                <div
                  className="flex justify-between items-center py-2 px-4 cursor-pointer bg-gray-50 transition"
                  onClick={() => setOpen(open === index ? null : index)}
                >
                  <p className="font-medium text-gray-800">
                    Bundle {item} Months Plan
                  </p>
                  <ChevronDown
                    className={`transition-transform duration-200 ${
                      open === index ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </div>

                {/* Content */}
                {open === index && (
                  <div className="px-4 pb-4 animate-fadeIn mt-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="flex flex-col gap-3 text-gray-700">
                        <span>
                          Total Repayment: <strong>N123,456</strong>
                        </span>
                        <span>
                          Monthly Payment: <strong>41,477</strong>
                        </span>
                        <span>
                          Down Payment: <strong>91,721</strong>
                        </span>
                        <span>
                          Duration Months: <strong>3</strong>
                        </span>
                      </div>
                      <div className="flex flex-col gap-3 text-gray-700">
                        <span>
                          Voice Minutes: <strong>25 mins</strong>
                        </span>
                        <span>
                          Data Quantity: <strong>1</strong>
                        </span>
                        <span>
                          SMS Quantity: <strong></strong>
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-end pt-2">
                      <Button
                        onClick={() => setBundleConfirmationModal(true)}
                        size="sm"
                        className="px-4 py-1"
                      >
                        Select
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <CustomModal
          isOpen={bundleConfirmationModal}
          onClose={() => setBundleConfirmationModal(false)}
        >
          <div className="w-full lg:w-1/2 m-auto px-4 lg:px-8 py-6 space-y-6 bg-white rounded-xl relative">
            <div className="overflow-y-auto">
              <h3 className="text-2xl font-semibold mb-7">
                Selected Bundled Details
              </h3>
              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                onClick={() => setBundleConfirmationModal(false)}
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 gap-3">
                <div className="flex flex-col gap-3 text-gray-700">
                  <span>
                    Total Repayment: <strong>N123,456</strong>
                  </span>
                  <span>
                    Monthly Payment: <strong>41,477</strong>
                  </span>
                  <span>
                    Down Payment: <strong>91,721</strong>
                  </span>
                  <span>
                    Duration Months: <strong>3</strong>
                  </span>
                </div>
                <div className="flex flex-col gap-3 text-gray-700">
                  <span>
                    Voice Minutes: <strong>25 mins</strong>
                  </span>
                  <span>
                    Data Quantity: <strong>1</strong>
                  </span>
                  <span>
                    SMS Quantity: <strong></strong>
                  </span>
                </div>
              </div>

              <div className="flex space-x-4 mt-5">
                <Button
                  onClick={() => setBundleConfirmationModal(false)}
                  className="px-5 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
                >
                  Cancel
                </Button>

                <Button onClick={() => navigate("/onboarding/select-bundle")}>
                  Continue
                </Button>
              </div>
            </div>
          </div>
        </CustomModal>
      </div>
    </div>
  );
}
