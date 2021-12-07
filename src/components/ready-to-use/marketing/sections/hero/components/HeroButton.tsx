import clsx from "clsx";
import React from "react";

export type HeroButtonProps = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * Default texts tailwind class
   */
  textColorsClass?: {
    /**
     * Default color of the button's text
     * @default undefined
     */
    default?: string;

    /**
     * Color of the button's text on mouse hover
     * @default undefined
     */
    hover?: string;
  };

  /**
   * Default background colors tailwind class
   */
  bgColorsClass?: {
    /**
     * Default background color of the button
     * @default undefined
     */
    default?: string;

    /**
     * On mouse hover background color class
     * @default undefined
     */
    hover?: string;
  };

  /**
   * Prefix
   * @default undefined
   */
  prefix?: React.ReactNode;

  /**
   * Suffix
   * @default undefined
   */
  suffix?: React.ReactNode;

  /**
   * Gap class
   *
   * @default `gap-2`
   */
  gapClass?: string;

  /**
   * Ignore default tailwind class
   *
   * @default false
   */
  ignoreDefaultClass?: boolean;
};

const HeroButton = React.forwardRef<any, HeroButtonProps>((props, ref) => {
  // explode props
  const {
    textColorsClass,
    bgColorsClass,
    prefix,
    suffix,
    gapClass,
    ignoreDefaultClass,

    // core props
    className,
    children,
    ...restProps
  } = props;

  return (
    <div
      ref={ref}
      className={clsx([
        className,
        gapClass,
        textColorsClass?.default ?? "text-white",
        textColorsClass?.hover ?? "hover:text-white",
        bgColorsClass?.default ?? "bg-indigo-600",
        bgColorsClass?.hover ?? "hover:bg-indigo-700",
        {
          "inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md md:py-4 md:text-lg md:px-10 cursor-pointer":
            ignoreDefaultClass !== true,
        },
      ])}
      {...restProps}
    >
      {prefix}
      {children}
      {suffix}
    </div>
  );
});

HeroButton.defaultProps = {
  textColorsClass: undefined,
  bgColorsClass: undefined,
  prefix: undefined,
  suffix: undefined,
  gapClass: "gap-2",
  ignoreDefaultClass: false,
};

export default HeroButton;
