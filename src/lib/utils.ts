import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import moment from "moment";

import {
  FieldValues,
  FieldPath,
  FieldPathValue,
  UseFormSetValue,
  UseFormClearErrors,
} from "react-hook-form";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function getEditorPageTitle(action: string, category: string) {
  return `${capitalize(action)}${action === "add" ? " New " : " "}${capitalize(
    category
  )}`;
}

// Generate random hash string 7 characters long
export const randomHash = () =>
  (Math.random().toString(36) + Math.random().toString(36)).substring(2, 9);

export const onChangeValidate = <
  TFieldValues extends FieldValues,
  K extends FieldPath<TFieldValues>
>(
  key: K,
  value: FieldPathValue<TFieldValues, K>,
  setValue: UseFormSetValue<TFieldValues>,
  clearErrors: UseFormClearErrors<TFieldValues>
): void => {
  setValue(key, value);
  if (value) {
    clearErrors(key);
  }
};

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });
};

// Utility to convert date and time to ISO 8601
export const convertToISODate = (
  dateInput: string,
  timeStr: string
): string => {
  console.log("convertToISODate - Input:", { dateInput, timeStr }); // Debug
  if (!dateInput || !timeStr) {
    console.error("convertToISODate - Missing date or time");
    return "";
  }
  const date = moment(dateInput, "DD/MM/YYYY", true);
  if (!date.isValid()) {
    console.error("convertToISODate - Invalid date:", dateInput);
    return "";
  }
  const [hours, minutes] = timeStr.split(":");
  date.set({
    hour: parseInt(hours),
    minute: parseInt(minutes),
    second: 0,
    millisecond: 0,
  });
  const isoDate = date.toISOString();
  console.log("convertToISODate - Output:", isoDate); // Debug
  return isoDate;
};
