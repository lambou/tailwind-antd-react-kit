import clsx from "clsx";
import React from "react";

export type BlogPostTagProps = React.HTMLAttributes<HTMLSpanElement> & {
  padding?: boolean | string;
  rounded?: boolean | string;
  bordered?: boolean | string;
  shadow?: boolean | string;
};

const BlogPostTag = React.forwardRef<any, BlogPostTagProps>((props, ref) => {
  // explode props
  const {
    padding,
    rounded,
    bordered,
    shadow,
    className,
    children,
    ...restProps
  } = props;
  return (
    <span
      ref={ref}
      className={clsx([
        className,
        typeof padding === "string" ? padding : undefined,
        typeof rounded === "string" ? rounded : undefined,
        typeof bordered === "string" ? bordered : undefined,
        typeof shadow === "string" ? shadow : undefined,
        "font-medium",
        {
          "px-3 py-1": padding === true,
          "rounded-full": rounded === true,
          border: bordered === true,
          "shadow-sm": shadow === true,
        },
      ])}
      {...restProps}
    >
      {children}
    </span>
  );
});

BlogPostTag.defaultProps = {
  padding: false,
  rounded: false,
  bordered: false,
  shadow: false,
};

export default BlogPostTag;
