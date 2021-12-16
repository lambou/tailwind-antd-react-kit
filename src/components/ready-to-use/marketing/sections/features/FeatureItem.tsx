import clsx from "clsx";
import React from "react";

export type FeatureItemProps = Omit<
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
};

const FeatureItem = React.forwardRef<any, FeatureItemProps>((props, ref) => {
  // destructuring props
  const {
    size,
    title,
    description,
    icon,
    centered,
    forceDefaultSizing,
    gapClass,
    className,
    ...restProps
  } = props;
  return (
    <div
      className={clsx([
        className,
        gapClass,
        "flex flex-col",
        {
          "items-center text-center": centered === true,
        },
      ])}
      {...restProps}
    >
      {icon}
      {title !== undefined ? (
        (function () {
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
    </div>
  );
});

FeatureItem.defaultProps = {
  size: "large",
  title: undefined,
  description: undefined,
  icon: undefined,
  centered: false,
  forceDefaultSizing: true,
  gapClass: "gap-2",
};

export default FeatureItem;
