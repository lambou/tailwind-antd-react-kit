import clsx from "clsx";
import React from "react";

export type SectionTitleProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "title"
> & {
  /**
   * Default html `title` attribute
   */
  htmlTitle?: string;

  /**
   * Element font-size
   *
   * @default "large"
   */
  size?: "large" | "medium" | "small";

  /**
   * Icon
   */
  icon?: React.ReactNode;

  /**
   * Pre-title
   * Default tailwind class: `text-base font-semibold tracking-wide uppercase`
   */
  preTitle?: React.ReactNode;

  /**
   * Title
   * Default tailwind class: `text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl`
   */
  title?: React.ReactNode;

  /**
   * Sub-title
   * Default tailwind class: `max-w-2xl text-xl`
   */
  subTitle?: React.ReactNode;

  /**
   * Gap between elements
   * @default `gap-2`
   */
  gapClass?: string;

  /**
   * Center the content
   *
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
};

const SectionTitle = React.forwardRef<any, SectionTitleProps>((props, ref) => {
  // destructuring props
  const {
    icon,
    htmlTitle,
    size,
    preTitle,
    title,
    subTitle,
    gapClass,
    centered,
    forceDefaultSizing,
    className,
    ...restProps
  } = props;
  return (
    <div
      ref={ref}
      title={htmlTitle}
      {...restProps}
      className={clsx([
        className,
        gapClass,
        "flex flex-col",
        {
          "items-center text-center": centered,
        },
      ])}
    >
      {icon}
      {preTitle !== undefined ? (
        (function () {
          return typeof preTitle === "string" ? (
            <div
              className={clsx([
                "font-semibold tracking-wide uppercase",
                {
                  "text-base": size === "large",
                  "text-sm": size === "medium",
                  "text-xs": size === "small",
                },
              ])}
            >
              {preTitle}
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
              {preTitle}
            </div>
          ) : (
            preTitle
          );
        })()
      ) : (
        <></>
      )}
      {title !== undefined ? (
        (function () {
          return typeof title === "string" ? (
            <div
              className={clsx([
                "leading-8 font-extrabold tracking-tight",
                {
                  "text-3xl sm:text-4xl": size === "large",
                  "text-2xl sm:text-3xl": size === "medium",
                  "text-xl sm:text-2xl": size === "small",
                },
              ])}
            >
              {title}
            </div>
          ) : forceDefaultSizing === true ? (
            <div
              className={clsx([
                {
                  "text-3xl sm:text-4xl": size === "large",
                  "text-2xl sm:text-3xl": size === "medium",
                  "text-xl sm:text-2xl": size === "small",
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
      {subTitle !== undefined ? (
        (function () {
          return typeof subTitle === "string" ? (
            <div
              className={clsx([
                "max-w-2xl",
                {
                  "text-xl": size === "large",
                  "text-lg": size === "medium",
                  "text-base": size === "small",
                },
              ])}
            >
              {subTitle}
            </div>
          ) : forceDefaultSizing === true ? (
            <div
              className={clsx([
                {
                  "text-xl": size === "large",
                  "text-lg": size === "medium",
                  "text-base": size === "small",
                },
              ])}
            >
              {subTitle}
            </div>
          ) : (
            subTitle
          );
        })()
      ) : (
        <></>
      )}
    </div>
  );
});

SectionTitle.defaultProps = {
  htmlTitle: undefined,
  size: "large",
  icon: undefined,
  preTitle: undefined,
  title: undefined,
  subTitle: undefined,
  gapClass: "gap-2",
  centered: false,
  forceDefaultSizing: true,
};

export default SectionTitle;
