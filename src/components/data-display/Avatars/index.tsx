import { Obj } from "@noreajs/common";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import { FlexSpace, FlexSpaceProps } from "../../disposition";

export type AvatarsProps = FlexSpaceProps & {
  /**
   * Avatars's container class
   */
  containerClass?: string;

  /**
   * Avatars's item class
   */
  avatarClass?: string;

  /**
   * Item stack direction
   *
   * @default "left"
   */
  stackDirection?: "left" | "right";

  /**
   * Show entire item when hovered
   * @default false
   */
  hoveredItemOnTop?: boolean;

  /**
   * Space covered by the element on its predecessor
   * @default "-10px"
   */
  right?: string;

  /**
   * Item suffix
   */
  suffix?: React.ReactNode;

  /**
   * Item prefix
   */
  prefix?: React.ReactNode;

  /**
   * Item style
   */
  itemStyle?: React.CSSProperties;

  /**
   * Initial z-index
   * @default 0
   */
  initialZIndex?: number;
};

const Avatars: React.FC<AvatarsProps> = React.forwardRef<
  HTMLDivElement,
  AvatarsProps
>((props, ref) => {
  const {
    containerClass,
    avatarClass,
    stackDirection,
    hoveredItemOnTop,
    right,
    itemStyle,
    suffix,
    prefix,
    initialZIndex,
    ...propsRest
  } = props;

  // style explode
  const { marginRight, padding, ...itemStyleRest } = itemStyle ?? {};

  const modifyChild = (child: any, index: number, childrenLength: number) => {
    // explode child props
    const { style, className, ...childPropsRest } = child?.props ?? {};

    // explode direct style
    const { marginRight: directMarginRight, ...directStyleRest } = (style ??
      {}) as React.CSSProperties;

    // current z-index
    const currentZIndex = `${
      stackDirection === "left"
        ? (initialZIndex ?? 0) + index
        : (initialZIndex ?? 0) + childrenLength - index
    }`;

    return React.cloneElement(child, {
      className: clsx([
        "relative inline-flex items-center justify-center h-full",
        "transition duration-500 ease-in-out transform hover:scale-125",
        avatarClass,
        className,
      ]),
      onMouseEnter:
        hoveredItemOnTop === true
          ? (ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
              ev.currentTarget.style.zIndex = `${childrenLength + 1}`;
            }
          : undefined,
      onMouseOut:
        hoveredItemOnTop === true
          ? (ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
              ev.currentTarget.style.zIndex = currentZIndex;
            }
          : undefined,
      style: {
        zIndex: currentZIndex,
        marginRight:
          index !== childrenLength - 1
            ? right ?? "-10px"
            : directMarginRight ?? marginRight,
        ...Obj.merge(itemStyleRest, directStyleRest, "right"),
      },
      ...childPropsRest,
    });
  };

  const safeList = (list: any) => {
    if (!Array.isArray(list)) {
      list = [list];
    }

    const ar = list as any[];

    return ar.filter((item) => !!item);
  };

  return (
    <FlexSpace ref={ref} {...propsRest}>
      <React.Fragment>{prefix}</React.Fragment>
      <span className={clsx([containerClass])}>
        {React.Children.map(safeList(props.children), (child, index) =>
          modifyChild(child, index, safeList(props.children).length)
        )}
      </span>
      <React.Fragment>{suffix}</React.Fragment>
    </FlexSpace>
  );
});

Avatars.propTypes = {
  children: PropTypes.array.isRequired,
};

Avatars.defaultProps = {
  stackDirection: "left",
  hoveredItemOnTop: false,
  initialZIndex: 0,
};

export default Avatars;
