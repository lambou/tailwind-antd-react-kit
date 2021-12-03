import clsx from "clsx";
import React from "react";
import { Flex } from "../../../../..";
import NewsletterStacked, { NewsletterStackedProps } from "./NewsletterStacked";

type NewsletterStackedImageTopProps = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * Newsletter form
   */
  formProps?: NewsletterStackedProps;

  /**
   * Gap class
   *
   * @default undefined
   */
  gapClass?: string;

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

const NewsletterStackedImageTop = React.forwardRef<
  HTMLDivElement,
  NewsletterStackedImageTopProps
>((props, ref) => {
  // explode props
  const {
    formProps,
    gapClass,
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
        gapClass,
        typeof bordered === "string" ? bordered : undefined,
        typeof shadow === "string" ? shadow : undefined,
        typeof padding === "string" ? padding : undefined,
        {
          "overflow-hidden": overflowHidden === true,
          border: bordered === true,
          "rounded-lg": rounded === true,
          "shadow-md": shadow === true,
          "p-4": padding === true,
        },
      ])}
      {...restProps}
    >
      {(() => {
        // explode image container props
        const { backgroundImage, height, ...restImageContainerStyle } =
          imageContainerStyle ?? {};
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
      {(() => {
        // form props
        const {
          padding: formPadding,
          className: formClassName,
          ...restFormProps
        } = formProps ?? {};
        return (
          <NewsletterStacked
            className={clsx([formClassName, "flex-auto"])}
            padding={formPadding ?? true}
            {...restFormProps}
          />
        );
      })()}
    </div>
  );
});

NewsletterStackedImageTop.defaultProps = {
  rounded: false,
  formProps: undefined,
  gapClass: undefined,
  padding: false,
  bordered: false,
  shadow: false,
  image: undefined,
  imageContainerStyle: undefined,
  imageOverlay: false,
  imageOverlayStyle: undefined,
  imageHeight: "100px",
  overflowHidden: true,
};

export default NewsletterStackedImageTop;
