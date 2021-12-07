import clsx from "clsx";
import React from "react";

export type HeroCardTextualBodyProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "title"
> & {
  /**
   * Field for the default `title` attribute
   */
  htmlTitle?: string;

  /**
   * Newsletter body text
   *
   * tailwind class: `text-base uppercase`
   */
  preTitle?: React.ReactNode;

  /**
   * Newsletter form title
   *
   * tailwind class: `text-3xl tracking-tight font-extrabold sm:text-4xl md:text-5xl`
   */
  title?: React.ReactNode;

  /**
   * Newsletter body text
   *
   * tailwind class: `text-base leading-relaxed`
   */
  body?: React.ReactNode;

  /**
   * Gap class
   *
   * @default `gap-2`
   */
  gapClass?: string;

  /**
   * Centered items
   * @default false
   */
  centered?: boolean;

  /**
   * Padding
   * when the value is `true`, the tailwind class `p-4` will be applied
   */
  padding?: boolean | string;
};

const HeroCardTextualBody = React.forwardRef<any, HeroCardTextualBodyProps>(
  (props, ref) => {
    // explode props
    const {
      htmlTitle,
      preTitle,
      title,
      body,
      gapClass,
      padding,
      centered,

      // native props
      className,
      ...restProps
    } = props;
    return (
      <div
        ref={ref}
        title={htmlTitle}
        className={clsx([
          className,
          gapClass,
          typeof padding === "string" ? padding : undefined,
          "flex items-start flex-col",
          {
            "items-center text-center": centered === true,
            "p-4": padding === true,
          },
        ])}
        {...restProps}
      >
        {preTitle &&
          (function () {
            switch (typeof preTitle) {
              case "string":
                return <div className="text-base uppercase">{preTitle}</div>;

              default:
                return preTitle;
            }
          })()}
        {title &&
          (function () {
            switch (typeof title) {
              case "string":
                return (
                  <div className="text-3xl tracking-tight font-extrabold sm:text-4xl md:text-5xl">
                    {title}
                  </div>
                );

              default:
                return title;
            }
          })()}
        {body &&
          (function () {
            switch (typeof body) {
              case "string":
                return <div className="text-base leading-relaxed">{body}</div>;

              default:
                return body;
            }
          })()}
      </div>
    );
  }
);

HeroCardTextualBody.defaultProps = {
  htmlTitle: undefined,
  preTitle: undefined,
  title: undefined,
  body: undefined,
  padding: false,
  centered: undefined,
  gapClass: "gap-2",
};

export default HeroCardTextualBody;
