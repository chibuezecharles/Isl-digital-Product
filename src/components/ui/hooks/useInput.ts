import { useRef } from "react";

export default function useInput() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputContainerClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return { inputRef, handleInputContainerClick };
}
