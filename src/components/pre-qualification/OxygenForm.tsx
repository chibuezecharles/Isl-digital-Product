import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "../ui/Select";
import InputField from "../ui/Input";
import { Button } from "../ui/Button";
import usePrequalification from "./hooks/usePrequalification";
import PageLoader from "../shared/PageLoader";

export default function OxygenForm() {
  const navigate = useNavigate();
  const [bank, setBank] = useState("");
  const [employmentStatus, setEmploymentStatus] = useState("");
  const [step, setStep] = useState(0);

  const { bankList, employmentList, isLoadingBank, isLoadingEmploymentList } =
    usePrequalification();

  if (isLoadingBank || isLoadingEmploymentList) {
    return <PageLoader />;
  }

  return (
    <div className="w-full md:w-3/4 lg:w-2/4 rounded-xl bg-white shadow-md py-5 px-2 md:p-8">
      <h1 className="text-2xl font-semibold text-primary-100 mb-5">
        Oxygen Customer
      </h1>

      {step === 0 && (
        <div className="space-y-5">
          <div>
            <Select value={bank} onValueChange={setBank}>
              <SelectGroup>
                <SelectLabel>Bank</SelectLabel>
                <SelectTrigger
                  variant="outline"
                  id="country"
                  className="w-full"
                >
                  <SelectValue placeholder="Select Bank" />
                </SelectTrigger>
                <SelectContent>
                  {bankList?.map((opt, index) => (
                    <SelectItem key={opt.name + index} value={String(opt.name)}>
                      {opt.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </SelectGroup>
            </Select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <InputField
                label="Account Number"
                placeholder="Enter Account Number"
              />
            </div>
            <div>
              <InputField label="BVN" placeholder="Enter BVN" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <InputField
                label="Email Address"
                placeholder="Enter Email Address"
              />
            </div>
            <div>
              <Select
                value={employmentStatus}
                onValueChange={setEmploymentStatus}
              >
                <SelectGroup>
                  <SelectLabel>Employment Status</SelectLabel>
                  <SelectTrigger
                    variant="outline"
                    id="country"
                    className="w-full"
                  >
                    <SelectValue placeholder="Select Employment Status" />
                  </SelectTrigger>
                  <SelectContent>
                    {employmentList?.map((opt) => (
                      <SelectItem key={opt.name} value={String(opt.name)}>
                        {opt.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </SelectGroup>
              </Select>
            </div>
          </div>
          <div>
            <Button
              className="w-full md:w-1/3"
              size="lg"
              onClick={() => setStep(1)}
            >
              Continue
            </Button>
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="space-y-5">
          <div>
            <InputField label="NIN" placeholder="Enter Your NIN" />
          </div>
          <div>
            <InputField
              label="Name of Employer"
              placeholder="Enter Name of Employer"
            />
          </div>

          <div>
            <InputField
              label="Salary Amount"
              placeholder="Enter Salary Amount"
            />
          </div>
          <div>
            <InputField
              label="Salary Date e.g 29"
              placeholder="Enter Salary Day"
            />
          </div>

          <div>
            <Button
              className="w-full md:w-1/3"
              size="lg"
              onClick={() => navigate("/onboarding/validate-otp")}
            >
              Continue
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
