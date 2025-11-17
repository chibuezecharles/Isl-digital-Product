import { X } from "lucide-react";
import CustomModal from "../ui/CustomModal";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "../ui/Select";
import { useState } from "react";
import { Button } from "../ui/Button";
import { useNavigate } from "react-router-dom";

interface EmploymentModalProp {
  openEmploymentModal: boolean;
  setOpenEmploymentModal: () => void;
}

export default function EmploymentModal({
  openEmploymentModal,
  setOpenEmploymentModal,
}: EmploymentModalProp) {
  const navigate = useNavigate();
  const [employed, setEmployment] = useState("");

  const handleContinue = () => {
    setOpenEmploymentModal();
    if (employed === "Yes") {
      navigate("/onboarding/prequalification?step=prequalification");
    } else if (employed === "No") {
      navigate("/onboarding/prequalification?step=prequalify");
    }
  };

  return (
    <CustomModal isOpen={openEmploymentModal} onClose={setOpenEmploymentModal}>
      <div className="w-full lg:w-1/2 m-auto px-4 lg:px-8 py-6 bg-white rounded-xl relative">
        <div className="overflow-y-auto">
          <h3 className="text-2xl font-semibold mb-7">Employment Status</h3>
          <button
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            onClick={() => navigate(-1)}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <Select value={employed} onValueChange={setEmployment}>
          <SelectGroup>
            <SelectLabel>Are you employed?</SelectLabel>
            <SelectTrigger variant="outline" className="w-full">
              <SelectValue placeholder="-- Select --" />
            </SelectTrigger>
            <SelectContent>
              {["Yes", "No"].map((opt) => (
                <SelectItem key={opt} value={opt}>
                  {opt}
                </SelectItem>
              ))}
            </SelectContent>
          </SelectGroup>
        </Select>

        <div className="flex gap-2 mt-4">
          <Button variant="outline" onClick={() => navigate(-1)}>
            Cancel
          </Button>
          <Button disabled={!employed} onClick={handleContinue}>
            Continue
          </Button>
        </div>
      </div>
    </CustomModal>
  );
}
