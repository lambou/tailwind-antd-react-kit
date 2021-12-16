import clsx from "clsx";
import React from "react";
import { Flex } from "../../../..";

export type FeatureItemIconLeftProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "title"
> & {
  /**
   * Icon size
   * @default `large`
   */
  size?: "large" | "medium" | "small";

  /**
   * Feature title
   */
  title?: React.ReactNode;

  /**
   * Feature description
   */
  description?: React.ReactNode;

  /**
   * Icon component
   */
  icon?: React.ReactNode;

  /**
   * Force default sizing when using React component instead of string as preTitle, title or subTitle value.
   * Use false when you want to customize everything.
   *
   * @default true
   */
  forceDefaultSizing?: boolean;

  /**
   * Gap between horizontal elements
   * @default `gap-3`
   */
  horizontalGapClass?: string;

  /**
   * Gap between vertical elements
   * @default `gap-1`
   */
  verticalGapClass?: string;
};

const FeatureItemIconLeft = React.forwardRef<any, FeatureItemIconLeftProps>(
  (props, ref) => {
    // destructuring props
    const {
      size,
      title,
      description,
      icon,
      forceDefaultSizing,
      horizontalGapClass,
      verticalGapClass,
      className,
      ...restProps
    } = props;
    return (
      <div
        className={clsx([
          className,
          horizontalGapClass,
          "flex flex-row items-start",
        ])}
        {...restProps}
      >
        {icon}
        <Flex
          items="start"
          direction="column"
          className={clsx([verticalGapClass, "leading-3"])}
        >
          {title !== undefined ? (
            (function () {
              return typeof title === "string" ? (
                <div
                  className={clsx([
                    "font-medium leading-none",
                    {
                      "text-lg": size === "large",
                      "text-base": size === "medium",
                      "text-sm": size === "small",
                    },
                  ])}
                >
                  {title}
                </div>
              ) : forceDefaultSizing === true ? (
                <div
                  className={clsx([
                    "leading-none",
                    {
                      "text-lg": size === "large",
                      "text-base": size === "medium",
                      "text-sm": size === "small",
                    },
                  ])}
                >
                  {title}
                </div>
              ) : (
                title
              );
            })()
          ) : (
            <></>
          )}
          {description !== undefined ? (
            (function () {
              return typeof description === "string" ? (
                <div
                  className={clsx([
                    "max-w-sm",
                    {
                      "text-base": size === "large",
                      "text-sm": size === "medium" || size === "small",
                    },
                  ])}
                >
                  {description}
                </div>
              ) : forceDefaultSizing === true ? (
                <div
                  className={clsx([
                    {
                      "text-base": size === "large",
                      "text-sm": size === "medium",
                      "text-xs": size === "small",
                    },
                  ])}
                >
                  {description}
                </div>
              ) : (
                description
              );
            })()
          ) : (
            <></>
          )}
        </Flex>
      </div>
    );
  }
);

FeatureItemIconLeft.defaultProps = {
  size: "large",
  title: undefined,
  description: undefined,
  icon: undefined,
  forceDefaultSizing: true,
  horizontalGapClass: "gap-3",
  verticalGapClass: "gap-1",
};

export default FeatureItemIconLeft;
