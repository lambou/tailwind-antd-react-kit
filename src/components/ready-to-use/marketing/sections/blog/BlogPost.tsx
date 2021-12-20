import clsx from "clsx";
import React from "react";
import Flex from "../../../../disposition/Flex";
import BlogPostTag, { BlogPostTagProps } from "./BlogPostTag";

export type BlogPostProps = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * Element font-size
   *
   * @default "large"
   */
  size?: "large" | "medium" | "small";

  /**
   * Force default sizing when using React component instead of string as preTitle, title or subTitle value.
   * Use false when you want to customize everything.
   *
   * @default true
   */
  forceDefaultSizing?: boolean;

  /**
   * Post tag props
   */
  tagProps?: BlogPostTagProps;

  /**
   * Post tags
   */
  tags?: React.ReactNode;

  /**
   * Post title
   */
  title?: React.ReactNode;

  /**
   * Post description
   */
  description?: React.ReactNode;

  /**
   * Post footer, author or any other information
   */
  footer?: React.ReactNode;

  /**
   * Textual content class
   */
  contentClass?: string;

  /**
   * Padding
   * when the value is `true`, the tailwind class `p-4` will be applied
   */
  padding?: boolean | string;

  /**
   * Rounded
   * when the value is `true`, the tailwind class `rounded-lg` will be applied
   */
  rounded?: boolean | string;

  /**
   * Bordered
   * when the value is `true`, the tailwind class `border` will be applied
   *
   * @default false
   */
  bordered?: boolean | string;

  /**
   * Shadow
   * when the value is `true`, the tailwind class `shadow-md` will be applied
   *
   * @default false
   */
  shadow?: boolean | string;

  /**
   * Image
   *
   * @default undefined
   */
  image?: string | React.ReactNode;

  /**
   * Image container height. value of `height` css property
   * @default `100px`
   */
  imageHeight?: string | number;

  /**
   * Image container style
   * @default undefined
   */
  imageContainerStyle?: React.CSSProperties;

  /**
   * Image overlay
   * @default false
   */
  imageOverlay?: boolean;

  /**
   * Image overlay style
   * @default undefined
   */
  imageOverlayStyle?: React.CSSProperties;

  /**
   * Hide overflow
   *
   * @default `true`
   */
  overflowHidden?: boolean;
};

const BlogPost = React.forwardRef<any, BlogPostProps>((props, ref) => {
  // explode props
  const {
    size,
    forceDefaultSizing,
    tags,
    tagProps,
    title,
    description,
    footer,
    contentClass,
    rounded,
    padding,
    bordered,
    shadow,
    image,
    imageHeight,
    imageContainerStyle,
    imageOverlay,
    imageOverlayStyle,
    overflowHidden,

    /**
     * Native props
     */
    className,
    ...restProps
  } = props;
  return (
    <div
      ref={ref}
      className={clsx([
        className,
        "flex flex-col",
        typeof bordered === "string" ? bordered : undefined,
        typeof shadow === "string" ? shadow : undefined,
        typeof padding === "string" ? padding : undefined,
        {
          "overflow-hidden": overflowHidden === true,
          border: bordered === true,
          "rounded-lg": rounded === true,
          "shadow-xl": shadow === true,
          "p-4": padding === true,
        },
      ])}
      {...restProps}
    >
      {(() => {
        // explode image container props
        const {
          backgroundImage,
          backgroundSize,
          height,
          ...restImageContainerStyle
        } = imageContainerStyle ?? {};
        return (
          <Flex
            direction="row"
            wrap="nowrap"
            items="stretch"
            justify="center"
            className={clsx(["relative overflow-hidden"])}
            style={{
              height: height ?? imageHeight,
              backgroundImage:
                backgroundImage ??
                (typeof image === "string" ? `url(${image})` : undefined),
              backgroundSize: backgroundSize ?? "cover",
              ...restImageContainerStyle,
            }}
          >
            {typeof image !== "string" && image}

            {imageOverlay === true && (
              <div
                className={clsx([
                  "absolute w-full h-full",
                  {
                    "bg-primary-500 bg-opacity-25":
                      imageOverlayStyle === undefined,
                  },
                ])}
                style={imageOverlayStyle}
              ></div>
            )}
          </Flex>
        );
      })()}

      <Flex direction="column" items="start" className={clsx([contentClass])}>
        <Flex inline direction="row" wrap="wrap" className={clsx(["gap-1.5"])}>
          {typeof tags === "string" ? (
            <BlogPostTag {...(tagProps ?? {})}>{tags}</BlogPostTag>
          ) : (
            <></>
          )}
          {Array.isArray(tags) ? (
            tags.map((tag, index) =>
              typeof tag === "string" ? (
                <BlogPostTag key={index} {...(tagProps ?? {})}>
                  {tag}
                </BlogPostTag>
              ) : (
                { tag }
              )
            )
          ) : (
            <></>
          )}
        </Flex>
        {typeof title === "string" ? (
          <div
            className={clsx([
              "font-bold text-lg",
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
        )}

        {typeof description === "string" ? (
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
        )}

        {footer}
      </Flex>
    </div>
  );
});

BlogPost.defaultProps = {
  size: "large",
  forceDefaultSizing: true,
  tagProps: undefined,
  tags: undefined,
  title: undefined,
  description: undefined,
  footer: undefined,
  padding: false,
  rounded: false,
  bordered: false,
  shadow: false,
  image: undefined,
  imageHeight: undefined,
  imageContainerStyle: undefined,
  imageOverlay: undefined,
  imageOverlayStyle: undefined,
  overflowHidden: true,
};

export default BlogPost;
