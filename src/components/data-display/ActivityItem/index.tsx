import React from "react";
import clsx from "clsx";

export declare type ActivityItemProps = React.HTMLAttributes<HTMLDivElement> & {
  shadow?:
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "none"
    | "inner"
    | "outline"
    | boolean;
  rounded?: boolean | "sm" | "md" | "lg" | "full" | "none";
  contentClass?: string;
};

const ActivityItem: React.FC<ActivityItemProps> = React.forwardRef<
  HTMLDivElement,
  ActivityItemProps
>((props, ref) => {
  // deconstruct props
  const {
    className,
    shadow,
    rounded,
    contentClass,
    children,
    ...propsRest
  } = props;
  return (
    <div
      ref={ref}
      className={clsx([
        className,
        "py-1 relative flex items-center justify-center h-auto",
      ])}
      {...propsRest}
    >
      <div
        className="w-full border-gray-300 absolute"
        style={{ borderTopWidth: "1px" }}
      ></div>
      <span
        className={clsx([
          "bg-white p-2 relative",
          contentClass,
          typeof shadow === "boolean"
            ? shadow
              ? "shadow"
              : undefined
            : `shadow-${shadow}`,
          typeof rounded === "boolean"
            ? rounded
              ? "rounded"
              : undefined
            : `rounded-${rounded}`,
        ])}
      >
        {children}
      </span>
    </div>
  );
});

ActivityItem.defaultProps = {
  shadow: false,
  rounded: false,
};

export default ActivityItem;
