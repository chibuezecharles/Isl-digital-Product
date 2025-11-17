import { useSearchParams } from "react-router-dom";
import PrequalificationForm from "./PrequalificationForm";
import OxygenForm from "./OxygenForm";

export default function Prequalification() {
  const [searchParams] = useSearchParams();
  const step = searchParams.get("step");

  return (
    <div className="my-10 p-4">
      <div className="flex flex-col justify-center items-center">
        {step === "prequalify" && <OxygenForm />}
        {step === "prequalification" && <PrequalificationForm />}
      </div>
    </div>
  );
}
