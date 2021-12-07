import clsx from "clsx";
import React from "react";
import HeroCard, { HeroCardProps } from "./HeroCard";

export type HeroCardBackgroundProps = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * Newsletter form
   */
  cardProps?: HeroCardProps;

  /**
   * Gap class
   *
   * @default `gap-2`
   */
  gapClass?: string;

  /**
   * Padding
   * when the value is `true`, the tailwind class `p-4` will be applied
   *
   * @default true
   */
  padding?: boolean | string;

  /**
   * Image
   *
   * @default undefined
   */
  backgroundImageUrl?: string;

  /**
   * Image overlay
   * @default false
   */
  overlay?: boolean;

  /**
   * Overlay component (`div`) class
   * @default undefined
   */
  overlayClass?: string;

  /**
   * Image overlay style
   * @default undefined
   */
  overlayStyle?: React.CSSProperties;

  /**
   * Hide overflow
   *
   * @default `true`
   */
  overflowHidden?: boolean;
};

const HeroCardBackground = React.forwardRef<
  HTMLDivElement,
  HeroCardBackgroundProps
>((props, ref) => {
  // explode props
  const {
    cardProps,
    gapClass,
    padding,
    backgroundImageUrl,
    overlay,
    overlayStyle,
    overlayClass,
    overflowHidden,

    /**
     * Native props
     */
    className,
    style,
    ...restProps
  } = props;

  // explode style
  const { backgroundImage, backgroundSize, ...restStyle } = style ?? {};
  return (
    <div
      ref={ref}
      className={clsx([
        className,
        "flex flex-row relative",
        gapClass,
        typeof padding === "string" ? padding : undefined,
        {
          "overflow-hidden": overflowHidden === true,
          "p-4": padding === true,
        },
      ])}
      style={{
        backgroundSize: backgroundSize ?? "cover",
        backgroundImage: backgroundImage ?? `url(${backgroundImageUrl})`,
        ...restStyle,
      }}
      {...restProps}
    >
      {overlay === true &&
        (function () {
          // overlay style explode
          const { pointerEvents: pointerEventsOverlay, ...restOverlayStyle } =
            overlayStyle ?? {};
          return (
            <div
              className={clsx([
                overlayClass,
                "absolute inset-0 z-0",
                {
                  "bg-primary-500":
                    overlayStyle === undefined && overlayClass === undefined,
                },
              ])}
              style={{
                pointerEvents: pointerEventsOverlay ?? "none",
                ...restOverlayStyle,
              }}
            ></div>
          );
        })()}
      {(() => {
        // form props
        const {
          padding: formPadding,
          className: formClassName,
          ...restFormProps
        } = cardProps ?? {};
        return (
          <HeroCard
            className={clsx([
              formClassName,
              "flex-auto",
              { "z-10": overlay === true },
            ])}
            padding={formPadding ?? true}
            {...restFormProps}
          />
        );
      })()}
    </div>
  );
});

HeroCardBackground.defaultProps = {
  cardProps: undefined,
  gapClass: undefined,
  padding: true,
  backgroundImageUrl: undefined,
  overlay: false,
  overlayClass: undefined,
  overlayStyle: undefined,
  overflowHidden: true,
};

export default HeroCardBackground;
