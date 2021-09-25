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
  /**
   * Errors list
   */
  errors: IError[];

  /**
   * Toggle loading
   */
  loading?: boolean;

  /**
   * Loading spin props
   */
  spinProps?: Omit<SpinProps, "spinning">;

  /**
   * Wrapping mode
   */
  mode?: "replace" | "overlay";

  /**
   * Custom errors rendering
   */
  renderError?: (errors: IError[]) => React.ReactNode;

  /**
   * Customize error
   */
  customize?: ErrorWrapperCustom;

  /**
   * Action options
   */
  actionOptions?: ErrorWrapperActionOptions;

  /**
   * Overlay (when mode = overlay) className
   *
   * use `actionOptions.overlayClass` instead
   *
   * @deprecated
   */
  overlayClassName?: string;

  /**
   * Reload the page action button text
   *
   * use `actionOptions.defaultTexts.refreshButton` instead
   *
   * @deprecated
   */
  refreshButtonText?: React.ReactNode;

  /**
   * Goto home page action button text
   *
   * use `actionOptions.defaultTexts.gotToHomeButton` instead
   *
   * @deprecated
   */
  goToHomePageButtonText?: React.ReactNode;
};

export type ErrorWrapperActionOptions = {
  buttonProps?: Partial<Omit<ButtonProps, "onClick">>;
  actionType?: "goto_home_page" | "page_reload";
  homePageRoutePath?: string;
  defaultIcons?: {
    gotToHomeButton?: React.ReactNode;
    reloadPageButton?: React.ReactNode;
    refreshButton?: React.ReactNode;
  };
  defaultTexts?: {
    gotToHomeButton?: React.ReactNode;
    reloadPageButton?: React.ReactNode;
    refreshButton?: React.ReactNode;
  };
};

export type ErrorWrapperCustom = {
  /**
   * Icon on top of the error title
   */
  errorIcon?: (
    className: string,
    style: React.CSSProperties
  ) => React.ReactNode;

  /**
   * Applied only when `errorIcon` is not defined
   */
  errorIconClass?: string;

  /**
   * Applied only when `errorIcon` is not defined
   */
  errorIconStype?: React.CSSProperties;

  /**
   * Overlay class
   *
   * Applied only when `mode=overlay`
   */
  overlayClass?: string;

  /**
   * Error title class
   */
  titleClass?: string;

  /**
   * Warning icon
   *
   * use `errorIcon` instead
   *
   * @deprecated
   */
  warningIcon?: React.ReactNode;

  /**
   * Warning icon class
   *
   * use `errorIconClass` instead
   *
   * @deprecated
   */
  warningIconClass?: string;

  /**
   * Warning icon style
   *
   * use `errorIconStype` instead
   *
   * @deprecated
   */
  warningIconStype?: React.CSSProperties;

  /**
   * Action button options
   *
   * Use actionOptions.buttonProps instead
   *
   * @deprecated
   */
  buttonProps?: Partial<Omit<ButtonProps, "onClick">>;
};

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
      actionOptions,
      ...propsRest
    } = props;

    // error message ref
    const [
      errorContainerDiv,
      setErrorContainerDiv,
    ] = useState<HTMLDivElement | null>(null);

    // action button props
    const {
      icon: actionButtonIcon,
      className: actionButtonClassName,
      type: actionButtonType,
      ...restActionButtonProps
    } = actionOptions?.buttonProps ?? {};

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
                ? [
                    "absolute bg-white bg-opacity-75",
                    customize?.overlayClass,
                  ].join(" ")
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
                  {customize?.errorIcon?.(
                    customize?.errorIconClass ?? "text-red-500",
                    customize?.errorIconStype ?? {
                      fontSize: "4rem",
                    }
                  )}
                  <div
                    className={
                      customize?.titleClass ?? "text-2xl font-bold text-red-500"
                    }
                  >
                    {isInternetAccessProblem(errors)
                      ? "No internet access"
                      : "Something went wrong!"}
                  </div>

                  {internalErrors.map((error, index) => {
                    return (
                      <div
                        key={index}
                        id={index.toString()}
                        className="flex items-center flex-col gap-3"
                      >
                        <div className="text-lg">{getMessage(error)}</div>
                        {error.refreshCallback ? (
                          <Button
                            icon={
                              actionButtonIcon ??
                              actionOptions?.defaultIcons?.refreshButton
                            }
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
                              actionButtonClassName ??
                              "inline-flex items-center justify-center"
                            }
                            type={actionButtonType}
                            {...restActionButtonProps}
                          >
                            {actionOptions?.defaultTexts?.refreshButton}
                          </Button>
                        ) : actionOptions?.actionType === "goto_home_page" ? (
                          <Link to={actionOptions?.homePageRoutePath ?? "/"}>
                            <Button
                              icon={
                                actionButtonIcon ??
                                actionOptions?.defaultIcons?.gotToHomeButton
                              }
                              onClick={() => {}}
                              className={
                                actionButtonClassName ??
                                "inline-flex items-center justify-center"
                              }
                              type={actionButtonType}
                              {...restActionButtonProps}
                            >
                              {actionOptions?.defaultTexts?.gotToHomeButton}
                            </Button>
                          </Link>
                        ) : actionOptions?.actionType === "page_reload" ? (
                          <Button
                            icon={
                              actionButtonIcon ??
                              actionOptions?.defaultIcons?.reloadPageButton
                            }
                            onClick={() => {
                              window.location.reload();
                            }}
                            className={
                              actionButtonClassName ??
                              "inline-flex items-center justify-center"
                            }
                            type={actionButtonType}
                            {...restActionButtonProps}
                          >
                            {actionOptions?.defaultTexts?.reloadPageButton}
                          </Button>
                        ) : (
                          <></>
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
  customize: {
    errorIcon: (className, style) => {
      return <WarningOutlined className={className} style={style} />;
    },
  },
  actionOptions: {
    actionType: "goto_home_page",
    homePageRoutePath: "/",
    defaultIcons: {
      gotToHomeButton: <LeftOutlined />,
      refreshButton: <ReloadOutlined />,
      reloadPageButton: <ReloadOutlined />,
    },
    defaultTexts: {
      gotToHomeButton: "Goto home page",
      refreshButton: "Refresh",
      reloadPageButton: "Reload the page",
    },
  },
};

export default ErrorWrapper;
