import useInputOTP from "./hooks/useInputOtp";

interface InputOTPProps {
  length?: number;
  errorMessage?: string;
  onChangeOTP?: (otp: string) => void;
}

export default function InputOTP({
  length = 6,
  errorMessage,
  onChangeOTP,
}: InputOTPProps) {
  const {
    otp,
    inputRefs,
    handleChange,
    handleKeyDown,
    handleDisabled,
    handlePaste,
  } = useInputOTP({ length, onChangeOTP });

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="flex justify-between w-full max-w-md mx-auto gap-2 sm:gap-3 md:gap-4">
        {otp.map((data: string, index: number) => (
          <input
            key={index}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={data}
            disabled={handleDisabled(index)}
            onChange={(e) => handleChange(e.target, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={handlePaste}
            className="
              w-full
              aspect-square
              text-center
              text-2xl
              font-medium
              border
              border-border
              rounded-lg
              bg-input-bg
              text-text-ii
              focus:outline-none
              focus:border-primary
              focus:ring-2
              focus:ring-primary/20
              transition-all
              hover:bg-gray-50
              hover:border-primary/50
              disabled:opacity-50
              disabled:cursor-not-allowed
              sm:text-3xl
            "
          />
        ))}
      </div>

      {errorMessage && (
        <p className="text-sm text-red-500 text-center mt-1">{errorMessage}</p>
      )}
    </div>
  );
}
