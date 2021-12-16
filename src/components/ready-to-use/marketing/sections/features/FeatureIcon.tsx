import clsx from "clsx";
import React from "react";

export type FeatureIconProps = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * Icon size
   * @default `medium`
   */
  size?: "large" | "medium" | "small";

  /**
   * Padding based on width when enabled
   * @default false
   */
  padding?: boolean | string;

  /**
   * Container rounded
   * @default true
   */
  rounded?: boolean;

  /**
   * Icon component
   */
  icon?: React.ReactNode;
};

const FeatureIcon = React.forwardRef<any, FeatureIconProps>((props, ref) => {
  // destructuring props
  const { size, padding, rounded, icon, className, ...restProps } = props;
  return (
    <div
      ref={ref}
      {...restProps}
      className={clsx([
        className,
        typeof padding === "string" ? padding : undefined,
        "inline-flex items-center justify-center",
        {
          "rounded-md": rounded === true,
          "w-16 h-16 text-3xl": padding === true && size === "large",
          "w-12 h-12 text-xl": padding === true && size === "medium",
          "w-8 h-8 text-lg": padding === true && size === "small",
        },
      ])}
    >
      {icon}
    </div>
  );
});

FeatureIcon.defaultProps = {
  size: "medium",
  padding: false,
  rounded: true,
  icon: undefined,
};

export default FeatureIcon;
