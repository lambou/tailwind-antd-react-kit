import clsx from "clsx";
import React from "react";
import { Flex } from "../../../../..";
import HeroCard, { HeroCardProps } from "./HeroCard";

export type HeroCardImageRightProps = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * Newsletter form
   */
  cardProps?: HeroCardProps;

  /**
   * Gap class
   *
   * @default undefined
   */
  gapClass?: string;

  /**
   * Padding
   * when the value is `true`, the tailwind class `p-4` will be applied
   *
   * @default false
   */
  padding?: boolean | string;

  /**
   * Image
   *
   * @default undefined
   */
  image?: string | React.ReactNode;

  /**
   * Image container width. value of `width` css property
   * @default `620px`
   */
  imageWidth?: string | number;

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

  /**
   * Component in the middle
   */
  middle?: React.ReactNode;
};

const HeroCardImageRight = React.forwardRef<
  HTMLDivElement,
  HeroCardImageRightProps
>((props, ref) => {
  // explode props
  const {
    cardProps,
    gapClass,
    padding,
    image,
    imageWidth,
    imageContainerStyle,
    imageOverlay,
    imageOverlayStyle,
    overflowHidden,
    middle,

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
        "flex flex-row",
        gapClass,
        typeof padding === "string" ? padding : undefined,
        {
          "overflow-hidden": overflowHidden === true,
          "p-4": padding === true,
        },
      ])}
      {...restProps}
    >
      {(() => {
        // form props
        const {
          padding: formPadding,
          className: formClassName,
          ...restFormProps
        } = cardProps ?? {};
        return (
          <HeroCard
            className={clsx([formClassName, "flex-auto"])}
            padding={formPadding ?? true}
            {...restFormProps}
          />
        );
      })()}
      {middle}
      {(() => {
        // explode image container props
        const {
          backgroundImage,
          backgroundSize,
          width,
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
              width: width ?? imageWidth,
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
    </div>
  );
});

HeroCardImageRight.defaultProps = {
  cardProps: undefined,
  gapClass: undefined,
  padding: false,
  image: undefined,
  imageContainerStyle: undefined,
  imageOverlay: false,
  imageOverlayStyle: undefined,
  imageWidth: "620px",
  overflowHidden: true,
  middle: undefined,
};

export default HeroCardImageRight;
