import { useNavigate } from "react-router-dom";
import { Button } from "../ui/Button";
import InputOTP from "../ui/InputOtp";

export default function ValidateOtp() {
  const navigate = useNavigate();
  return (
    <div className="mt-10 p-4">
      <div className="flex justify-center items-center">
        <div className="w-full md:w-2/4 rounded-xl bg-white shadow-md py-5 mb-10 px-2 md:p-8">
          <h1 className="text-2xl font-semibold text-primary-100">
            Validate Otp
          </h1>
          <p className="mb-5">
            Enter the Otp that was sent to your email or phone number to proceed
          </p>

          <div className="space-y-5">
            <InputOTP />
          </div>

          <p className="cursor-pointer underline mt-3 text-primary-100">
            Resend Otp
          </p>

          <div className="flex justify-center">
            <Button
              className="w-full mt-7 md:w-1/3"
              size="lg"
              onClick={() => navigate("/onboarding/liveness-check")}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
