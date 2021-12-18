import Avatar from "antd/lib/avatar/avatar";
import clsx from "clsx";
import React from "react";
import { Flex } from "../../../..";

export type BlogPostAuthorProps = React.HTMLAttributes<HTMLDivElement> & {
  layout: "horizontal" | "vertical";
  size: "large" | "medium" | "small";
  profileImage?: React.ReactNode;
  profileImageShape?: "circle" | "square";
  title?: React.ReactNode;
  description?: React.ReactNode;
  gapClass?: string;
};

const BlogPostAuthor = React.forwardRef<any, BlogPostAuthorProps>(
  (props, ref) => {
    // explode props
    const {
      layout,
      size,
      profileImage,
      profileImageShape,
      title,
      description,
      gapClass,
      className,
      ...restProps
    } = props;
    return (
      <div
        ref={ref}
        {...restProps}
        className={clsx([className, "flex items-center", gapClass])}
      >
        {typeof profileImage === "string" ? (
          <Avatar
            src={profileImage}
            size={(function () {
              switch (size) {
                case "large":
                  return "large";
                case "medium":
                  return "default";
                case "small":
                  return "small";
              }
            })()}
            shape={profileImageShape}
          />
        ) : (
          profileImage
        )}
        <Flex
          className={clsx([
            "leading-tight",
            layout === "horizontal" && gapClass !== undefined
              ? gapClass
              : undefined,
          ])}
          items={(function () {
            switch (layout) {
              case "horizontal":
                return "center";
              case "vertical":
                return "start";
            }
          })()}
          direction={(function () {
            switch (layout) {
              case "horizontal":
                return "row";
              case "vertical":
                return "column";
            }
          })()}
        >
          {typeof title === "string" ? (
            <div className={clsx(["font-semibold"])}>{title}</div>
          ) : (
            title
          )}
          {typeof description === "string" ? (
            <div
              className={clsx([
                {
                  "font-semibold": layout === "horizontal",
                },
              ])}
            >
              {description}
            </div>
          ) : (
            description
          )}
        </Flex>
      </div>
    );
  }
);

BlogPostAuthor.defaultProps = {
  layout: "vertical",
  size: "medium",
  profileImage: undefined,
  profileImageShape: "circle",
  title: undefined,
  description: undefined,
  gapClass: "gap-2",
};

export default BlogPostAuthor;
