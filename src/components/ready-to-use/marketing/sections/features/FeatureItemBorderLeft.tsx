import clsx from "clsx";
import React from "react";

export type FeatureItemBorderLeftProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "title"
> & {
  /**
   * Icon size
   * @default `large`
   */
  size?: "large" | "medium" | "small";

  /**
   * Component to be added before the icon
   */
  before?: React.ReactNode;

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
   * Center components
   * @default false
   */
  centered?: boolean;

  /**
   * Force default sizing when using React component instead of string as preTitle, title or subTitle value.
   * Use false when you want to customize everything.
   *
   * @default true
   */
  forceDefaultSizing?: boolean;

  /**
   * Gap between elements
   * @default `gap-2`
   */
  gapClass?: string;

  /**
   * Border color class. This calss is applied to all components with border.
   */
  borderColorClass?: string;

  /**
   * Padding horizontal tailwind class
   * @default `px-4`
   */
  paddingHorizontalClass?: string;

  /**
   * Padding vertical tailwind class
   * @default `py-4`
   */
  paddingVerticalClass?: string;

  /**
   * Component to be added after the desciption
   */
  after?: React.ReactNode;
};

const FeatureItemBorderLeft = React.forwardRef<any, FeatureItemBorderLeftProps>(
  (props, ref) => {
    // destructuring props
    const {
      size,
      before,
      title,
      description,
      icon,
      centered,
      forceDefaultSizing,
      gapClass,
      borderColorClass,
      paddingHorizontalClass,
      paddingVerticalClass,
      after,
      className,
      ...restProps
    } = props;
    return (
      <div
        className={clsx([
          className,
          gapClass,
          borderColorClass,
          paddingVerticalClass,
          "flex flex-col border-l",
          {
            "items-center text-center": centered === true,
          },
        ])}
        {...restProps}
      >
        {before}
        {icon !== undefined ? (
          <div className={clsx(["w-full", paddingHorizontalClass])}>{icon}</div>
        ) : (
          <></>
        )}
        {title !== undefined ? (
          <div
            className={clsx([
              "border-l-8 py-1",
              borderColorClass,
              paddingHorizontalClass,
            ])}
          >
            {(function () {
              return typeof title === "string" ? (
                <div
                  className={clsx([
                    "leading-6 font-medium",
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
            })()}
          </div>
        ) : (
          <></>
        )}
        {description !== undefined ? (
          <div className={clsx([paddingHorizontalClass])}>
            {(function () {
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
            })()}
          </div>
        ) : (
          <></>
        )}
        {after}
      </div>
    );
  }
);

FeatureItemBorderLeft.defaultProps = {
  size: "large",
  after: undefined,
  before: undefined,
  title: undefined,
  description: undefined,
  icon: undefined,
  centered: false,
  forceDefaultSizing: true,
  gapClass: "gap-2",
  paddingHorizontalClass: "px-4",
  paddingVerticalClass: "py-4",
};

export default FeatureItemBorderLeft;
