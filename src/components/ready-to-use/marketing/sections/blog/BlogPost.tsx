import React from "react";

export type BlogPostProps = React.HTMLAttributes<HTMLDivElement> & {};

const BlogPost = React.forwardRef<any, BlogPostProps>((props, ref) => {
  // explode props
  const { className, ...restProps } = props;
  return <div ref={ref} {...restProps}></div>;
});

BlogPost.defaultProps = {};

export default BlogPost;
