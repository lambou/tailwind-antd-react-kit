import React from "react";
import CustomSpace from "../components/disposition/FlexSpace";

/**
 * Format error message from https
 * @param error error to display
 * @param fallbackMessage fallback message
 */
export const formatErrorMessage = (
  error?: string | string[],
  fallbackMessage?: React.ReactNode
): React.ReactNode | undefined => {
  if (error) {
    if (typeof error === "string") {
      return <div>{error}</div>;
    } else if (Array.isArray(error)) {
      return (
        <CustomSpace direction="vertical" marginY>
          {error.map((value, index) => (
            <div key={index}>{value}</div>
          ))}
        </CustomSpace>
      );
    } else {
      return fallbackMessage;
    }
  }
  return undefined;
};
