import React, { ReactHTML, useContext } from "react";
import { Property } from "csstype";
import { designContext } from "../../providers/DesignProvider";
import { Obj } from "@noreajs/common";

export type FlexItemProps = Omit<React.HTMLAttributes<HTMLElement>, "style"> & {
  /**
   * HTML element to render
   *
   * @default div
   */
  as?: keyof ReactHTML;

  /**
   * By default, flex items are laid out in the source order. However, the order property controls the order in which they appear in the flex container.
   *
   * @default 0
   */
  order?: Property.Order;

  /**
   * This defines the ability for a flex item to grow if necessary.
   * It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.
   *
   * **original name**: `flex-grow`
   *
   * @default 0
   */
  grow?: Property.FlexGrow;

  /**
   * This defines the ability for a flex item to shrink if necessary.
   *
   * **original name**: `flex-shrink`
   *
   * @default 1
   */
  shrink?: Property.FlexShrink;

  /**
   * This allows the default alignment (or the one specified by align-items) to be overridden for individual flex items
   *
   * **original name**: `align-self`
   *
   * @default `auto`
   */
  self?: Property.AlignSelf;

  /**
   * This defines the default size of an element before the remaining space is distributed. It can be a length (e.g. 20%, 5rem, etc.) or a keyword.
   *
   * **original name**: `flex-basis`
   *
   * @default `auto`
   */
  basis?: Property.FlexBasis;

  /**
   * Style
   */
  style?: Omit<
    React.CSSProperties,
    "order" | "flexGrow" | "flexShrink" | "alignSelf" | "flexBasis"
  >;
};

/**
 * Flexbox item component
 *
 * *Full react component*
 *
 * **doc**: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
 *
 * **mozilla doc**: https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox
 */
const FlexItem = React.forwardRef<HTMLDivElement, FlexItemProps>(
  (props, ref) => {
    // load global props
    const { flexItemProps } = useContext(designContext);
    // explode props
    const {
      as,
      className,
      order,
      grow,
      shrink,
      self,
      basis,
      style,
      children,
      ...restProps
    } = Obj.mergeStrict(props, flexItemProps ?? {}, "left");

    return React.createElement(as ?? "div", {
      ref: ref,
      className: className,
      style: {
        order: order,
        flexGrow: grow,
        flexShrink: shrink,
        alignSelf: self,
        flexBasis: basis,
        ...(style ?? {}),
      },
      ...restProps,
      children: children,
    });
  }
);

FlexItem.defaultProps = {};

export default FlexItem;
