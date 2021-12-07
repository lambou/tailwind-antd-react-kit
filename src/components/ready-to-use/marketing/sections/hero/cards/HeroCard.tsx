import clsx from "clsx";
import React from "react";
import { Flex } from "../../../../..";
import HeroCardTextualBody, {
  HeroCardTextualBodyProps,
} from "../components/HeroCardTextualBody";

export type HeroCardProps = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * Hero header
   */
  header?: React.ReactNode;

  /**
   * Hero body. The attribute replace the textual body (`HeroCardTextualBody`)
   */
  body?: React.ReactNode;

  /**
   * Textual body properties
   */
  textualBodyProps?: HeroCardTextualBodyProps;

  /**
   * Footer
   */
  footer?: React.ReactNode;

  /**
   * Footer container style
   */
  footerContainerStyle?: React.CSSProperties;

  /**
   * Padding
   * when the value is `true`, the tailwind class `p-4` will be applied
   */
  padding?: boolean | string;

  /**
   * Centered items
   */
  centered?: boolean;

  /**
   * Gap class
   *
   * @default `gap-5`
   */
  gapClass?: string;
};

const HeroCard = React.forwardRef<any, HeroCardProps>((props, ref) => {
  // explode props
  const {
    header,
    body,
    textualBodyProps,
    footer,
    footerContainerStyle,
    padding,
    centered,
    gapClass,

    // native props
    className,
    ...restProps
  } = props;

  return (
    <div
      className={clsx([
        className,
        gapClass,
        typeof padding === "string" ? padding : undefined,
        "flex flex-col items-start",
        {
          "items-center": centered === true,
          "px-5 py-10 md:px-10 md:py-20": padding === true,
        },
      ])}
      {...restProps}
    >
      {header}
      {body ? (
        body
      ) : textualBodyProps ? (
        (() => {
          // explode props
          const {
            className: classNameTextualBodyProps,
            centered: centeredTextualBodyProps,
            ...restTextualBodyProps
          } = textualBodyProps ?? {};
          return (
            <HeroCardTextualBody
              className={clsx([classNameTextualBodyProps, ""])}
              centered={centeredTextualBodyProps ?? centered}
              {...restTextualBodyProps}
            />
          );
        })()
      ) : (
        <></>
      )}
      {(() => {
        // explode footer container style
        const { gap: gapFooterContainerStyle, ...restFooterContainerStyle } =
          footerContainerStyle ?? {};
        return (
          <div
            className={clsx("flex items-start justify-start")}
            style={{
              gap: gapFooterContainerStyle ?? "0.75rem",
              ...restFooterContainerStyle,
            }}
          >
            {footer}
          </div>
        );
      })()}
    </div>
  );
});

HeroCard.defaultProps = {
  header: undefined,
  body: undefined,
  textualBodyProps: undefined,
  footer: undefined,
  footerContainerStyle: undefined,
  padding: false,
  centered: undefined,
  gapClass: "gap-5",
};

export default HeroCard;
