import React, { useEffect, useState } from "react";
import { Button } from "antd";
import {
  WarningOutlined,
  LeftOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import clsx from "clsx";
import Spin, { SpinProps } from "antd/lib/spin";
import { ButtonProps } from "antd/lib/button";
import { IError } from "../../interfaces";

export type ErrorWrapperProps = React.HTMLAttributes<HTMLDivElement> & {
  errors: IError[];
  loading?: boolean;
  spinProps?: Omit<SpinProps, "spinning">;
  mode?: "replace" | "overlay";
  overlayClassName?: string;
  refreshButtonText?: React.ReactNode;
  goToHomePageButtonText?: React.ReactNode;
  renderError?: (errors: IError[]) => React.ReactNode;
  customize?: ErrorWrapperCustom;
};

export type ErrorWrapperCustom = Partial<{
  warningIcon: React.ReactNode;
  warningIconClass: string;
  warningIconStype: React.CSSProperties;
  titleClass: string;
  buttonProps: Partial<Omit<ButtonProps, "onClick">>;
}>;

const ErrorWrapper = React.forwardRef<HTMLDivElement, ErrorWrapperProps>(
  (props, ref) => {
    // explode props
    const {
      errors,
      renderError,
      className,
      overlayClassName,
      loading,
      spinProps,
      mode,
      refreshButtonText,
      goToHomePageButtonText,
      style,
      customize,
      ...propsRest
    } = props;

    // error message ref
    const [
      errorContainerDiv,
      setErrorContainerDiv,
    ] = useState<HTMLDivElement | null>(null);

    // button props
    const {
      icon: buttonIcon,
      className: buttonClassName,
      type: buttonType,
      ...restButtonProps
    } = customize?.buttonProps ?? {};

    // explode style
    const { backdropFilter, ...styleRest } = style ?? {};

    const [internalErrors, setInternalErrors] = useState(errors);

    function getMessage(error: IError) {
      if (error.message) {
        return error.message;
      } else {
        if (error.httpError?.response) {
          return "The application encountered a problem during processing. Please refresh the page.";
        } else {
          return "Check your internet connection please.";
        }
      }
    }

    function isInternetAccessProblem(values: IError[]) {
      let found = false;
      for (const error of values) {
        if (error.httpError) {
          if (error.httpError?.response) {
            return false;
          } else {
            found = true;
            break;
          }
        }
      }
      return found;
    }

    useEffect(() => {
      setInternalErrors(props.errors);
    }, [props.errors]);

    return errors.length !== 0 ? (
      <Spin spinning={loading} {...spinProps}>
        <div
          style={{
            minHeight: `${
              errorContainerDiv?.offsetHeight
                ? `${errorContainerDiv?.offsetHeight}px`
                : "auto"
            }`,
          }}
          className="relative flex items-center justify-center overflow-y-auto"
        >
          <div
            ref={ref}
            className={clsx([
              "flex items-center justify-center flex-col w-full h-full",
              mode === "overlay"
                ? ["absolute bg-white bg-opacity-75", overlayClassName].join(
                    " "
                  )
                : "",
            ])}
            style={{
              backdropFilter:
                backdropFilter ?? mode === "overlay"
                  ? "blur(2.5px)"
                  : undefined,
              ...styleRest,
            }}
            {...propsRest}
          >
            <div
              className={clsx([
                className,
                "flex items-center justify-center p-8",
              ])}
              ref={(instance) => {
                setErrorContainerDiv(instance);
              }}
            >
              {renderError ? (
                renderError(internalErrors)
              ) : (
                <div className="flex flex-col items-center justify-center relative">
                  {customize?.warningIcon ?? (
                    <WarningOutlined
                      className={customize?.warningIconClass ?? "text-red-500"}
                      style={
                        customize?.warningIconStype ?? { fontSize: "4rem" }
                      }
                    />
                  )}
                  <div className="text-2xl font-bold text-red-500">
                    {isInternetAccessProblem(errors)
                      ? "No internet access"
                      : "Something went wrong!"}
                  </div>

                  {internalErrors.map((error, index) => {
                    return (
                      <div
                        key={index}
                        id={index.toString()}
                        className="flex items-center flex-col"
                      >
                        <div className="text-lg py-3">{getMessage(error)}</div>
                        {error.refreshCallback ? (
                          <Button
                            icon={buttonIcon ?? <ReloadOutlined />}
                            onClick={() => {
                              // call refresh callback
                              if (error.reloadPage === true) {
                                window.location.reload();
                              } else {
                                if (error.refreshCallback)
                                  error.refreshCallback();
                              }
                            }}
                            className={
                              buttonClassName ??
                              "inline-flex items-center justify-center"
                            }
                            type={buttonType}
                            {...restButtonProps}
                          >
                            {refreshButtonText ?? "Refresh"}
                          </Button>
                        ) : error.type === "INTERNAL" ? (
                          <Link to="/">
                            <Button
                              icon={buttonIcon ?? <LeftOutlined />}
                              onClick={() => {}}
                              className={
                                buttonClassName ??
                                "inline-flex items-center justify-center"
                              }
                              type={buttonType}
                              {...restButtonProps}
                            >
                              {goToHomePageButtonText ?? "Back to home page"}
                            </Button>
                          </Link>
                        ) : (
                          <Button
                            icon={buttonIcon ?? <ReloadOutlined />}
                            onClick={() => {
                              window.location.reload();
                            }}
                            className={
                              buttonClassName ??
                              "inline-flex items-center justify-center"
                            }
                            type={buttonType}
                            {...restButtonProps}
                          >
                            {refreshButtonText ?? "Refresh"}
                          </Button>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {mode === "overlay" &&
            React.createElement(
              "div",
              {
                className: "pointer-events-none",
              },
              props.children
            )}
        </div>
      </Spin>
    ) : (
      <Spin spinning={loading} {...spinProps}>
        {props.children}
      </Spin>
    );
  }
);

ErrorWrapper.defaultProps = {
  mode: "replace",
  loading: false,
};

export default ErrorWrapper;
