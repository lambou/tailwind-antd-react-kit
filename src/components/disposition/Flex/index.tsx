import React, { ReactHTML, useContext } from "react";
import { Property } from "csstype";
import { designContext } from "../../providers/DesignProvider";
import { Obj } from "@noreajs/common";

export type FlexGapOptions = {
  row?: Property.RowGap;
  column?: Property.ColumnGap;
};

export type FlexProps = Omit<React.HTMLAttributes<HTMLElement>, "style"> & {
  /**
   * HTML element to render
   *
   * @default div
   */
  as?: keyof ReactHTML;

  /**
   * Use `inline-flex` instead of flex.
   *
   * @default false
   */
  inline?: boolean;

  /**
   * This establishes the main-axis, thus defining the direction flex items are placed in the flex container.
   *
   * **original name**: `flex-direction`
   *
   * @default `row`
   */
  direction?: Property.FlexDirection;

  /**
   * By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property.
   *
   * **original name**: `flex-wrap`
   *
   * @default `wrap`
   */
  wrap?: Property.FlexWrap;

  /**
   * This defines the alignment along the main axis.
   *
   * **original name**: `justify-content`
   *
   * @default `flex-start`
   */
  justify?: Property.JustifyContent;

  /**
   * This defines the default behavior for how flex items are laid out along the cross axis on the current line.
   *
   * **original name**: `align-items`
   *
   * @default `stretch`
   */
  items?: Property.AlignItems;

  /**
   * This defines the default behavior for how flex items are laid out along the cross axis on the current line.
   *
   * **original name**: `align-content`
   *
   * @default `normal`
   */
  content?: Property.AlignContent;

  /**
   * The gap property explicitly controls the space between flex items.
   */
  gap?: Property.Gap | FlexGapOptions;

  /**
   * Style
   */
  style?: Omit<
    React.CSSProperties,
    | "display"
    | "alignItems"
    | "flexDirection"
    | "flexWrap"
    | "justifyContent"
    | "alignContent"
    | "gap"
    | "rowGap"
    | "columnGap"
  >;
};

/**
 * Flexbox component
 *
 * *Full react component*
 *
 * **doc**: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
 *
 * **mozilla doc**: https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox
 */
const Flex = React.forwardRef<HTMLDivElement, FlexProps>((props, ref) => {
  // load global props
  const { flexProps } = useContext(designContext);
  // explode props
  const {
    as,
    className,
    inline,
    direction,
    wrap,
    justify,
    items,
    content,
    gap,
    style,
    children,
    ...restProps
  } = Obj.mergeStrict(props, flexProps ?? {}, "left");

  return React.createElement(as ?? "div", {
    ref: ref,
    className: className,
    style: {
      display: inline ? "inline-flex" : "flex",
      alignItems: items,
      flexDirection: direction,
      flexWrap: wrap,
      justifyContent: justify,
      alignContent: content,
      ...(function () {
        if (typeof gap !== "object") {
          return { gap: gap };
        } else {
          const r: FlexGapOptions = {};
          // row defined
          if (!!gap.row) {
            r.row = gap.row;
          }
          // column gap defined
          if (!!gap.column) {
            r.column = gap.column;
          }
          return r;
        }
      })(),
      ...(style ?? {}),
    },
    children: children,
    ...restProps,
  });
});

Flex.defaultProps = {};

export default Flex;
