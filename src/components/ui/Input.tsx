import { ReactElement, forwardRef, useImperativeHandle } from "react";
import classNames from "classnames";
import { Eye } from "lucide-react";
import { EyeOff } from "lucide-react";
import useInput from "./hooks/useInput";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: ReactElement;
  secureTextEntry?: boolean;
  labelStyle?: string;
  containerStyle?: string;
  inputStyle?: string;
  iconStyle?: string;
  containerSize?: "sm" | "md";
  showPasswordVisibilityIcon?: boolean;
  onTogglePasswordVisibility?: () => void;
  error?: string;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      label,
      icon,
      secureTextEntry = false,
      labelStyle = "",
      containerStyle = "",
      inputStyle = "",
      iconStyle = "",
      containerSize = "md",
      showPasswordVisibilityIcon = false,
      error,
      onTogglePasswordVisibility,
      ...props
    },
    ref
  ) => {
    const { inputRef, handleInputContainerClick } = useInput();
    // Expose the inputRef to the parent via the forwarded ref
    useImperativeHandle(
      ref,
      () => inputRef.current ?? ({} as HTMLInputElement),
      [inputRef]
    );

    return (
      <div className="w-full">
        {label && (
          <label
            className={`text-[#1E1E1E] text-[13px] font-medium mb-1 block ${labelStyle}`}
            htmlFor={props.id}
          >
            {label}
          </label>
        )}
        <div
          onClick={handleInputContainerClick}
          className={classNames(
            "bg-white flex items-center gap-2 rounded-lg border-2 border-[#F3EDED] [&:not(:disabled)]:hover:bg-white [&:not(:disabled)]:hover:border-[#F3EDED] focus-within:!bg-white focus-within:!border-primary-100 has-[input:disabled]:!bg-white has-[input:disabled]:!border-[#F3EDED]",
            containerSize === "sm" && "px-3 py-2",
            containerSize === "md" && "px-4 py-3",
            error &&
              "border-red-500 focus-within:border-red-500 focus-within:ring-red-500/20",
            props.disabled &&
              "bg-[#e4e5ef] hover:!bg-[#e4e5ef] cursor-not-allowed",
            containerStyle
          )}
        >
          {icon}
          <input
            id={props.id}
            ref={inputRef}
            type={secureTextEntry ? "password" : props.type || "text"}
            className={`flex-1 min-w-0 text-base text-[#171b31] font-medium text-left outline-none bg-white placeholder-[#b5b5c3] disabled:cursor-not-allowed ${inputStyle} autofill:bg-white`}
            {...props}
          />
          {showPasswordVisibilityIcon && (
            <button
              type="button"
              className="p-0"
              onClick={onTogglePasswordVisibility}
            >
              {secureTextEntry ? <Eye /> : <EyeOff size={20} color="#B2B2B2" />}
            </button>
          )}
        </div>
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
      </div>
    );
  }
);

InputField.displayName = "InputField";

export default InputField;
