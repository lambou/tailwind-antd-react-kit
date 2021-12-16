import clsx from "clsx";
import React from "react";

export type FeatureIconProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: "large" | "medium" | "small";
  padding?: boolean | string;
  rounded?: boolean;
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
