import {
  ClipboardEvent,
  KeyboardEvent,
  useState,
  useRef,
  useEffect,
} from "react";

interface UseInputOTPProps {
  length?: number;
  onChangeOTP?: (otp: string) => void;
}

export default function useInputOTP({
  length = 6,
  onChangeOTP,
}: UseInputOTPProps) {
  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);
    onChangeOTP?.(newOtp.join(""));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace") {
      e.preventDefault();
      const newOtp = [...otp];
      const lastIndex = length - 1;
      console.log("ii", index, lastIndex);
      newOtp[index !== 0 && otp[index] === "" ? index - 1 : index] = "";
      setOtp(newOtp);
      onChangeOTP?.(newOtp.join(""));
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleDisabled = (index: number) => {
    const firstEmptyIndex = otp.findIndex((value) => value === "");
    if (firstEmptyIndex === -1 && index === otp.length - 1) {
      return false;
    }

    return index !== firstEmptyIndex;
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text");
    const sanitizedData = pastedData.replace(/\D/g, "").slice(0, length);

    if (sanitizedData.length === length) {
      const newOTP = [...otp];
      for (let i = 0; i < length; i++) {
        newOTP[i] = sanitizedData[i];
      }
      setOtp(newOTP);
      onChangeOTP?.(sanitizedData);
      inputRefs.current[length - 1]?.focus();
    }
  };

  useEffect(() => {
    // Focus the first input when the component mounts
    inputRefs.current[0]?.focus();
  }, []);

  useEffect(() => {
    const firstEmptyIndex = otp.findIndex((value) => value === "");
    if (firstEmptyIndex === -1 && inputRefs.current) {
      inputRefs.current.forEach((inputRef) => inputRef?.blur());
      return;
    }

    inputRefs.current[firstEmptyIndex]?.focus();
  }, [otp]);

  return {
    otp,
    inputRefs,
    handleChange,
    handleKeyDown,
    handleDisabled,
    handlePaste,
  };
}
